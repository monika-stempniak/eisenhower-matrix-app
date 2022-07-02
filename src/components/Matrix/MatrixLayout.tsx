import { MATRIX_SETTINGS } from '../../utils/constants';
import { MatrixTile } from './MatrixTile';
import { LayoutWrapper, LayoutContainer } from './Matrix.style';

const TODOS = [
  {
    title: 'urgent',
    priority: 1,
    comment: 'Lorem ipsum',
    deadline: new Date(),
  },
  {
    title: 'important',
    priority: 2,
    comment: 'Lorem ipsum',
    deadline: new Date(),
  },
  {
    title: 'urgent...',
    priority: 1,
    comment: 'Lorem ipsum...',
    deadline: new Date(),
  },
  {
    title: 'not-important',
    priority: 3,
    comment: 'Lorem ipsum',
    deadline: new Date(),
  },
  {
    title: 'not-urgent',
    priority: 4,
    comment: 'Lorem ipsum',
    deadline: new Date(),
  },
];

export const MatrixLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        {MATRIX_SETTINGS.map(({ priority, title }) => (
          <MatrixTile
            key={title}
            priority={priority}
            title={title}
            todos={TODOS.filter((todo) => todo.priority === priority)}
          />
        ))}
      </LayoutContainer>
    </LayoutWrapper>
  );
};
