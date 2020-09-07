import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/HomeView")),
    restricted: false,
    private: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterView")),
    restricted: true,
    private: false,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LoginView")),
    restricted: true,
    private: false,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsView")),
    private: true,
    restricted: false,
  },
];
