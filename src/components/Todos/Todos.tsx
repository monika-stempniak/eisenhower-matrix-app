import { useSelector } from 'react-redux';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
} from 'react-beautiful-dnd';

import type { RootState } from '../../redux/store';
import { Priority } from '../../utils/types';
import { Todo } from '../Todos/Todo';
import { TodosContainer, TodoWrapper } from './Todos.style';

type TodosProps = {
  priority: Priority;
  droppableProvided: DroppableProvided;
};

export const Todos: React.FC<TodosProps> = ({
  priority,
  droppableProvided,
}) => {
  const todosPerPriority = useSelector((state: RootState) =>
    state.todos.todos.filter((todo) => todo.priority === priority)
  );

  return (
    <TodosContainer>
      <ul>
        {todosPerPriority.map((todo, idx) => (
          <Draggable draggableId={todo.id} index={idx} key={todo.id}>
            {(
              provided: DraggableProvided,
              snapshot: DraggableStateSnapshot
            ) => {
              return (
                <TodoWrapper
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                  priority={priority}
                >
                  <Todo todo={todo} />
                </TodoWrapper>
              );
            }}
          </Draggable>
        ))}
        {droppableProvided.placeholder}
      </ul>
    </TodosContainer>
  );
};
