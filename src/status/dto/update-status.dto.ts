import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
