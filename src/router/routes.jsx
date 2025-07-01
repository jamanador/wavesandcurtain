import { Suspense } from "react";
import { createBrowserRouter as createBrowserRouter9, RouterProvider } from "react-router-dom";
import Loader from "../components/Loader";
import DefaultLayout from "../layout/DafaultLayout";
import AboutUsPage from "../pages/About/AboutUs.jsx";
import AllProducts from "../pages/AllProducts/AllProducts.jsx";
import AllProjectsPage from "../pages/AllProjectsPage/AllProjectsPage.jsx";
import ContactUsPage from "../pages/ContactUs/ContactUsPage.jsx";
import NotFound from "../pages/ErrorPage/NotFound";
import LazyHome from "../pages/Home/LazyHome.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage.jsx";
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
          path: "/home",
          element: <LazyHome />
        },
        {
          path: "/products",
          element: <AllProducts />
        },
        {
          path: "/product/:name".toLowerCase(),
          element: <ProductDetailsPage />
        },
        {
          path: "/about",
          element: <AboutUsPage />
        },
        {
          path: "/contact",
          element: <ContactUsPage />
        },
        {
          path: "/projects",
          element: <AllProjectsPage />
        },
        {
          path: '/privacy',
          element: <PrivacyPolicyPage />
        }
        ,
        { path: '*', element: < NotFound /> }
      ]
    }
  ])

  return <Suspense fallback={<Loader />}>
    <RouterProvider router={createRouter} />
  </Suspense>

}