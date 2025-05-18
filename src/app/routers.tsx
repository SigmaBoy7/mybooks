import App from "@/app/App";
import "./index.css";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    /* Cods below is just example how to create Outlet compoent */
    children: [
      {
        path: "/",
        lazy: () =>
          import("@/features/GuestUserPage/components/GuestUserPage.page"),
      },
    ],
  },
]);
