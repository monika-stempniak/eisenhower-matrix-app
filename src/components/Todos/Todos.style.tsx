import styled, { css } from 'styled-components';
import { Form } from 'semantic-ui-react';
import { Priority } from '../../utils/types';

export const TodosContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const TodoWrapper = styled.div<{
  isDragging: boolean;
  priority: Priority;
}>`
  ${(props) =>
    props.isDragging &&
    css`
      background: ${({ theme }) => theme.lightBeige};
      border-radius: 4px;
      padding-left: 4px;
    `}
`;

export const TodoContainer = styled.li`
  margin-bottom: 16px;
`;

export const TodoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const TodoTitle = styled.h3<{ done: boolean }>`
  font-size: 16px;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export const TodoText = styled.p<{ done: boolean }>`
  font-style: italic;
  font-size: 12px;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export const TodoDate = styled(TodoText)<{ done: boolean }>`
  padding-bottom: 5px;
  text-decoration: ${({ done }) => (done ? 'line-through' : 'underline')};
`;

export const TodoButton = styled(Form.Button)`
  & button.ui {
    background-color: ${({ theme }) => theme.greyBrown};

    &:hover {
      background-color: ${({ theme }) => theme.brown};
      color: ${({ theme }) => theme.light};
    }
  }
`;

export const DatePickerContainer = styled.div`
  margin-bottom: 1em;
`;

export const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TodoLabels = styled.div``;

export const TodoLabel = styled.span`
  background-color: ${({ theme }) => theme.brown};
  color: ${({ theme }) => theme.light};
  border-radius: 4px;
  padding: 2px 4px;
  margin-right: 4px;
  font-size: 10px;
`;
