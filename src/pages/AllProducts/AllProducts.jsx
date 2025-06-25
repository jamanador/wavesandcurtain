import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterOptions, products } from '../../constants/products';
import AllSingleProduct from './AllSingleProduct';
function AllProducts() {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0].value);
  const navigate = useNavigate();

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <div className="px-6 py-10 mt-24 mb-16">
      <h1 className="text-3xl text-center text-black font-bold mb-4">Explore Our Products Collection</h1>
      <p className="text-sm text-gray-800 mb-6 max-w-5xl mx-auto text-center">        Discover premium-quality curtains and blinds tailored to style, privacy, and modern living.<br /> Choose your preference and browse through our handpicked collection.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => setActiveFilter(option.value)}
            className={`px-8 py-2 rounded-xl text-sm font-medium transition ${activeFilter === option.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <AllSingleProduct
              key={product.id}
              product={product}
              index={filteredProducts.indexOf(product)}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            Will Be Updated Soon With Our Product Collection!
          </p>
        )}
      </div>
    </div>
  );
}
export default AllProducts;