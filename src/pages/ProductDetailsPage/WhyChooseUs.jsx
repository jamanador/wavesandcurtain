import { useParams } from 'react-router-dom';
import { products } from '../../constants/products';

const WhyChooseUs = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product || !product.benefits) {
    return (
      <div className="text-center py-10 text-red-500">
        No benefits available for this product.
      </div>
    );
  }

  return (
    <section className=" text-black my-20">
      {/* Heading */}
      <div className="text-center py-6">
        <h2 className="text-4xl font-bold  text-black">
          Why Choose {product.name}
        </h2>
      </div>

      {/* Step Tabs */}
      <div className="flex flex-wrap justify-center items-center bg-gray-800 text-white">
        {product.benefits.map((step, index) => (
          <div
            key={index}
            className={`relative px-4 py-3 text-center flex items-center gap-2 ${index === 0
              ? 'bg-gray-800 text-white'
              : 'hover:bg-black transition duration-300'
              }`}
          >
            {index === 0 && (
              <div className="hidden md:block w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[20px] border-r-blue-700 absolute -left-5"></div>
            )}
            <span className="text-xl font-bold">{`0${index + 1}.`}</span>
            <div className="text-sm leading-4 font-semibold">{step.title}</div>
          </div>
        ))}
      </div>

      {/* Image + Text */}
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
        {/* Image */}
        <div className="w-full md:w-2/3 h-auto overflow-hidden rounded-xl shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-2/3 flex items-center">
          <div>
            <h3 className="text-black font-bold text-lg mb-2">
              {product.benefits[0].title}
            </h3>
            <p className="text-sm text-black mb-4">
              {product.benefits[0].description}
            </p>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition">
              Get More Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
