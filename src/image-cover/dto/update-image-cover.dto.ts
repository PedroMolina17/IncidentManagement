import { IsOptional, IsString } from 'class-validator';
export class UpdateImageCoverDto {
  img_url?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
