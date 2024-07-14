import { IsNotEmpty, IsString } from 'class-validator';

export class CreateImageCoverDto {
  img_url: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
