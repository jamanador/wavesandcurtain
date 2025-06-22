import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../components/Header";
const DefaultLayout = () => {
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
export default DefaultLayout;