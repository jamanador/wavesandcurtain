import { useParams } from 'react-router-dom';
import { products } from '../../constants/products.js';
import ProductBanner from '../../pages/ProductDetailsPage/ProductBanner.jsx'; // adjust path if needed
import WhyChooseUs from './WhyChooseUs.jsx';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <ProductBanner product={product} />
      <WhyChooseUs />
    </div>
  );
};

export default ProductDetailsPage;
