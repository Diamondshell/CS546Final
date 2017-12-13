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
        Name: "Ketchup Fudge",
        Description:"A Horrific Fudge Recipe, just like your mom never used to made",
        Rating: 1,
        Price: 6.57,
        Cooking_Time: 25,
        poster: "Jack K.",
        Appliance: ["Blender", "Microwave"],
        Popularity: -5,
        Tags: ["What", "Fudge", "Unusual"],
        Ingredients: ["White Chocolate Chips", "Ketchup", "Maple Syrup"],
        Steps: ["Lose all sense of self", "Make this"],
        Comments: [{recID:"ert", _id:"Jim", Comment: "this thing sucks"},
        {recID:"ert", _id:"Jim", Comment: "this thing sucks"},
        {recID:"ert", _id:"Jim", Comment: "this thing sucks"}]
        };