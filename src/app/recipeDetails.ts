import {Comment} from './comments';
export class RecipeDetail {
  _id: string;
  name: string;
  description:string;
  avgRating: number;
  price: number
  cookTime: number;
  userid: string;
  appliances: string[];
  popularity: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  comments: Comment[];
};
