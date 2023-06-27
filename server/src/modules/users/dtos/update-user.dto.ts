import { IsBoolean, IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  lastName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^(en|pl)$/, { message: 'Language must be either "en" or "pl"' })
  language?: 'en' | 'pl';

  @IsOptional()
  @IsString()
  @Matches(/^(light|dark)$/, { message: 'Theme mode must be either "light" or "dark"' })
  themeMode?: 'light' | 'dark';

  @IsOptional()
  @IsBoolean()
  emailNotificationsAgreement?: boolean;

  @IsOptional()
  @IsBoolean()
  newRecipesAgreement?: boolean;
}
