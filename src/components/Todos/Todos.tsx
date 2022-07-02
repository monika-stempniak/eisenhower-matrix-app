import { Priority } from '../../utils/types';
import { Todo } from '../Todos/Todo';

const TODOS = [
  {
    priority: 1,
    title: 'urgent',
    comment:
      'Lorem ipsum at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan',
    deadline: new Date(),
  },
  {
    priority: 2,
    title: 'important',
    comment: '',
    deadline: new Date(),
  },
  {
    priority: 1,
    title: 'urgent...',
    comment: 'Lorem ipsum elit scelerisque mauris pellentesque pulvinar',
    deadline: undefined,
  },
  {
    priority: 3,
    title: 'not-important',
    comment: 'Lorem ipsum phasellus faucibus scelerisque',
    deadline: new Date(),
  },
  {
    priority: 4,
    title: 'not-urgent',
    comment: 'Lorem ipsum...',
    deadline: new Date(),
  },
];

type TodosProps = {
  priority: Priority;
};

export const Todos: React.FC<TodosProps> = ({ priority }) => {
  return (
    <ul>
      {TODOS.filter((todo) => todo.priority === priority).map((todo) => (
        <Todo key={`${todo.priority}-${todo.title}`} todo={todo} />
      ))}
    </ul>
  );
};
