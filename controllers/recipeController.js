import mongoose from 'mongoose';
import { Recipe } from '../models/recipe.js';
import { Review } from '../models/review.js';

export async function getAllRecipes(req, res) {
    const data = await Recipe.find();
    res.json(data);
};

export async function getRecipe(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
};

export async function createRecipe(req, res) {
    try {
        const newRecipe = new Recipe(req.body);
        newRecipe.creator = new mongoose.Types.ObjectId(req.body.creator);
        await newRecipe.save();
        res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
    } catch (err) {
        console.error(`Unable to post a new recipe: ${err}`);
        res.status(500).send({ message: err.message });
    };
};

// export async function postRecipe(req, res) {
//     const { title, ingredients, instructions, category } = req.body;
//     const creator = new mongoose.Types.ObjectId(req.body.creator);
//     try {
//         const newRecipe = new Recipe({
//             title,
//             ingredients,
//             instructions,
//             category,
//             creator,
//         });
//         await newRecipe.save();
//         res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
//     } catch (err) {
//         console.error(`Unable to post a new recipe: ${err}`);
//         res.status(500).send({ message: err.message });
//     }
// };


export async function updateRecipe(req, res) {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ "message": "Recipe updated successfully", "recipe": recipe });
};

export async function deleteRecipe(req, res) {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ "message": "Recipe deleted successfully" });
};

// Retrieve recipes with rating
export async function getAllRecipesWithRating(req, res) {
    try {
        const recipeList = await Recipe.aggregate([
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'recipe',
                    as: 'review',
                },
            },
            {
                $unwind: '$review',
            },
            {
                $group: {
                    _id: '$title',
                    average_rating: { $avg: '$review.rating' },
                },
            },
        ]);
        res.status(200).send(recipeList);
    } catch (err) {
        console.error('Unable to retrieve recipes with rating');
        res.status(500).send({ message: err.message });
    }
};


// For Reviews associated with a specific Recipe
export async function getReviews(req, res) {
    const recipeID = new mongoose.Types.ObjectId(req.params.id);
    try {
        const reviewList = await Review.find({ recipe: recipeID });
        res.status(200).send(reviewList);
    } catch (err) {
        console.error(`Unable to retrieve reviews for a specific recipe: ${err}`);
        res.status(500).send({ message: err.message });
    }
};

export async function getReviewByID(req, res) {
    const recipeID = new mongoose.Types.ObjectId(req.params.recipe_id);
    const reviewID = new mongoose.Types.ObjectId(req.params.review_id);
    try {
        const review = await Review.find({
            _id: reviewID,
            recipe: recipeID,
        }).exec();
        res.status(200).send(review);
    } catch (err) {
        console.error(
            `Unable to retrieve a specific review for a specific recipe: ${err}`
        );
        res.status(500).send({ message: err.message });
    }
};

export async function postReview(req, res) {
    const { rating, comment } = req.body;
    const userID = new mongoose.Types.ObjectId(req.body.user);
    const recipeID = new mongoose.Types.ObjectId(req.params.id);
    try {
        const newReview = Review({
            rating,
            comment,
            user: userID,
            recipe: recipeID,
        });
        await newReview.save();
        res.status(201).send('Review added suucessfully');
    } catch (err) {
        console.error(`Unable to post a review: ${err}`);
        res.status(500).send({ message: err.message });
    }
};

export async function updateReviewByID(req, res) {
    const recipeID = new mongoose.Types.ObjectId(req.params.recipe_id);
    const reviewID = new mongoose.Types.ObjectId(req.params.review_id);
    const { rating, comment } = req.body;
    try {
        const updatedReview = await Review.findOneAndUpdate(
            {
                _id: reviewID,
                recipe: recipeID,
            },
            {
                rating,
                comment,
            }
        );
        res.status(200).send('Review updated successfully');
    } catch (err) {
        console.error(
            `Unable to update a specific review for a specific recipe: ${err}`
        );
        res.status(500).send({ message: err.message });
    }
};

export async function deleteReviewByID(req, res) {
    const recipeID = new mongoose.Types.ObjectId(req.params.recipe_id);
    const reviewID = new mongoose.Types.ObjectId(req.params.review_id);
    try {
        const deletedReview = await Review.findOneAndDelete({
            _id: reviewID,
            recipe: recipeID,
        });
        res.status(200).send('Review deleted successfully');
    } catch (err) {
        console.error(
            `Unable to delete a specific review for a specific recipe: ${err}`
        );
        res.status(500).send({ message: err.message });
    }
};

// For User-Recipe Interaction
export async function getCreatorByRecipe(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    try {
        const recipe = await Recipe.findById(id).populate('creator');
        res.status(200).send(recipe.creator);
    } catch (err) {
        console.error('Unable to find the creator for this recipe');
        res.status(500).send({ message: err.message });
    }
};
