import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./components/HomePage/HomePage.js' /* webpackChunkName: 'HomePage' */));
const Movies = lazy(() => import('./components/Movies/Movies.js' /* webpackChunkName: 'Movies' */));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: 'MovieDetailsPage' */));
const ErrorPage = lazy(() => import('./ErrorPage.js' /* webpackChunkName: 'ErrorPage' */));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path='/' exact>
              <HomePage />
          </Route>
          
            <Route path='/movies' exact>
              <Movies />
            </Route>

            <Route path='/movies/:idMovie'>
              <MovieDetailsPage />
            </Route>

            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Suspense>
    </>
  );
}

export default App;
