import { IsNumber, IsString } from 'class-validator';

export class Incident {
  @IsNumber()
  room_id: number;

  @IsString()
  name: string;
}
