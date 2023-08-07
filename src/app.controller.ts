import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dtos/create-task-dto';
import { DeleteTaskDto } from './dtos/delete-task-dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { CreateSubtaskDto } from './dtos/create-subtask-dto';
import { GetAllTasksDto } from './dtos/get-all-tasks.dto';

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
  getAll(@Query() query: GetAllTasksDto) {
    console.log(typeof query.isDone);
    return this.appService.getAll(query);
  }

  @Post('/delete')
  delete(@Body() deleteTaskDto: DeleteTaskDto) {
    return this.appService.delete(deleteTaskDto);
  }

  @Post('/update')
  update(@Body() updateTaskDto: UpdateTaskDto) {
    return this.appService.update(updateTaskDto);
  }

  @Post('/createSubtask')
  createSubtask(@Body() createSubtaskDto: CreateSubtaskDto) {
    return this.appService.createSubtask(createSubtaskDto);
  }
}
