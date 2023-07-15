export class Recipe {
  id: string;
  name: string;
  imgUrl: string | null;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
  type: 'meat' | 'vege';
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  createdAt: string;
  deletedAt: string;
}
