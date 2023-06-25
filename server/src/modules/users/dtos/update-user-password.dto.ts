import { IsString, Matches, MinLength } from 'class-validator';

export class UpdateUserPasswordDto {
  @IsString()
  password: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number',
  })
  newPassword: string;
}
