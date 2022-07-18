import { useDeleteTodoMutation } from 'services/todos';
import { TailSpin } from 'react-loader-spinner';

export default function TodoListItem({ id, content }) {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  return (
    <li key={id}>
      {content}
      <button disabled={isDeleting} onClick={() => deleteTodo(id)}>
        {isDeleting ? (
          <TailSpin width="15" height="15" color="black" />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
}
