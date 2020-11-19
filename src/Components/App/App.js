import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Container from "../Container";
import routes from "../../services/routes";
// import HomePages from "../../views/HomePage";
// import MoviesPage from "../../views/MoviesPage";
// import MovieDetailsPage from "../../views/MovieDetailsPage";

import Loaders from "../Loader/Loader";

import NotFound from "../NotFoundPage/NotFoundPage";

import "./App.css";
const App = () => (
  <Container>
    <Suspense fallback={<Loaders onLoad={true} />}>
      <Switch>
        {routes.map((item) => (
          <Route
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Container>
);
export default App;
