import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, resolveTodo } from '../../redux/todosSlice';

import { Priority, TodoType } from '../../utils/types';
import {
  DeleteIcon,
  TodoContainer,
  TodoDate,
  TodoLabel,
  TodoLabels,
  TodoText,
  TodoTitle,
  TodoTitleContainer,
} from './Todos.style';

type TodoProps = {
  todo: TodoType;
};

export const Todo: React.FC<TodoProps> = memo(({ todo }) => {
  const { id, priority, title, comment, deadline, labels, done } = todo;

  const dispatch = useDispatch();

  return (
    <TodoContainer>
      <TodoTitleContainer>
        <TodoTitle done={done}>{title}</TodoTitle>
        <div>
          <DeleteIcon onClick={() => dispatch(resolveTodo(id))}>
            &#10004;
          </DeleteIcon>
          <DeleteIcon onClick={() => dispatch(deleteTodo(id))}>
            &#10006;
          </DeleteIcon>
        </div>
      </TodoTitleContainer>

      {deadline &&
        (priority === Priority.UrgentImportant ||
          priority === Priority.UrgentNotImportant) && (
          <TodoDate done={done}>deadline: {deadline}</TodoDate>
        )}

      {comment && <TodoText done={done}>{comment}</TodoText>}

      {labels && (
        <TodoLabels>
          {labels.map((label) => (
            <TodoLabel key={label}>{label}</TodoLabel>
          ))}
        </TodoLabels>
      )}
    </TodoContainer>
  );
});
