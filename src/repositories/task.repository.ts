import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateTaskDto } from 'src/dtos/create-task-dto';
import { DeleteTaskDto } from 'src/dtos/delete-task-dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async create({ title, message }: CreateTaskDto) {
    try {
      const task = await this.prisma.task.create({
        data: {
          title,
          message,
        },
      });
      return task;
    } catch (error) {
      throw new HttpException(
        'Error, try again later',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async getAll() {
    try {
      const tasks = await this.prisma.task.findMany();
      return tasks;
    } catch (error) {
      throw new HttpException(
        'Error, try again later',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async delete({ id }: DeleteTaskDto) {
    try {
      const task = await this.prisma.task.delete({
        where: {
          id,
        },
      });
      return task;
    } catch (error) {
      throw new HttpException(
        'Error, try again later',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  async update({ id, title, message }: UpdateTaskDto) {
    try {
      const task = await this.prisma.task.update({
        where: {
          id,
        },
        data: {
          title,
          message,
        },
      });
      return task;
    } catch (error) {
      throw new HttpException(
        'Error, try again later',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
}
