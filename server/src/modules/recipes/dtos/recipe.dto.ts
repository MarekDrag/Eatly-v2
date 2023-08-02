export class RecipeDto {
  id: string;
  imgUrl: string | null;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
  type: 'meat' | 'vege';
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  creatorId: string;
  status: 'private' | 'public';
  createdAt: string;
  deletedAt: string;
}
