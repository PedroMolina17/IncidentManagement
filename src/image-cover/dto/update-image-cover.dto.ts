import { IsOptional, IsString } from 'class-validator';
export class UpdateImageCoverDto {
  @IsOptional()
  @IsString()
  img_url?: string;
  @IsOptional()
  @IsString()
  description?: string;
}
