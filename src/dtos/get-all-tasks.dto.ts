import { IsOptional, IsString } from 'class-validator';

export class GetAllTasksDto {
  @IsOptional()
  @IsString()
  isDone?: string;
}
