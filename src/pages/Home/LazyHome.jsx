import { lazy } from "react";

const Home = lazy(() => import("../Home/Home.jsx"));

const LazyHome = () => <Home />;

export default LazyHome;