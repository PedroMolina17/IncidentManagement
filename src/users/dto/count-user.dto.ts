import { Type } from 'class-transformer';
import { IsOptional, IsInt } from 'class-validator';

export class CountDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  type_user_id?: number;
}
