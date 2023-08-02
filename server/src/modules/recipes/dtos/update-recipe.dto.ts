import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRecipeDto {
  @IsOptional()
  imgUrl: string | null;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  time?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['meat', 'vege'])
  type?: 'meat' | 'vege';

  @IsOptional()
  @IsIn(['breakfast', 'lunch', 'dinner', 'snack', 'dessert'])
  meal?: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert';

  @IsOptional()
  @IsIn(['public', 'private'])
  status?: 'public' | 'private';
}
