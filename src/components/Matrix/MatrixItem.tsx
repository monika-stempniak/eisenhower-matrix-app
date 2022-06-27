import { ItemWrapper, ItemTitle } from './Matrix.style';
import { MatrixCorner } from '../../utils/constants';

type MatrixItemProps = {
  priority: number;
  title: string;
  position: MatrixCorner;
};

export function MatrixItem({ priority, title, position }: MatrixItemProps) {
  return (
    <ItemWrapper key={priority} priority={priority}>
      <ItemTitle corner={position}>{title}</ItemTitle>
    </ItemWrapper>
  );
}
