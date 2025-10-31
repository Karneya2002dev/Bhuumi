// src/App.jsx
import React, { useState,useEffect } from "react";
import { FaSeedling, FaShoppingCart, FaBell, FaUsers, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Hero from "./Component/Hero";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { SiX } from "react-icons/si"; 

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Farmer",
  });

  const [navOpen, setNavOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("home");
     const currentYear = new Date().getFullYear();


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
    { name: "What We Do", id: "whatwedo" },
    { name: "Who We Are", id: "whoweare" },
    { name: "Features", id: "features" },
    { name: "Join Waitlist", id: "waitlist" },
  ];


  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setNavOpen(false);
    }
  };

  // Update active section while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      let current = activeSection;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 120; // adjust offset
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="font-sans text-gray-900 relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <div
          className="text-2xl font-bold text-green-700 tracking-wide cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Bhuumi
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScroll(link.id)}
              className={`text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.id)}
                className={`text-lg font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>

      {/* Hero Section */}
<Hero />
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
<section className="relative flex justify-center items-center min-h-screen bg-[#fafaf8] px-4 py-20" id="waitlist">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg border border-gray-100"
      >
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-900 mb-2">
          Be the First to Try Bhuumi
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Join our waitlist for beta access in Q1 2026
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              I am a *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            >
              <option>Farmer</option>
              <option>Distributor</option>
              <option>Retailer</option>
              <option>Other</option>
            </select>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-green-800 text-white font-semibold py-3 rounded-md shadow hover:bg-green-900 transition-all"
          >
            Join Waitlist
          </motion.button>
        </form>
      </motion.div>
    </section>



      {/* Footer */}
       <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">YourCompany</h2>
          <p className="text-gray-400 max-w-xs">
            Building innovative solutions that empower businesses and users worldwide.
          </p>
          <div className="flex gap-4 mt-2">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
           <SiX className="w-5 h-5 hover:text-black cursor-pointer" /> 
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <Mail className="w-4 h-4" /> contact@yourcompany.com
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" /> 123 Main Street, City, India
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        &copy; {currentYear} YourCompany. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
