import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { resetActiveLabels, selectTodos } from '../../redux/todosSlice';
import { AddTodo } from '../Todos/AddTodo';
import { SortTodos } from '../Todos/SortTodos';
import { HeaderContainer, HeaderItem } from './Header.style';

export const Header = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const solvedTodos = useMemo(() => todos.filter((todo) => todo.done), [todos]);

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
          Add task
        </HeaderItem>
        <HeaderItem onClick={() => handleClick('sort_todos')}>
          Sort by label
        </HeaderItem>
        <HeaderItem onClick={handleReset}>Reset active labels</HeaderItem>
        <HeaderItem>Solved tasks: {solvedTodos.length}</HeaderItem>
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
