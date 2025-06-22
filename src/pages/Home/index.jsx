import ContactForm from './ContactForm.jsx';
import DiscoverUs from './DiscoverUs.jsx';
import GetCustomCurtain from './GetCustomCurtain.jsx';
import Hero from './Hero.jsx';
import RenovationSection from './RenovationSection.jsx';

export const Home = () => {
  return (
    <>
      <Hero />
      <RenovationSection />
      {/* <Products /> */}
      <div className="overflow-hidden">
        <GetCustomCurtain />
      </div>
      {/* <Projects /> */}
      <DiscoverUs />
      <ContactForm />
    </>
  );
}