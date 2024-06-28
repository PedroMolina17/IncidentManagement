import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIncidentDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  ubication: string;
  @IsDate()
  @IsNotEmpty()
  date: Date;
  @IsNumber()
  @IsNotEmpty()
  status_id: number;
  @IsNumber()
  @IsNotEmpty()
  type_incidents_id: number;
  @IsNumber()
  @IsNotEmpty()
  image_cover_id: number;
  @IsNumber()
  @IsNotEmpty()
  users_id: number;
}
