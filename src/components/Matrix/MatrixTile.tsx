import { TileWrapper, TileTitle } from './Matrix.style';
import { Todos } from '../Todos/Todos';
import { Priority } from '../../utils/types';

type MatrixTileProps = {
  priority: Priority;
  title: string;
};

export const MatrixTile: React.FC<MatrixTileProps> = ({ priority, title }) => {
  return (
    <TileWrapper priority={priority}>
      <TileTitle priority={priority}>{title}</TileTitle>
      <Todos priority={priority} />
    </TileWrapper>
  );
};
