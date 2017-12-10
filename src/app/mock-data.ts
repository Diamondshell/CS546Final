import {Recipe } from './recipe';
import {User } from './user';
import {RecipeDetail } from './recipeDetails';
export const recipes: Recipe[] = [
    {name: "bread", content: "How To Make", id: "1"},
    {name: "Eggs", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
    {name: "Salads", content: "How To Make", id: "1"},
  ];

  export const  profileInfo: User= 
    {username: "Food Eater 9000", email: "foo9000@eater.com", description: "I like to eat food. 9000 food."};
  
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
        Comments: [{recID:"ert", username:"Jim", Comment: "this thing sucks"},
        {recID:"ert", username:"Jim", Comment: "this thing sucks"},
        {recID:"ert", username:"Jim", Comment: "this thing sucks"}]
        };