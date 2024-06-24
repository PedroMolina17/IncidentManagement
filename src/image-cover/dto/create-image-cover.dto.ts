import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageCoverDto {
  @IsString()
  @IsNotEmpty()
  img_url: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
