import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { TodoStatus } from '../schemas/todo.schema';
export class CreateTodoDto {
  @IsNotEmpty({ message: 'Task is required' })
  @IsString()
  task: string;

  @IsEnum(TodoStatus, { message: 'Invalid status' })
status?: TodoStatus;
}
