import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Database, Info, Lock, Mail, Share2, Shield, UserCheck } from 'lucide-react';
import React from 'react';


// Privacy Policy Page Component
const PrivacyPolicyPage = () => {
  const policySections = [
    {
      id: 1,
      title: 'Introduction',
      icon: <Info className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'Welcome to our Privacy Policy. This policy outlines how we collect, use, protect, and handle your personal information as you use our website and services. Your privacy is of utmost importance to us, and we are committed to protecting your data.'
    },
    {
      id: 2,
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'We may collect personal identification information in various ways, including, but not limited to, when you visit our site, register, place an order, fill out a form, or in connection with other activities, services, features, or resources we make available. You may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information.'
    },
    {
      id: 3,
      title: 'How We Use Your Information',
      icon: <UserCheck className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'We use the information we collect for various purposes, including: to personalize your experience, to improve our website, to process transactions, to send periodic emails regarding your order or other products and services, and to respond to your inquiries, questions, and/or other requests.'
    },
    {
      id: 4,
      title: 'Information Sharing and Disclosure',
      icon: <Share2 className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above. We may use third-party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys.'
    },
    {
      id: 5,
      title: 'Data Security',
      icon: <Lock className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.'
    },
    {
      id: 6,
      title: 'Your Rights and Choices',
      icon: <Shield className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update, or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.'
    },
    {
      id: 7,
      title: 'Contact Us',
      icon: <Mail className="w-6 h-6 mr-4 text-blue-400" />,
      content: 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: badirafique@gmail.com. We are committed to resolving any privacy concerns.'
    }
  ];

  return (
    <div className="text-gray-800 mt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50/50"
      >
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Privacy Policy</h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We are committed to protecting your privacy. This policy details how we handle your personal data.</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {policySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4"
            >
              <AccordionItem title={section.title} icon={section.icon}>
                <p className="text-gray-600 leading-relaxed text-base">{section.content}</p>
              </AccordionItem>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Reusable Accordion Item Component
const AccordionItem = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-sm transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
      >
        <span className="flex items-center font-semibold text-lg text-gray-800">{icon} {title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5">
              <div className="pl-10">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default PrivacyPolicyPage;