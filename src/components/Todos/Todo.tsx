import { Priority, TodoType } from '../../utils/types';
import {
  TodoContainer,
  TodoText,
  TodoTitle,
  TodoTitleContainer,
} from './Todos.style';

type TodoProps = {
  todo: TodoType;
};

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { priority, title, comment, deadline } = todo;
  return (
    <TodoContainer>
      <TodoTitleContainer>
        <TodoTitle>{title}</TodoTitle>
        {deadline &&
          (priority === Priority.UrgentImportant ||
            priority === Priority.UrgentNotImportant) && (
            <TodoText>{deadline.toDateString()}</TodoText>
          )}
      </TodoTitleContainer>
      <TodoText>{comment}</TodoText>
    </TodoContainer>
  );
};
