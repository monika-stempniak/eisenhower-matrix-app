import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { updateTodos } from '../../redux/todosSlice';
import { TodoType } from '../../utils/types';
import { TodoButton } from './Todos.style';

const defaultTodo = {
  priority: 1,
  title: '',
  comment: '',
  deadline: undefined,
};

type AddTodoProps = {
  openModal: (open: boolean) => void;
};

export const AddTodo: React.FC<AddTodoProps> = ({ openModal }) => {
  const id = useId();
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<TodoType>({ id, ...defaultTodo });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTodo = () => {
    openModal(false);
    dispatch(updateTodos(newTodo));
  };

  return (
    <Form>
      <Form.Input
        fluid
        type="number"
        min="1"
        max="4"
        label="Priority"
        placeholder="Priority (1-4)"
        name="priority"
        value={newTodo.priority}
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="Title"
        placeholder="Title"
        name="title"
        value={newTodo.title}
        onChange={handleChange}
      />
      <Form.TextArea
        label="Comment"
        placeholder="Add comment..."
        name="comment"
        value={newTodo.comment}
        onChange={handleChange}
      />
      <div>Date Placeholder</div>
      <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>
    </Form>
  );
};
