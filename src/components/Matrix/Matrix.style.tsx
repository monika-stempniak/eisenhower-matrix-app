import styled from 'styled-components';
import { Priority } from '../../utils/types';

const GAP = 10;
const PADDING = 2 * GAP;

const getTitlePositionStyle = (priority: Priority) => {
  switch (priority) {
    case Priority.UrgentImportant:
    case Priority.NotUrgentImportant:
    default:
      return {
        top: `-${PADDING}px`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    case Priority.UrgentNotImportant:
      return {
        top: '-50%',
        left: `-${PADDING}px`,
        transform: 'translate(-50%, -50%) rotate(270deg)',
      };
    case Priority.NotUrgentNotImportant:
      return {
        top: '50%',
        left: `calc(-100% - ${GAP + PADDING}px)`,
        transform: 'translate(-50%, -50%) rotate(270deg)',
      };
  }
};

export const LayoutWrapper = styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 40px;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const LayoutContainer = styled.div`
  display: grid;
  gap: ${`${GAP}px`};
  grid-template-columns: 50% 50%;
  grid-template-rows: 40vh 40vh;
  max-width: 1000px;
  width: 100%;
`;

export const TileWrapper = styled.section<{ priority: Priority }>`
  background-color: ${({ theme, priority }) => theme[`matrix_${priority}`]};
  padding: ${`${PADDING}px`};
  position: relative;
  border-radius: 10px;
`;

export const TileTitle = styled.h2<{ priority: Priority }>`
  position: absolute;
  ${({ priority }) => getTitlePositionStyle(priority)};
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
`;
