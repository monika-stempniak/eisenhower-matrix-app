import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxProps, Form } from 'semantic-ui-react';

import type { RootState } from '../../redux/store';
import { updateActiveLabels } from '../../redux/todosSlice';
import { TodoButton } from './Todos.style';

type SortTodosProps = {
  openModal: (open: boolean) => void;
};

export const SortTodos: React.FC<SortTodosProps> = ({ openModal }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const activeLabels = useSelector(
    (state: RootState) => state.todos.activeLabels
  );

  const uniqLabels = useMemo(
    () =>
      todos.reduce((acc: string[], todo) => {
        acc.push(...todo.labels);
        return Array.from(new Set(acc));
      }, []),
    [todos]
  );

  const [selectedLabels, setSelectedLabels] = useState<{
    [key: string]: boolean;
  }>(() => {
    return uniqLabels.reduce((acc, label) => {
      return { ...acc, [label]: activeLabels.includes(label) };
    }, {});
  });

  const handleChange = (
    _e: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    if (data.name) {
      const label = data.name;
      setSelectedLabels((prevLabels) => ({
        ...prevLabels,
        [label]: data.checked || false,
      }));
    }
  };

  const handleSort = () => {
    const selectedItems = Object.entries(selectedLabels)
      .filter(([, val]) => val === true)
      .map(([key]) => key);
    dispatch(updateActiveLabels(selectedItems));
    openModal(false);
  };

  return (
    <Form>
      {uniqLabels.map((label) => (
        <Form.Field key={label}>
          <Form.Checkbox
            label={label}
            name={label}
            onChange={handleChange}
            checked={selectedLabels[label] === true}
          />
        </Form.Field>
      ))}
      <TodoButton onClick={handleSort}>Sort Labels</TodoButton>
    </Form>
  );
};
