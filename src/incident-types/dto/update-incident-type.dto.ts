import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateIncidentTypeDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
