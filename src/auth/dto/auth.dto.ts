import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class authDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
