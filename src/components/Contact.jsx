import React from "react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-green-100 to-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">
            Have questions about our courses or want to collaborate? 
            Feel free to reach out — we’d love to hear from you!
          </p>
          <div className="space-y-4">
            <p className="text-lg text-green-800">
              📧 Email: <span className="text-gray-800">support@studyweb.com</span>
            </p>
            <p className="text-lg text-green-800">
              📞 Phone: <span className="text-gray-800">+84 123 456 789</span>
            </p>
            <p className="text-lg text-green-800">
              📍 Address: <span className="text-gray-800">Hanoi, Vietnam</span>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
