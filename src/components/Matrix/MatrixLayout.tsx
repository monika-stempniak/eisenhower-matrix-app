import { MATRIX_SETTINGS } from '../../utils/constants';
import { MatrixItem } from './MatrixItem';
import { LayoutWrapper, LayoutContainer } from './Matrix.style';

export function MatrixLayout() {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        {MATRIX_SETTINGS.map((el) => (
          <MatrixItem
            key={el.priority}
            priority={el.priority}
            title={el.title}
            position={el.position}
          />
        ))}
      </LayoutContainer>
    </LayoutWrapper>
  );
}
