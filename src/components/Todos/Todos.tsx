import { useSelector } from 'react-redux';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
} from 'react-beautiful-dnd';

import { Priority } from '../../utils/types';
import { Todo } from '../Todos/Todo';
import { TodosContainer, TodoWrapper } from './Todos.style';
import { selectTodos } from '../../redux/todosSlice';
import { useMemo } from 'react';

type TodosProps = {
  priority: Priority;
  droppableProvided: DroppableProvided;
};

export const Todos: React.FC<TodosProps> = ({
  priority,
  droppableProvided,
}) => {
  const todos = useSelector(selectTodos);

  const todosPerPriority = useMemo(
    () => todos.filter((todo) => todo.priority === priority),
    [todos, priority]
  );

  return (
    <TodosContainer>
      <ul>
        {todosPerPriority.map((todo, idx) => (
          <Draggable draggableId={todo.id} index={idx} key={todo.id}>
            {(
              provided: DraggableProvided,
              snapshot: DraggableStateSnapshot
            ) => (
              <TodoWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                priority={priority}
              >
                <Todo todo={todo} />
              </TodoWrapper>
            )}
          </Draggable>
        ))}
        {droppableProvided.placeholder}
      </ul>
    </TodosContainer>
  );
};
