import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';

import type { RootState } from '../../redux/store';
import { updateAllTodos } from '../../redux/todosSlice';
import { MATRIX_SETTINGS } from '../../utils/constants';
import { MatrixTile } from './MatrixTile';
import { LayoutWrapper, LayoutContainer } from './Matrix.style';
import { reorderDndMultiColumn } from '../../utils/helpers';

export const MatrixLayout: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) {
        return;
      }

      const newTodos = reorderDndMultiColumn(
        todos,
        source.index,
        destination.index,
        source.droppableId,
        destination.droppableId
      );

      dispatch(updateAllTodos(newTodos));
    },
    [todos, dispatch]
  );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <LayoutWrapper>
        <LayoutContainer>
          {MATRIX_SETTINGS.map(({ priority, title }) => (
            <Droppable droppableId={`droppable-${priority}`} key={priority}>
              {(droppableProvided: DroppableProvided) => (
                <div
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  <MatrixTile
                    priority={priority}
                    title={title}
                    droppableProvided={droppableProvided}
                  />
                </div>
              )}
            </Droppable>
          ))}
        </LayoutContainer>
      </LayoutWrapper>
    </DragDropContext>
  );
};
