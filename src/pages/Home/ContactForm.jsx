import { motion } from 'framer-motion';
import { useState } from 'react';
import contactformbg from '../../assets/contactformbg.png';

const ContactForm = () => {
  const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"];
  const productNames = ["Blackout Curtain", "Sheer Curtain", "Motorized Curtain", "Roller Blind", "Zebra Blind", "Romani Blind"];

  // Add state for form fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    address: "",
    interestedIn: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, city, address, interestedIn, message } = formState;
    const text = `
      New Client Inquiry From Website:
      
      Name: ${name}
      Email: ${email}
      Number: ${number}
      City: ${city}
      Address: ${address}
      Interested In: ${interestedIn}
      Message: ${message}
    `;
    const recipientNumber = "971553371902";
    const url = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

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
            Let’s discuss
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
          onSubmit={handleSubmit} // Add onSubmit handler
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Your Name</label>
              <input
                aria-label='Your Name'
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none text-white"
              />
            </div>
            <div>
              <label className="text-sm">Your Email</label>
              <input
                aria-label='Your Email'
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Number</label>
              <input
                type="text"
                name="number"
                value={formState.number}
                onChange={handleInputChange}
                aria-label='Your Number'
                className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">City</label>
              <select
                name="city"
                value={formState.city}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
                aria-label='Select City'
              >
                <option className="bg-black" disabled value="">
                  Select City
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city} className="bg-black text-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm">Address</label>
              <input
                type="text"
                name="address"
                value={formState.address}
                onChange={handleInputChange}
                aria-label='Your Address'
                className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Interested in</label>
              <select
                name="interestedIn"
                value={formState.interestedIn}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
                aria-label='Select Category'
              >
                <option className="bg-black" disabled value="">
                  Select Category
                </option>
                {productNames.map((productName, index) => (
                  <option key={index} value={productName} className="bg-black">
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
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              aria-label='Your Message'
              placeholder="Write Your Project Details Here"
              className="w-full bg-transparent text-white border-b border-gray-500 py-2 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            aria-label='Submit Contact Form'
            className="px-10 py-2 bg-[#00B2AD] text-white font-semibold rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            SUBMIT
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
