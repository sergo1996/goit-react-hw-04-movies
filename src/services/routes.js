import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/HomePage/HomePage.js" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() =>
      import(
        "../views/MoviesPage/MoviesPage.js" /* webpackChunkName: "MoviesPage"*/
      )
    ),
  },

  {
    path: "/movies/:movId",

    exact: false,
    component: lazy(() =>
      import(
        "../views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "MoviesPage"*/
      )
    ),
  },
  {
    path: "/movies/:movId",

    exact: true,
    component: lazy(() =>
      import(
        "../views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "MoviesPage"*/
      )
    ),
  },
];

export default routes;
