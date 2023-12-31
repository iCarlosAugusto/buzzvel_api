import { Injectable } from '@nestjs/common';
import { DeleteTaskDto } from './dtos/delete-task-dto';
import { CreateTaskDto } from './dtos/create-task-dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskRepository } from './repositories/task.repository';
import { CreateSubtaskDto } from './dtos/create-subtask-dto';
import { GetAllTasksDto } from './dtos/get-all-tasks.dto';

@Injectable()
export class AppService {
  constructor(private taskRepository: TaskRepository) {}

  async create(data: CreateTaskDto) {
    return await this.taskRepository.create(data);
  }

  async getAll(data: GetAllTasksDto) {
    return await this.taskRepository.getAll(data);
  }

  async delete(data: DeleteTaskDto) {
    return await this.taskRepository.delete(data);
  }

  async update(data: UpdateTaskDto) {
    return await this.taskRepository.update(data);
  }

  async createSubtask(data: CreateSubtaskDto) {
    return await this.taskRepository.createSubtask(data);
  }
}
