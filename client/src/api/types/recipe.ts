export type Recipe = {
  id: string;
  name: string;
  imgUrl: string | null;
  ratingValue: number;
  reviewsNumber: number;
  time: number;
  description: string;
  isLiked: boolean;
};
