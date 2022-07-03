import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { resetActiveLabels } from '../../redux/todosSlice';
import { AddTodo } from '../Todos/AddTodo';
import { SortTodos } from '../Todos/SortTodos';
import { HeaderContainer, HeaderItem } from './Header.style';

export const Header = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (item: string) => {
    setOpenModal(true);
    setActiveItem(item);
  };

  const handleReset = () => {
    dispatch(resetActiveLabels());
  };

  const modalContent = () => {
    switch (activeItem) {
      case 'add_todo':
        return <AddTodo openModal={setOpenModal} />;
      case 'sort_todos':
        return <SortTodos openModal={setOpenModal} />;
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderItem onClick={() => handleClick('add_todo')}>
          Add todo
        </HeaderItem>
        <HeaderItem onClick={() => handleClick('sort_todos')}>
          Sort by label
        </HeaderItem>
        <HeaderItem onClick={handleReset}>Reset active labels</HeaderItem>
      </HeaderContainer>

      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal}
        size="small"
        closeIcon
      >
        <Modal.Content>{modalContent()}</Modal.Content>
      </Modal>
    </>
  );
};
