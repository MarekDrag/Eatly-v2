export type Step = {
  content: string;
  order: number;
};

export type Ingredient = {
  amount: number;
  measure: string;
  name: string;
};

export type Comment = {
  id: string;
  author: string;
  authorAvatar: string;
  likes: number;
  content: string;
  createdAt: Date;
};

export type Recipe = {
  id: string;
  name: string;
  imgUrl: string | null;
  ratingValue: number;
  reviewsNumber: number;
  cookingTime: number;
  description: string;
  status: 'private' | 'public';
  type: 'meat' | 'vege';
  meal: ('breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert')[];
  persons: number;
  calories: number;
  isLiked: boolean;
  createdAt: string;
  comments: Comment[];
  steps: Step[];
  ingredients: Ingredient[];
};
