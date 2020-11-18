// export default {
//   home: "/",
//   movies: "/movies",
//   details: "/movies/:movId",
//   cast: "/cast",
//   reviews: "/reviews",
// };

import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/HomePage.js" /* webpackChunkName: "HomePage" */)
    ),
  },
  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() =>
      import("../views/MoviesPage.js" /* webpackChunkName: "MoviesPage"*/)
    ),
  },

  {
    path: "/movies/:movId",

    exact: true,
    component: lazy(() =>
      import("../views/MovieDetailsPage.js" /* webpackChunkName: "MoviesPage"*/)
    ),
  },
  {
    path: "/movies/:movId",

    exact: true,
    component: lazy(() =>
      import("../views/MovieDetailsPage.js" /* webpackChunkName: "MoviesPage"*/)
    ),
  },

  {
    path: "/movies/:movId/:id",
    exact: true,
    component: lazy(() =>
      import("../Components/Cast" /* webpackChunkName: "Cast"*/)
    ),
  },
  // {
  //   path: "/movies/:movId/:id",

  //   exact: true,
  //   component: lazy(() =>
  //     import("../Components/Reviews" /* webpackChunkName: "Reviews"*/)
  //   ),
  // },

  // {
  //   path: "/cast",
  //   exact: true,
  //   component: lazy(() =>
  //     import(
  //       "../Component/Doctor/Doctor.js" /* webpackChunkName: "dodctors-page"*/
  //     )
  //   ),
  // },
  // {
  //   path: "/reviews",
  //   exact: true,
  //   component: lazy(() =>
  //     import("../views/Photo/Photo.js" /* webpackChunkName: "photo-page"*/)
  //   ),
  // },
];

export default routes;
