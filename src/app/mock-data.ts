import {Recipe } from './recipe';
import {User } from './user';
import {RecipeDetail } from './recipeDetails';
export const recipes: Recipe[] = [
    {name: "bread", content: "This is a very good bread recipe", id: "1", rating: 4},
    {name: "Eggs", content: "This is a very good scrambled eggs recipe", id: "1", rating: 3},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 2},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 5},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 1},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 3.5},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 4},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 4},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 4},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 4},
    {name: "Salads", content: "This is a very good salad recipe", id: "1", rating: 4},
  ];

  export const  profileInfo: User= 
    {_id: "Food Eater 9000", password:"NOOO", email: "foo9000@eater.com", description: "I like to eat food. 9000 food."};
  
    export const recipeDetail:RecipeDetail = {
        _id: "asdf",
        name: "Ketchup Fudge",
        description:"A Horrific Fudge Recipe, just like your mom never used to made",
        avgRating: 1,
        price: 6.57,
        cookTime: 25,
        userid: "Jack K.",
        appliances: ["Blender", "Microwave"],
        popularity: -5,
        tags: ["What", "Fudge", "Unusual"],
        ingredients: ["White Chocolate Chips", "Ketchup", "Maple Syrup"],
        steps: ["Lose all sense of self", "Make this"],
        comments: [{recipeId:"ert", _id:"Jim", userId:"Jim", comment: "this thing sucks"},
        {recipeId:"ert", _id:"Jim", userId:"Jim", comment: "this thing sucks"},
        {recipeId:"ert", _id:"Jim", userId:"Jim", comment: "this thing sucks"}]
        };