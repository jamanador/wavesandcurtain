import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Products from "./Components/products";
import Projects from "./Components/projects";
import RenovationSection from "./Components/RenovationSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RenovationSection />
      <Products />
      <Projects />
      <Footer />
    </div>
  );
}
