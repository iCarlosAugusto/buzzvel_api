import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
