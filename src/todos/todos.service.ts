import { Injectable } from '@nestjs/common';
import { Todo, TodoStatus } from './todo.type';
// import { Todo } from './todo.type';
// import { TodoStatus } from './todo.type';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 1, task: 'Todo 1', status: TodoStatus.PENDING },
    { id: 2, task: 'Todo 2', status: TodoStatus.IN_PROGRESS },
    { id: 3, task: 'Todo 3', status: TodoStatus.COMPLETED },
  ];

  //   constructor() {}

  getTodos() {
    return this.todos;
  }
  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }
  addTodo(task: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      task,
      status: TodoStatus.PENDING,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
  updateTodo(id: number, task?: string, status?: TodoStatus) {
    const todo = this.getTodoById(id);
    if (todo && (task || status)) {
      if (task) {
        todo.task = task;
      }
      if (status) {
        todo.status = status;
      }
      return todo;
    }
    return null;
  }
  deleteTodo(id: number) {
    const todo = this.getTodoById(id);
    if (!todo) {
      return 'Todo not found';
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return 'Todo deleted successfully';
  }
}
