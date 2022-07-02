import { TodoType } from '../../utils/types';
import { TileWrapper, TileTitle } from './Matrix.style';
import { Todos } from '../Todos/Todos';

type MatrixTileProps = {
  priority: number;
  title: string;
  todos: TodoType[];
};

export const MatrixTile: React.FC<MatrixTileProps> = ({
  priority,
  title,
  todos,
}) => {
  return (
    <TileWrapper key={priority} priority={priority}>
      <TileTitle priority={priority}>{title}</TileTitle>
      <Todos todos={todos} />
    </TileWrapper>
  );
};
