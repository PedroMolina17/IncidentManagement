import { IsNumber, IsString } from 'class-validator';

export class Status {
  @IsNumber()
  status_id: number;
  @IsString()
  description: string;
}
