import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid #000;
`;

export const HeaderItem = styled.div`
  height: 100%;
  padding: 0 20px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    height: 25px;
    width: 1px;
    border-left: 1px solid #000;
    position: absolute;
    top: 7px;
    left: 0px;
  }
`;

export const HeaderModal = styled(Modal)`
  & i.close.icon {
    padding: 0;
  }
`;
