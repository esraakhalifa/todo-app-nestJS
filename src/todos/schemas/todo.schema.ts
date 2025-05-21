import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

export enum TodoStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

@Schema(
    {
        toJSON: {
          transform: function (doc, ret) {
            ret.id = ret._id;     
            delete ret._id;  
            delete ret.__v;       // remove __v
          },
        },
      }
)
export class Todo {
  @Prop({ required: true })
  task: string;

  @Prop({ enum: TodoStatus, default: TodoStatus.PENDING })
  status: TodoStatus;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
