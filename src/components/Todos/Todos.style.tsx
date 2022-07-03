import styled, { css } from 'styled-components';
import { Form } from 'semantic-ui-react';
import { Priority } from '../../utils/types';

export const TodosContainer = styled.div`
  height: '100%';
  overflowy: 'auto';
`;

export const TodoWrapper = styled.div<{
  isDragging: boolean;
  priority: Priority;
}>`
  ${(props) =>
    props.isDragging &&
    css`
      background: ${({ theme }) => theme[`matrix_${props.priority}`]};
      border-radius: 5px;
      padding-left: 10px;
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

export const TodoTitle = styled.h3`
  font-size: 16px;
`;

export const TodoText = styled.p`
  font-style: italic;
  font-size: 12px;
`;

export const TodoDate = styled(TodoText)`
  padding-bottom: 5px;
  text-decoration: underline;
`;

export const TodoButton = styled(Form.Button)`
  & button.ui {
    background-color: ${({ theme }) => theme.button};

    &:hover {
      background-color: ${({ theme }) => theme.buttonHover};
    }
  }
`;

export const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
