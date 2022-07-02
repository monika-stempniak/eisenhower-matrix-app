type TodoProps = {
 todo: string;
};

export const Todo: React.FC<TodoProps> = ({
  todo
}) => {
  return (
    <li>
     {todo}
    </li>
  );
};
