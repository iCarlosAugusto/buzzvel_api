import { Injectable } from '@nestjs/common';
import { DeleteTaskDto } from './dtos/delete-task-dto';
import { CreateTaskDto } from './dtos/create-task-dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class AppService {
  constructor(private taskRepository: TaskRepository) {}

  async create(data: CreateTaskDto) {
    return await this.taskRepository.create(data);
  }

  async getAll() {
    return await this.taskRepository.getAll();
  }

  async delete(data: DeleteTaskDto) {
    return await this.taskRepository.delete(data);
  }

  async update(data: UpdateTaskDto) {
    return await this.taskRepository.update(data);
  }
}
