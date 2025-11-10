import React, { useState } from "react";
import {
  FaBoxOpen,
  FaUndoAlt,
  FaMoneyBillWave,
  FaAngleDown,
  FaAngleUp,
  FaCheckCircle,
  FaTruck,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ReturnPolicy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data (grouped by steps)
  const faqData = {
    1: [
      { q: "How do I initiate a return?", a: "Go to your orders page, select the item, and click 'Return'." },
      { q: "Do I need original packaging?", a: "Yes, please include all original packaging, tags, and accessories." },
      { q: "Can I return multiple items together?", a: "Yes, you can pack multiple return items in a single shipment." },
      { q: "Is pickup available from home?", a: "Yes, we offer home pickup in most cities across Bangladesh." },
      { q: "Do I need to print a return label?", a: "No, our delivery partner will bring the return label during pickup." },
      { q: "Can I drop off the item instead?", a: "Yes, you can drop it at our nearest partner hub." },
      { q: "How long does return pickup take?", a: "Usually within 48 hours after your request is confirmed." },
      { q: "Can I return used products?", a: "Only unused and undamaged items can be returned." },
      { q: "Can I return gifts?", a: "Yes, if you have the order details or invoice number." },
      { q: "What if the delivery person doesn’t arrive?", a: "Contact our customer care immediately to reschedule pickup." },
      { q: "Do I have to pay for return shipping?", a: "No, all return shipping is free for eligible products." },
      { q: "Can I return electronics?", a: "Yes, only if not activated and within 7 days of delivery." },
      { q: "Is there a return form?", a: "Yes, fill the quick online return form before scheduling pickup." },
      { q: "Can I modify a return request?", a: "Yes, but only before the pickup is confirmed." },
      { q: "How will I know the return status?", a: "You can track it from your orders dashboard." },
    ],

    2: [
      { q: "What is your general return policy?", a: "Items can be returned within 7 days of delivery in unused condition." },
      { q: "Which items cannot be returned?", a: "Underwear, food, cosmetics, and customized products are not returnable." },
      { q: "Do you accept returns for sale items?", a: "Yes, if the product is defective or damaged." },
      { q: "How long is the return window?", a: "7 days from the delivery date for most products." },
      { q: "Is return possible without invoice?", a: "An invoice or order number is required for every return." },
      { q: "Do I need to record a video during unboxing?", a: "Optional, but helps if there’s a damage claim." },
      { q: "Can I exchange instead of return?", a: "Yes, you can request an exchange for the same product." },
      { q: "What happens after return inspection?", a: "If approved, your refund/exchange will be processed." },
      { q: "How do I know if a product is returnable?", a: "Check the product page for ‘Returnable’ tag before purchase." },
      { q: "Can damaged products be returned?", a: "Yes, report within 24 hours with photos." },
      { q: "Do I need original box?", a: "Yes, original box and accessories must be returned." },
      { q: "Can I return clothing?", a: "Yes, as long as it’s unworn and tags are attached." },
      { q: "Can I return opened cosmetics?", a: "No, for hygiene reasons, opened cosmetics are non-returnable." },
      { q: "How do I cancel a return request?", a: "Contact support before pickup confirmation." },
      { q: "Is return policy same for all items?", a: "Some categories like electronics have special return windows." },
    ],

    3: [
      { q: "When will I receive my refund?", a: "Within 5–7 business days after return inspection." },
      { q: "How will I get the refund?", a: "Refunds are issued via original payment method (bKash, Nagad, card, etc.)." },
      { q: "Can I get a refund in cash?", a: "Cash refunds are only available for COD orders." },
      { q: "Do you deduct any amount from refund?", a: "No deduction unless product is returned incomplete or damaged." },
      { q: "Is refund possible without returning product?", a: "No, refund requires physical return verification." },
      { q: "Can I get store credit instead?", a: "Yes, you can choose store credit during refund request." },
      { q: "Do you refund delivery charges?", a: "Yes, if the return is due to our error or defective item." },
      { q: "What if refund is delayed?", a: "Please contact our support with order ID for assistance." },
      { q: "Can I track my refund status?", a: "Yes, visit the ‘My Refunds’ section in your account." },
      { q: "Do you refund partial returns?", a: "Yes, for items returned from multi-item orders." },
      { q: "Is refund policy different for electronics?", a: "Refund after inspection and service center verification." },
      { q: "How do I confirm refund completion?", a: "You’ll get SMS and email confirmation when refund is issued." },
      { q: "Can I change refund method later?", a: "No, refund method is fixed once request is submitted." },
      { q: "Do you refund promo code discounts?", a: "No, promo codes are one-time and non-refundable." },
      { q: "Can I contact support for refund issues?", a: "Yes, email refund@yourshop.com or call +880 1234-567890." },
    ],
  };

  // Description per step
  const stepContent = {
    1: {
      title: "How to Return a Product",
      icon: <FaBoxOpen className="text-5xl text-blue-600 mb-4" />,
      desc: "Returning a product is simple and hassle-free. Follow these easy steps to initiate your return, schedule a pickup, and ensure your item reaches us safely for inspection.",
    },
    2: {
      title: "Return Policy",
      icon: <FaUndoAlt className="text-5xl text-green-600 mb-4" />,
      desc: "We value customer satisfaction. Please read our return policy carefully to understand which items qualify for returns and under what conditions.",
    },
    3: {
      title: "Refund Policy",
      icon: <FaMoneyBillWave className="text-5xl text-yellow-600 mb-4" />,
      desc: "Refunds are processed quickly once we verify the returned product. Learn how refund timelines and methods work for different payment types.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Return & Refund Center
      </h1>

      {/* Step Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => { setActiveTab(1); setOpenIndex(null); }}
          className={`px-6 cursor-pointer py-3 rounded-full font-medium shadow-md transition ${
            activeTab === 1
              ? "bg-blue-600 text-white"
              : "bg-white border hover:bg-blue-100"
          }`}
        >
          How to Return
        </button>
        <button
          onClick={() => { setActiveTab(2); setOpenIndex(null); }}
          className={`px-6 py-3 cursor-pointer rounded-full font-medium shadow-md transition ${
            activeTab === 2
              ? "bg-green-600 text-white"
              : "bg-white border hover:bg-green-100"
          }`}
        >
          Return Policy
        </button>
        <button
          onClick={() => { setActiveTab(3); setOpenIndex(null); }}
          className={`px-6 py-3 cursor-pointer rounded-full font-medium shadow-md transition ${
            activeTab === 3
              ? "bg-yellow-500 text-white"
              : "bg-white border hover:bg-yellow-100"
          }`}
        >
          Refund Policy
        </button>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="text-center mb-10">
          {stepContent[activeTab].icon}
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            {stepContent[activeTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {stepContent[activeTab].desc}
          </p>
        </div>

        {/* Info Blocks */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <FaTruck className="text-4xl text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Fast Pickup</h3>
            <p className="text-gray-600">We schedule your return pickup within 48 hours after confirmation.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Quality Check</h3>
            <p className="text-gray-600">Every returned item undergoes inspection to ensure fair processing.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <FaMoneyBillWave className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Secure Refund</h3>
            <p className="text-gray-600">Refunds are made through secure channels within 5–7 business days.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-800 font-medium">{faq.q}</span>
                {openIndex === index ? (
                  <FaAngleUp className="text-gray-600" />
                ) : (
                  <FaAngleDown className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border-t text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Need More Help?</h3>
        <p className="text-gray-600 mb-6">Our customer care team is here to assist you with any issues regarding returns or refunds.</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="text-blue-600" />
            <span>support@yourshop.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaPhoneAlt className="text-green-600" />
            <span>+880 1234-567890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
