import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeUserDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
