export type Step = {
  content: string;
  order: number;
};

export type Ingredient = {
  amount: number;
  measure: string;
  name: string;
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
  steps: Step[];
  ingredients: Ingredient[];
};

export type Comment = {
  author: string;
  authorAvatar: string;
  likes: number;
  content: string;
  createdAt: string;
};
