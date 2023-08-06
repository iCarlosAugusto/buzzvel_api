import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSubtaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  taskId: string;
}
