export class RecipeDto {
  id: string;
  imgUrl: string | null;
  name: string;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
  createdAt: string;
  deletedAt: string;
}
