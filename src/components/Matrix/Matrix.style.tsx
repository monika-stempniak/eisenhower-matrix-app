import styled from 'styled-components';
import { MatrixCorner } from '../../utils/constants';

const GAP = 10;
const PADDING = 2 * GAP;

const getTitlePosition = (corner: MatrixCorner) => {
  switch (corner) {
    case MatrixCorner.TOP:
    default:
      return {
        top: `-${PADDING}px`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    case MatrixCorner.TOP_LEFT:
      return {
        top: '-50%',
        left: `-${PADDING}px`,
        transform: 'translate(-50%, -50%) rotate(270deg)',
      };
    case MatrixCorner.BOTTOM_LEFT:
      return {
        top: '50%',
        left: `calc(-100% - ${GAP + PADDING}px)`,
        transform: 'translate(-50%, -50%) rotate(270deg)',
      };
  }
};

export const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 40px;
  height: 100vh;
`;

export const LayoutContainer = styled.div`
  display: grid;
  gap: ${`${GAP}px`};
  grid-template-columns: 50% 50%;
  grid-template-rows: 40vh 40vh;
`;

export const ItemWrapper = styled.div<{ priority: number }>`
  background-color: ${({ theme, priority }) => theme[`matrix_${priority}`]};
  padding: ${`${PADDING}px`};
  position: relative;
  border-radius: 10px;
`;

export const ItemTitle = styled.div<{ corner: MatrixCorner }>`
  position: absolute;
  ${({ corner }) => getTitlePosition(corner)};
  text-transform: uppercase;
  font-weight: bold;
`;
