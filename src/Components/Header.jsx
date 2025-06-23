import { motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', Link: '/' },
    { name: 'Products', Link: '/products' },
    { name: 'Projects', Link: '/projects' },
    { name: 'About us', Link: '/about' },
    { name: 'Contact', Link: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'bg-white' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            // whilehover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/">
              <img src={logo} alt="" loading="lazy" className='w-28 mt-6' />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.Link}
                whilehover={{ y: -2 }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Quote Button */}
          <motion.button
            whilehover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center space-x-2 bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>Get Quote</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden z-50 "
        >
          <div className="py-4 space-y-4 border-b border-b-gray-300 pb-8 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.Link}
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg w-full justify-center">
              <Phone className="w-4 h-4" />
              <span>Quote</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;