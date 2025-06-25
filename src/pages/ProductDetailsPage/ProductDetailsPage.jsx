import ProductBanner from '../../pages/ProductDetailsPage/ProductBanner.jsx'; // adjust path if needed
import ContactForm from '../Home/ContactForm.jsx';
import SingleProjects from './SingleProjects.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';

const ProductDetailsPage = () => {


  return (
    <div>
      <ProductBanner />
      <WhyChooseUs />
      <SingleProjects />
      <ContactForm />
    </div>
  );
};

export default ProductDetailsPage;
