import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section
      id="contact"
      className=" pb-10 px-6 md:px-12 lg:px-24 bg-[#34353A] text-white"
    >
      <h2 class="text-4xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-10  p-8 rounded-lg shadow-xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#F0C268]">
            Send a Message
          </h3>
          <form onSubmit={handleMessage} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-white bg-opacity-10 text-white focus:outline-none border border-gray-600 focus:border-[#F0C268]"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded-md bg-white bg-opacity-10  text-white focus:outline-none border border-gray-600 focus:border-[#F0C268]"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#F0C268] text-black py-3 rounded-md font-semibold transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-[#F0C268]">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Let's collaborate! Feel free to reach out for any inquiries or just
            to say hello.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
              <FaEnvelope className="text-[#F0C268] text-3xl" />
              <a
                href="mailto:limonsk026@gmail.com"
                target="_blank"
                className="text-gray-300"
              >
                limonsk026@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
              <FaPhoneAlt className="text-[#F0C268] text-3xl" />
              <a href="tel:+8801319697765">+8801319697765</a>
            </div>
            <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
              <FaWhatsapp className="text-[#25D366] text-3xl" />
              <a
                href="https://wa.me/8801936582963"
                target="_blank"
                rel="noopener noreferrer"
              >
                +8801936582963
              </a>
            </div>
            <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-[#F0C268] text-3xl" />
              <p className="text-gray-300">Bhola, Bangladesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
