import React, { Component, Suspense, lazy } from 'react';
import './styles/base.scss';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './views/NotFoundPage';
import routes from './routes';
import AppBar from './components/AppBar';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);
class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <AppBar />
        <Suspense fallback={<h3>Is loading</h3>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <AppBar />
//       <Suspense fallback={<h3>Is loading</h3>}>
//         <Switch>
//           <Route exact path={routes.home} component={HomeView} />
//           <Route exact path={routes.movies} component={MoviesPage} />
//           <Route path={routes.movieDetails} component={MovieDetailsPage} />
//           <Route component={NotFoundPage} />
//         </Switch>
//       </Suspense>
//     </div>
//   );
// }

// export default App;
