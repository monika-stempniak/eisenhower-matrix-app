import { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { AddTodo } from '../Todos/AddTodo';
import { HeaderContainer, HeaderItem, HeaderModal } from './Header.style';

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleAddTodo = () => {
    setOpenModal(true);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderItem onClick={handleAddTodo}>Add todo</HeaderItem>
      </HeaderContainer>

      <HeaderModal
        onClose={() => setOpenModal(false)}
        open={openModal}
        size="small"
        closeIcon
      >
        <Modal.Content>
          <AddTodo openModal={setOpenModal} />
        </Modal.Content>
      </HeaderModal>
    </>
  );
};
