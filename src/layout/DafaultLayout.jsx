import { Outlet } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default DefaultLayout;