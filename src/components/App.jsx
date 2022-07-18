import { lazy, Suspense } from 'react';
import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomeView = lazy(() => import('./views/HomeView'));
const TodoView = lazy(() => import('./views/Todo'));
const NotFound = lazy(() => import('./views/NotFound'));
const CreateTodoView = lazy(() => import('./views/CreateTodo'));

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
        // fallback={
        //   <ThreeDots
        //     height="100"
        //     width="100"
        //     color="red"
        //     ariaLabel="loading"
        //   />
        // }
        >
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="todos" element={<TodoView />} />
            <Route path="todos/create" element={<CreateTodoView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
