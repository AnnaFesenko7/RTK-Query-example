import TodoList from 'components/TodoList/TodoList';
import { Link } from 'react-router-dom';
import { useFetchTodoQuery } from 'services/todos';
import { ThreeDots } from 'react-loader-spinner';

function TodoView() {
  const { data: todos, isFetching } = useFetchTodoQuery();

  return (
    <div>
      <Link to="/todos/create">Create Todo</Link>
      {isFetching && <ThreeDots height="100" width="100" color="blue" />}
      {todos && <TodoList todos={todos} />}
    </div>
  );
}
export default TodoView;
