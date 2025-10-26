// src/App.jsx
import React, { useState } from "react";
import { FaSeedling, FaShoppingCart, FaBell, FaUsers, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Farmer",
  });

  const [navOpen, setNavOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll notify you about Bhuumi beta.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", role: "Farmer" });
  };

  const features = [
    { icon: <FaSeedling size={40} className="text-green-600" />, title: "AI Crop Scan", description: "Snap a photo, get 80% accurate pest and disease fixes—save ₹5K/ha on crop losses." },
    { icon: <FaShoppingCart size={40} className="text-green-600" />, title: "Direct Marketplace", description: "Buy seeds, sell produce without middlemen—earn 30-40% more with UPI payments." },
    { icon: <FaBell size={40} className="text-green-600" />, title: "Schemes & Alerts", description: "Access PM-KISAN and other schemes easily; get weather & offline updates." },
    { icon: <FaUsers size={40} className="text-green-600" />, title: "Community & Learning", description: "Chat with farmers, learn from Agri universities & webinars in your language." },
  ];

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "What We Do?", id: "whatwedo" },
    { name: "Who We Are?", id: "whoweare" },
    { name: "Features", id: "features" },
    { name: "Join Waitlist", id: "waitlist" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-900 relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-green-700 tracking-wide">Bhuumi</div>
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link, i) => (
              <button key={i} onClick={() => handleScroll(link.id)} className="text-gray-700 hover:text-green-700 transition-colors font-medium">
                {link.name}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link, i) => (
                <button key={i} onClick={() => handleScroll(link.id)} className="text-gray-700 text-lg hover:text-green-700 transition-colors font-medium">
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
<section
  id="home"
  className="relative text-center py-52 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://images.stockcake.com/public/e/6/e/e6e4865c-08b7-4633-b428-f5658462485e_large/farmers-tending-crops-stockcake.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>

  {/* Animated blobs */}
  <motion.div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-3xl" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
  <motion.div className="absolute bottom-20 right-10 w-36 h-36 bg-green-300 rounded-full opacity-20 blur-3xl" animate={{ y: [0, -15, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} />
  <motion.div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 blur-2xl" animate={{ y: [0, 25, 0], x: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} />

  {/* Tagline */}
  <motion.p
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-white font-semibold text-lg md:text-xl mb-4"
  >
    The Future of Bhoomi is Bhuumi – Empowering Farmers, One Tap at a Time
  </motion.p>

  {/* Headline */}
  <motion.h1
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
  >
    Grow Smarter, Earn More with <span className="text-green-300">Bhuumi</span>
  </motion.h1>

  {/* Subhead */}
  <motion.p
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white"
  >
    Join 150M smallholder farmers to boost yields 25%, cut losses 20%, and sell direct—all in Tamil, Hindi, and 10+ languages.
  </motion.p>

  {/* CTA Button */}
  <motion.button
    onClick={() => handleScroll("waitlist")}
    className="inline-block mt-10 bg-linear-to-r from-green-700 to-green-500 text-white font-bold px-10 py-4 rounded-full shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(34,197,94,0.6)" }}
    whileTap={{ scale: 0.95 }}
    animate={{ y: [0, -4, 0] }}
    transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
  >
    Join the Waitlist
  </motion.button>
</section>


      {/* What We Do */}
   <section id="whatwedo" className="py-24 px-4 bg-green-50 relative overflow-hidden">
  {/* Background blobs for dynamism */}
  <motion.div className="absolute top-0 left-0 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
  <motion.div className="absolute bottom-10 right-0 w-64 h-64 bg-green-300 rounded-full opacity-15 blur-3xl" animate={{ y: [0, -15, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} />

  <motion.div
    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {/* Text content */}
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <motion.h2 className="text-4xl md:text-5xl font-extrabold text-green-700" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        What We Do
      </motion.h2>
      <p className="text-lg md:text-xl text-gray-700">
        Comprehensive solutions designed to address every aspect of modern farming.
      </p>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {[
          { title: "Mobile-First Technology", desc: "We build intuitive mobile applications that work seamlessly even in low-connectivity areas, ensuring farmers can access critical information anytime, anywhere.", color: "bg-green-100" },
          { title: "AI-Powered Insights", desc: "Our advanced AI analyzes crop health, predicts diseases, and provides actionable recommendations based on real-time data and agricultural expertise.", color: "bg-green-200" },
          { title: "Community Building", desc: "We connect farmers with each other and agricultural experts, fostering knowledge sharing and collaborative problem-solving across regions.", color: "bg-green-300" },
          { title: "Fair Market Access", desc: "We eliminate middlemen by providing direct marketplace access, ensuring farmers receive fair prices and buyers get quality produce.", color: "bg-green-400" },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className={`${feature.color} p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact stats */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { value: "150M+", label: "Potential Farmers Reached" },
          { value: "25%", label: "Average Yield Increase" },
          { value: "40%", label: "Higher Earnings" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-3xl shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-green-700 mb-2">{stat.value}</h3>
            <p className="text-gray-700 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <motion.img
        src="https://media.istockphoto.com/id/1469639791/photo/farmer-using-digital-tablet-in-corn-crop-cultivated-field-with-smart-farming-interface-icons.jpg?s=612x612&w=0&k=20&c=CEnLHATfACNoH_N3Ru5KoTOmAc5SbufJozvV_kcuwc4="
        alt="What We Do"
        className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  </motion.div>
</section>


      {/* Who We Are */}
<section id="whoweare" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
  {/* Background decorative blobs */}
  <motion.div className="absolute top-0 left-0 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
  <motion.div className="absolute bottom-10 right-0 w-64 h-64 bg-green-300 rounded-full opacity-15 blur-3xl" animate={{ y: [0, -15, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} />

  <motion.div
    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {/* Image */}
    <motion.div className="md:w-1/2 relative">
      <motion.img
        src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFncmljdWx0dXJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        alt="Who We Are"
        className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      {/* Decorative overlay */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-400 opacity-25 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-10 w-28 h-28 bg-green-500 opacity-20 rounded-full blur-3xl"></div>
    </motion.div>

    {/* Text content with animated cards */}
    <div className="md:w-1/2 space-y-6 text-center md:text-left">
      <motion.h2 className="text-4xl md:text-5xl font-extrabold text-green-700" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Who We Are
      </motion.h2>

      {/* Cards for Mission, Values, Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {[
          { title: "Mission", desc: "Transform farming practices across India through accessible, AI-powered tools.", color: "from-green-400 to-green-600" },
          { title: "Values", desc: "Farmer-first approach, accessibility, and sustainable growth for all.", color: "from-green-300 to-green-500" },
          { title: "Vision", desc: "A future where every farmer has the tools to thrive and prosper.", color: "from-green-200 to-green-400" },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`bg-linear-to-br ${card.color} text-white p-6 rounded-3xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h4 className="font-bold text-xl mb-2">{card.title}</h4>
            <p className="text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Company description */}
      <motion.p className="text-gray-700 mt-6 text-lg md:text-xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
        Bhuumi is built by MarqWon Dynamics Pvt. Ltd., a technology company dedicated to revolutionizing agriculture in India. We understand the challenges faced by smallholder farmers—from unpredictable weather to market inefficiencies—and we're committed to providing solutions that are both powerful and easy to use.
      </motion.p>

      <motion.p className="text-gray-700 text-lg md:text-xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
        Our platform bridges the gap between traditional farming wisdom and modern technology, making advanced agricultural tools accessible in over 10 regional languages including Tamil and Hindi.
      </motion.p>
    </div>
  </motion.div>
</section>



 


      {/* Features */}
     {/* Features Section */}
<section id="features" className="py-24 px-4 bg-green-50 relative overflow-hidden">
  {/* Background blobs */}
  <motion.div className="absolute top-10 left-0 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
  <motion.div className="absolute bottom-0 right-0 w-64 h-64 bg-green-300 rounded-full opacity-15 blur-3xl" animate={{ y: [0, -15, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} />

  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-16">Features</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {features.map((feature, i) => (
      <motion.div
        key={i}
        className="relative p-6 bg-white rounded-3xl shadow-xl text-center cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
      >
        {/* Animated floating icon background */}
        <motion.div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full opacity-30 blur-2xl" animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity }} />
        <div className="relative flex justify-center mb-4">
          {feature.icon}
        </div>
        <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
        <p className="text-gray-700">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Call-to-Action Form */}
<section id="waitlist" className="relative py-32 px-4 bg-linear-to-r from-green-700 to-green-500 overflow-hidden">
  {/* Blobs */}
  <motion.div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" animate={{ x: [0, 20, 0], y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
  <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl" animate={{ x: [0, -20, 0], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} />

  <motion.h2
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
  >
    Be the first to try Bhuumi’s beta in Q1 2026!
  </motion.h2>

  <motion.form
    className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl relative z-10"
    onSubmit={handleSubmit}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300" required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300" required />
    </div>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300" required />
    </div>
    <div className="mb-8">
      <label className="block mb-2 font-semibold">I am a:</label>
      <select name="role" value={formData.role} onChange={handleChange} className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300">
        <option>Farmer</option>
        <option>Distributor</option>
        <option>Other</option>
      </select>
    </div>
    <motion.button
      type="submit"
      className="w-full bg-linear-to-r from-green-700 to-green-500 text-white font-bold px-6 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,255,255,0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      Join Our Waitlist
    </motion.button>
  </motion.form>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 relative">
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:info@marqwon.com" className="hover:text-green-400 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
        © 2025 MarqWon Dynamics Pvt. Ltd. | Contact: info@marqwon.com
      </footer>
    </div>
  );
}
