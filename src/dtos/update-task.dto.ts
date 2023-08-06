import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
