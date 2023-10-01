export type Step = {
  content: string;
  order: number;
};

export type Comment = {
  author: string;
  authorAvatar: string;
  likes: number;
  content: string;
  createdAt: string;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  imgUrl: string | null;
  ratingValue: number;
  reviewsNumber: number;
  cookingTime: number;
  status: 'private' | 'public';
  type: 'meat' | 'vege';
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';
  persons: number;
  calories: number;
  isLiked: boolean;
  steps: Step[];
  comments: Comment[];
  createdAt: Date;
  deletedAt: Date;
};
