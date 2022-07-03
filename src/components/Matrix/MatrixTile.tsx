import { memo } from 'react';

import { TileWrapper, TileTitle } from './Matrix.style';
import { Todos } from '../Todos/Todos';
import { Priority } from '../../utils/types';
import { DroppableProvided } from 'react-beautiful-dnd';

type MatrixTileProps = {
  priority: Priority;
  title: string;
  droppableProvided: DroppableProvided;
};

export const MatrixTile: React.FC<MatrixTileProps> = memo(
  ({ priority, title, droppableProvided }) => {
    return (
      <TileWrapper priority={priority}>
        <TileTitle priority={priority}>{title}</TileTitle>
        <Todos priority={priority} droppableProvided={droppableProvided} />
      </TileWrapper>
    );
  }
);
