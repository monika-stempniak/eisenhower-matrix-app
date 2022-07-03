import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todosSlice';

import { Priority, TodoType } from '../../utils/types';
import {
  DeleteIcon,
  TodoContainer,
  TodoDate,
  TodoText,
  TodoTitle,
  TodoTitleContainer,
} from './Todos.style';

type TodoProps = {
  todo: TodoType;
};

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { id, priority, title, comment, deadline } = todo;

  const dispatch = useDispatch();

  return (
    <TodoContainer>
      <TodoTitleContainer>
        <TodoTitle>{title}</TodoTitle>
        <DeleteIcon onClick={() => dispatch(deleteTodo(id))}>
          &#10006;
        </DeleteIcon>
      </TodoTitleContainer>
      {deadline &&
        (priority === Priority.UrgentImportant ||
          priority === Priority.UrgentNotImportant) && (
          <TodoDate>deadline: {deadline}</TodoDate>
        )}
      <TodoText>{comment}</TodoText>
    </TodoContainer>
  );
};
