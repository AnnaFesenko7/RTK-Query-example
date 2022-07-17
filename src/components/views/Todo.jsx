import TodoList from 'components/TodoList/TodoList';
import { useFetchTodoQuery } from '../../services/todos';

function TodoView() {
  const { data } = useFetchTodoQuery();

  return <div>{data && <TodoList todos={data} />}</div>;
}
export default TodoView;
