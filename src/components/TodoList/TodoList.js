import TodoListItem from 'components/TodoListItem/TodoListItem';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
