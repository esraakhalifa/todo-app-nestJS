import { Controller } from '@nestjs/common';
import { Get, Delete, Post, Patch, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoStatus } from './todo.type';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
  @Get(':id')
  getTodoById(@Param('id') id: number) {
    return this.todosService.getTodoById(+id);
  }
  @Post()
  addTodo(@Body('task') task: string) {
    return this.todosService.addTodo(task);
  }
  //   @Put(':id')
  //   updateTodo(
  //     @Param('id') id: number,
  //     @Body('task') task: string,
  //     @Body('status') status: TodoStatus,
  //   ) {
  //     return this.todosService.updateTodo(+id, task, status);
  //   }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(+id);
  }
  @Patch(':id')
  partialUpdateTodo(
    @Param('id') id: string,
    @Body('task') task?: string,
    @Body('status') status?: TodoStatus,
  ) {
    return this.todosService.updateTodo(+id, task, status);
  }
}
