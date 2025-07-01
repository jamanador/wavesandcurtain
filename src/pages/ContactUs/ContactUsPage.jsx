import { ChevronDown, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';


// Contact Page Component
const ContactUsPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // --- MOCK API CALL ---
    console.log("Form Data Submitted:", formState);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent.');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
    // --- END MOCK API CALL ---
  };

  const faqData = [
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a complimentary in-home or virtual consultation to discuss your needs, measure your windows, and showcase our fabric samples. There's no obligation to purchase."
    },
    {
      question: "What is the typical timeline for custom curtains?",
      answer: "Our standard turnaround time is typically 2-3 weeks from the final design approval to installation. This can vary slightly depending on fabric availability and the complexity of the project."
    },
    {
      question: "Are your curtains and blinds motorized?",
      answer: "Absolutely. We specialize in smart home automation and offer a wide range of motorization options from leading brands. You can control your window treatments with a remote, a wall switch, an app, or even your voice."
    },
    {
      question: "What is your warranty policy?",
      answer: "We stand by our craftsmanship. We offer a 5-year warranty on all our custom-made curtains and blinds, covering any defects in materials or workmanship. Our motorization systems also come with a manufacturer's warranty."
    }
  ];

  return (
    <div className="text-gray-800">
      {/* Section 1: Hero */}
      <div className="text-center py-20 md:py-36 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>

      {/* Section 2: Contact Details & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
            <p className="mt-3 text-lg text-gray-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="mt-10 space-y-8">
              <InfoItem icon={<Phone className="text-blue-500" />} title="Call us" content="+971 55 337 1902" />
              <InfoItem icon={<Mail className="text-blue-500" />} title="Email us" content="badirafique@gmail.com" />
              <InfoItem icon={<MapPin className="text-blue-500" />} title="Our office" content="Dubai, United Arab Emirates" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 lg:mt-0 lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <FormInput label="Full Name" type="text" name="name" placeholder="Your Name" value={formState.name} onChange={handleInputChange} required />
                  <FormInput label="Email" type="email" name="email" placeholder="Your Email" value={formState.email} onChange={handleInputChange} required />
                  <div className="sm:col-span-2">
                    <FormInput label="Subject" type="text" name="subject" placeholder="Assistance with an order" value={formState.subject} onChange={handleInputChange} required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                    <textarea
                      name="message" id="message"
                      placeholder="Your Detailed Project Requirements"
                      rows="5"
                      className="mt-2 block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-8 text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 disabled:bg-gray-400"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (<> <Send className="w-5 h-5 mr-2" /> Send Message </>)}
                  </button>
                </div>
                {submitMessage && (<p className="mt-4 text-center text-green-600 font-medium">{submitMessage}</p>)}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: FAQ */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for the accordion in the FAQ section
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-left p-5 sm:p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-gray-800">{question}</span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </button>
      {isOpen && (
        <div className="text-gray-600 px-5 sm:px-6 pb-5 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};


// Reusable component for contact info items
const InfoItem = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-blue-100 rounded-lg">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
  </div>
);

// Reusable component for form inputs
const FormInput = ({ label, ...props }) => (
  <div>
    <label htmlFor={props.name} className="block text-sm font-semibold leading-6 text-gray-900">{label}</label>
    <div className="mt-2">
      <input
        id={props.name}
        {...props}
        className="block w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
      />
    </div>
  </div>
);
export default ContactUsPage;