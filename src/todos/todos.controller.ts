import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todosService.addTodo(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
