import ContactForm from "./Components/ContactForm";
import DiscoverUs from "./Components/DiscoverUs";
import Footer from "./Components/Footer";
import GetCustomCurtain from "./Components/GetCustomCurtain";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Products from "./Components/products";
import Projects from "./Components/Projects";
import RenovationSection from "./Components/RenovationSection";
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RenovationSection />
      <Products />
      <div className="overflow-hidden">
        <GetCustomCurtain />
      </div>
      <Projects />
      <DiscoverUs />
      <ContactForm />
      <Footer />
    </div>
  );
}
