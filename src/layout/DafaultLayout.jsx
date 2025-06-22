import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
export const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}