import React, { SyntheticEvent, useCallback, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DropdownProps, Form, Message } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';

import { addTodo } from '../../redux/todosSlice';
import { TodoType } from '../../utils/types';
import { DatePickerContainer, TodoButton } from './Todos.style';
import { DATE_FORMAT, PRIORITY_OPTIONS } from '../../utils/constants';
import {
  validateErrors,
  validatePriorityError,
  validateTitleError,
} from '../../utils/helpers';

const defaultTodo: TodoType = {
  id: '',
  priority: 0,
  title: '',
  comment: '',
  deadline: '',
  labels: [],
  done: false,
};

type AddTodoProps = {
  openModal: (open: boolean) => void;
};

export const AddTodo: React.FC<AddTodoProps> = ({ openModal }) => {
  const id = useId();
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<TodoType>({ ...defaultTodo, id });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    setNewTodo((prevTodo) => {
      const todo = {
        ...prevTodo,
        [name]:
          name === 'labels'
            ? value.split(',').map((val) => val.trim().toLowerCase())
            : value,
      };

      if (name === 'title') {
        const errorMsg = validateTitleError(value);
        setErrors({ ...errors, title: errorMsg });
      }

      return todo;
    });
  };

  const handleSelectChange = (
    _e: SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setNewTodo((prevTodo) => {
      const todo = {
        ...prevTodo,
        priority: Number(data.value),
      };

      if (data.name === 'priority') {
        const errorMsg = validatePriorityError(Number(data.value));
        setErrors({ ...errors, priority: errorMsg });
      }

      return todo;
    });
  };

  const handleDateChange = (date: Date) => {
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      deadline: format(date, DATE_FORMAT),
    }));
  };

  const handleAddTodo = useCallback(() => {
    const errorObj = validateErrors(newTodo);
    setErrors(errorObj);

    if (Object.keys(errorObj).length === 0) {
      const uniqLabels = new Set(newTodo.labels);
      dispatch(addTodo({ ...newTodo, labels: Array.from(uniqLabels) }));
      openModal(false);
    }
  }, [newTodo, dispatch, openModal]);

  return (
    <Form error>
      <Form.Select
        label="Priority"
        placeholder="Priority"
        name="priority"
        options={PRIORITY_OPTIONS}
        onChange={handleSelectChange}
        required
      />
      {errors.priority && <Message error content={errors.priority} />}

      <Form.Input
        fluid
        label="Title"
        placeholder="Title"
        name="title"
        value={newTodo.title}
        onChange={handleChange}
        required
      />
      {errors.title && <Message error content={errors.title} />}

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
        value={newTodo.labels.toString()}
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
