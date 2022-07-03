import { TileWrapper, TileTitle } from './Matrix.style';
import { Todos } from '../Todos/Todos';
import { Priority } from '../../utils/types';
import { DroppableProvided } from 'react-beautiful-dnd';

type MatrixTileProps = {
  priority: Priority;
  title: string;
  droppableProvided: DroppableProvided;
};

export const MatrixTile: React.FC<MatrixTileProps> = ({
  priority,
  title,
  droppableProvided,
}) => {
  return (
    <TileWrapper priority={priority}>
      <TileTitle priority={priority}>{title}</TileTitle>
      <Todos priority={priority} droppableProvided={droppableProvided} />
    </TileWrapper>
  );
};
