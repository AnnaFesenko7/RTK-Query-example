import { useCreateTodoMutation } from 'services/todos';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

function CreateTodoView() {
  const [createTodo, { isLoading }] = useCreateTodoMutation();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const content = e.currentTarget.elements.content.value;

    e.currentTarget.reset();
    try {
      await createTodo(content);
      navigate('/todos');
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <TailSpin width="15" height="15" color="black" />
          ) : (
            'Create'
          )}
        </button>
      </form>
    </div>
  );
}
export default CreateTodoView;
