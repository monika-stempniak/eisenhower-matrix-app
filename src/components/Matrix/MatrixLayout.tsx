import { MATRIX_SETTINGS } from '../../utils/constants';
import { MatrixTile } from './MatrixTile';
import { LayoutWrapper, LayoutContainer } from './Matrix.style';

export const MatrixLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        {MATRIX_SETTINGS.map(({ priority, title }) => (
          <MatrixTile key={priority} priority={priority} title={title} />
        ))}
      </LayoutContainer>
    </LayoutWrapper>
  );
};
