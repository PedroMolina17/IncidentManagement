import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImageDescriptionDto {
  @IsString()
  @IsNotEmpty()
  img_url: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  image_cover_id: number;
}
