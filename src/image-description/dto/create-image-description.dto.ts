import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageDescriptionDto {
  @IsString()
  @IsNotEmpty()
  img_url: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
