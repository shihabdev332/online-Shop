import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo submission (you can connect backend here)
    console.log(form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about your order,
          our products, or anything else — our team is ready to help.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Our Office</h3>
          <p className="text-gray-600">House #45, Road #9, Dhanmondi, Dhaka, Bangladesh</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <FaEnvelope className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
          <p className="text-gray-600">support@yourshop.com</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">+880 1234-567890</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+880 1XXXXXXX"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          <div className="md:col-span-2 text-center cursor-pointer">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 mt-3">✅ Message sent successfully!</p>
            )}
          </div>
        </form>
      </div>

      {/* Google Map (Optional) */}
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md mb-16">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8517920275027!2d90.37403237511055!3d23.788544878630598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7adf87d5f2b%3A0x7b8a1cc6c40389c6!2sDhanmondi%209%2FA%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8801234567890?text=Hello%20I%20need%20help%20regarding%20my%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default Contact;
