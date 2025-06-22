import { Suspense } from "react";
import { createBrowserRouter as createBrowserRouter9, RouterProvider } from "react-router-dom";
import Loader from "../components/Loader";
import DefaultLayout from "../layout/DafaultLayout";
import NotFound from "../pages/ErrorPage/NotFound";
import LazyHome from "../pages/Home/LazyHome.jsx";
export const Routes = () => {
  const createRouter = createBrowserRouter9([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <LazyHome />
        },
        {
          path: "home",
          element: <LazyHome />
        },
        { path: '*', element: < NotFound /> }
      ]
    }
  ])

  return <Suspense fallback={<Loader />}>
    <RouterProvider router={createRouter} />
  </Suspense>

}