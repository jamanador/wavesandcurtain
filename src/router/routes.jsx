import { createBrowserRouter as createBrowserRouter9, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layout/DafaultLayout";
import NotFound from "../pages/ErrorPage/NotFound";
import { Home } from "../pages/Home";
export const Routes = () => {
  const creatRouter = createBrowserRouter9([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        { path: '*', element: < NotFound /> }
      ]
    }
  ])

  return RouterProvider({ router: creatRouter });

}