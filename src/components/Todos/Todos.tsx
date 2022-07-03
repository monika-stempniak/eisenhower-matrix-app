import { useSelector } from 'react-redux';

import type { RootState } from '../../redux/store';
import { Priority } from '../../utils/types';
import { Todo } from '../Todos/Todo';
import { TodosContainer } from './Todos.style';

type TodosProps = {
  priority: Priority;
};

export const Todos: React.FC<TodosProps> = ({ priority }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <TodosContainer>
      <ul>
        {todos
          .filter((todo) => todo.priority === priority)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </ul>
    </TodosContainer>
  );
};
