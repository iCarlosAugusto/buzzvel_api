import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dtos/create-task-dto';
import { DeleteTaskDto } from './dtos/delete-task-dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health() {
    return 'It is ok';
  }

  @Post('/create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.appService.create(createTaskDto);
  }

  @Get('/getAll')
  getAll() {
    return this.appService.getAll();
  }

  @Post('/delete')
  delete(@Body() deleteTaskDto: DeleteTaskDto) {
    return this.appService.delete(deleteTaskDto);
  }

  @Post('/update')
  update(@Body() updateTaskDto: UpdateTaskDto) {
    return this.appService.update(updateTaskDto);
  }
}
