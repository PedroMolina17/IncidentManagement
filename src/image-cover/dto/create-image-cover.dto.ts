import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImageCoverDto {
  img_url: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  incidents_id: number;
}
