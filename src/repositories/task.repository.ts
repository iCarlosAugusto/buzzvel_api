import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateSubtaskDto } from 'src/dtos/create-subtask-dto';
import { CreateTaskDto } from 'src/dtos/create-task-dto';
import { DeleteTaskDto } from 'src/dtos/delete-task-dto';
import { GetAllTasksDto } from 'src/dtos/get-all-tasks.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async create({ title }: CreateTaskDto) {
    try {
      const task = await this.prisma.task.create({
        data: {
          title,
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

  async getAll({ isDone }: GetAllTasksDto) {
    const isTrue = isDone === undefined ? undefined : isDone === 'true';
    try {
      const tasks = await this.prisma.task.findMany({
        include: {
          subTasks: true,
        },
        where: {
          isDone: isTrue,
        },
      });
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

  async update({ id, title, message, isDone }: UpdateTaskDto) {
    try {
      const task = await this.prisma.task.update({
        where: {
          id,
        },
        data: {
          title,
          isDone,
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

  async createSubtask({ taskId, title }: CreateSubtaskDto) {
    try {
      const subtask = await this.prisma.subtask.create({
        data: {
          taskId,
          title,
        },
      });
      return subtask;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error, try again later',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
}
