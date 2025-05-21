import { TodoSchema } from './todo.schema';

describe('TodoSchema', () => {
  it('should be defined', () => {
    expect(new TodoSchema()).toBeDefined();
  });
});
