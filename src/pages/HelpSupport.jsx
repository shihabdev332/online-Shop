import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaTruck, FaUndo } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Contact from "./Contact";

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How can I contact customer support?", answer: "You can reach us via email at support@yourshop.com or call us at +880 1234-567890." },
    { question: "What are your customer service hours?", answer: "Our support team is available 9 AM – 9 PM, Sunday to Friday." },
    { question: "How long does delivery take?", answer: "Delivery usually takes 2–5 business days depending on your location." },
    { question: "Do you offer same-day delivery?", answer: "Yes, for select areas within Dhaka city only." },
    { question: "Can I change my shipping address after placing an order?", answer: "Yes, contact customer support within 2 hours of placing your order." },
    { question: "What are your payment methods?", answer: "We accept Cash on Delivery, bKash, Nagad, and major credit cards." },
    { question: "Is my payment information secure?", answer: "Yes, all transactions are encrypted and processed securely." },
    { question: "How do I track my order?", answer: "After your order is shipped, you’ll receive a tracking ID via SMS or email." },
    { question: "What is your return policy?", answer: "You can return items within 7 days of delivery if they are unused and in original packaging." },
    { question: "Do you offer refunds?", answer: "Refunds are processed within 5–7 business days after product inspection." },
    { question: "Are there shipping charges?", answer: "Shipping is free for orders over ৳1000. Below that, a small fee applies." },
    { question: "Do you ship internationally?", answer: "Currently, we only deliver within Bangladesh." },
    { question: "What happens if I receive a damaged product?", answer: "Please contact support immediately with photos of the damaged product." },
    { question: "Can I cancel my order?", answer: "Orders can be canceled within 1 hour of placing them." },
    { question: "Do you offer warranty on products?", answer: "Some electronics include a 6–12 month warranty, mentioned on the product page." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-16 lg:px-32">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Help & Support</h1>

      {/* Customer Care Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-blue-600 mx-auto mb-3" />
          <h2 className="font-semibold text-lg text-gray-700 mb-2">Customer Care</h2>
          <p className="text-gray-500">Call us at <strong>+880 1234-567890</strong></p>
          <p className="text-gray-500">Email: support@yourshop.com</p>
          <p className="text-gray-500">Available: 9 AM – 9 PM</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaTruck className="text-3xl text-green-600 mx-auto mb-3" />
          <h2 className="font-semibold text-lg text-gray-700 mb-2">Shipping System</h2>
          <p className="text-gray-500">Delivery within 2–5 days across Bangladesh.</p>
          <p className="text-gray-500">Track your order anytime online.</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaUndo className="text-3xl text-red-600 mx-auto mb-3" />
          <h2 className="font-semibold text-lg text-gray-700 mb-2">Return & Refund</h2>
          <p className="text-gray-500">7-day easy return policy.</p>
          <p className="text-gray-500">Full refund after product inspection.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FaAngleUp className="text-gray-600" />
                ) : (
                  <FaAngleDown className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div><Contact/></div>
    </div>
  );
};

export default HelpSupport;
