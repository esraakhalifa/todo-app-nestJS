import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async getTodoById(id: string): Promise<Todo> {
    const todo = await this.todoModel.findById(id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  async addTodo(createDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(createDto);
    return newTodo.save();
  }

  async updateTodo(id: string, updateDto: UpdateTodoDto): Promise<Todo> {
    const updated = await this.todoModel.findByIdAndUpdate(id, updateDto, { new: true });
    if (!updated) throw new NotFoundException('Todo not found');
    return updated;
  }

  async deleteTodo(id: string): Promise<string> {
    const deleted = await this.todoModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Todo not found');
    return 'Todo deleted successfully';
  }
}