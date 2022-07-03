import React, { useCallback, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';

import { addTodo } from '../../redux/todosSlice';
import { TodoType } from '../../utils/types';
import { DatePickerContainer, TodoButton } from './Todos.style';
import { DATE_FORMAT } from '../../utils/constants';

const defaultTodo = {
  priority: 1,
  title: '',
  comment: '',
  deadline: '',
  labels: [],
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
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: name === 'priority' ? Number(value) : value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      deadline: format(date, DATE_FORMAT),
    }));
  };

  const handleAddTodo = useCallback(() => {
    const labels = newTodo.labels ?? [];
    const uniqLabels = new Set(...labels);
    dispatch(addTodo({ ...newTodo, labels: Array.from(uniqLabels) }));
    openModal(false);
  }, [newTodo, dispatch, openModal]);

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
      <Form.TextArea
        label="Labels"
        placeholder="Add labels separated by commas..."
        name="labels"
        value={newTodo.labels.join(', ')}
        onChange={handleChange}
      />
      <DatePickerContainer>
        <DatePicker
          name="deadline"
          selected={newTodo.deadline ? new Date(newTodo.deadline) : undefined}
          onChange={handleDateChange}
          popperPlacement="top"
          showTimeSelect
          dateFormat={DATE_FORMAT}
        />
      </DatePickerContainer>
      <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>
    </Form>
  );
};
