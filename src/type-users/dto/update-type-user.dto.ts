import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTypeUserDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
