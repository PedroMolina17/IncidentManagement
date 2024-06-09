import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIncidentTypeDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
