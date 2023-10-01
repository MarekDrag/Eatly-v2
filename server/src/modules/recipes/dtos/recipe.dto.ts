import { Ingredient, RecipeComment } from '@types';

export class RecipeDto {
  id: string;
  imgUrl: string | null;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  cookingTime: number;
  description: string;
  type: 'meat' | 'vege';
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  ingredients: Ingredient[];
  comments: RecipeComment[];
  creatorId: string;
  status: 'private' | 'public';
  createdAt: string;
  deletedAt: string;
}
