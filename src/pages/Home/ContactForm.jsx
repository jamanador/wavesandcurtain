import { motion } from 'framer-motion';
import contactformbg from '../../assets/contactformbg.png'; // Ensure you have a background image

const ContactForm = () => {
  const cities = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain"
  ];
  const productNames = [
    "Blackout Curtain",
    "Sheer Curtain",
    "Motorized Curtain",
    "Roller Blind",
    "Zebra Blind",
    "Romani Blind"
  ];
  const categories = ["Curtains", "Blinds", "Consultation"];

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-65"
        style={{ backgroundImage: `url(${contactformbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        loading="lazy"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-6xl font-bold leading-snug">
            Have a project!<br />
            Let’s diascuss
          </h2>
          <p className="text-gray-200">
            Thank you for getting in touch!<br />
            Kindly.<br />
            Fill the form, have a great day!
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Your Name</label>
              <input
                aria-label='Your Name'
                type="text"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Your Email</label>
              <input
                aria-label='Your Email'
                type="email"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Number</label>
              <input
                type="text"
                aria-label='Your Number'
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">City</label>
              <select className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none">
                <option className="bg-black" disabled selected>
                  Select City
                </option>
                {cities.map((city, index) => (
                  <option key={index} className="bg-black">
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm">Address</label>
              <input
                type="text"
                aria-label='Your Address'
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Interested in</label>
              <select className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none">
                <option className="bg-black" disabled selected>
                  Select Category
                </option>
                {productNames.map((productName, index) => (
                  <option key={index} className="bg-black">
                    {productName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="3"
              aria-label='Your Message'
              placeholder="Write Your Project Details Here "
              className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            aria-label='Submit Contact Form'
            onClick={(e) => {
              e.preventDefault();
              alert('Form submitted!'); // Replace with actual form submission logic
            }}
            className="px-10 py-2 bg-blue-400 text-white font-semibold rounded-full hover:bg-orange-400"
          >
            SUBMIT
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
