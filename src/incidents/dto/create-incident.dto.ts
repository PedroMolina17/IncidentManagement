import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIncidentDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  status_id: number;
  @IsNumber()
  @IsNotEmpty()
  type_incidents_id: number;
  @IsNumber()
  @IsNotEmpty()
  room_id: number;
}
