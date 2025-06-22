import { createBrowserRouter as createBrowserRouter9, RouterProvider } from "react-router-dom";
import { DefaultLayout } from "../layout/DafaultLayout";
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
        }
      ]
    }
  ])

  return RouterProvider({ router: creatRouter });

}