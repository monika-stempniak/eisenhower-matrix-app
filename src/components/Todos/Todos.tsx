import { TodoType } from '../../utils/types';
import { Todo } from '../Todos/Todo';

type TodosProps = {
  todos: TodoType[];
};

export const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ priority, title }) => (
        <Todo key={title} todo={`${priority}-${title}`} />
      ))}
    </ul>
  );
};
