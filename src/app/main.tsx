import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";

import { store } from "@/app/store";
import { ThemeProvider } from "@/app/theme-provider";
import { Provider } from "react-redux";
import QueryProvider from "./QueryProvider";
import { router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <ThemeProvider defaultTheme="dark">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryProvider>
    </Provider>
  </StrictMode>,
);
