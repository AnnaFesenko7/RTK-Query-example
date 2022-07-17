import { lazy, Suspense } from 'react';
import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { ThreeDots } from 'react-loader-spinner';

const HomeView = lazy(() => import('./views/HomeView'));

const NotFound = lazy(() => import('./views/NotFound'));

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
            {/* <Route path="movies" element={<MoviesView />} />

            <Route path="movies/:movieId" element={<MovieDetailsView />}>
              <Route path="cost" element={<CastView />} />
              <Route path="reviews" element={<ReviewsView />}></Route>
            </Route> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
