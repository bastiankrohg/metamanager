"use client";

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectClick = (subject: string) => {
    setSelectedSubject(subject);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-4 right-4 bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-all z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬 Chat
      </button>

      {/* Chatbot Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-xl`}
        style={{ width: "35%" }}
      >
        <div className="flex flex-col h-full rounded-l-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold">MetaManager Assistant</h3>
            </div>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Robot Image */}
          <div className="flex justify-center my-4">
            <Image
              src="/images/chatbot.png" // Path to your chatbot image
              alt="Chatbot"
              width={80} // Adjust size as needed
              height={80} // Adjust size as needed
              className="rounded-full"
            />
          </div>

          {/* Suggested Topics */}
          <div className="p-4 space-y-4">
            <h4 className="text-gray-800 font-semibold mb-2">
              How can we assist you?
            </h4>
            <div className="space-y-2">
              {[
                "Contact customer service",
                "Book a demo with our team",
                "Pricing information",
              ].map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleSubjectClick(subject)}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-gray-800 shadow-sm"
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <label
              htmlFor="custom-message"
              className="block text-gray-800 font-medium mb-2"
            >
              Something else?
            </label>
            <textarea
              id="custom-message"
              className="w-full border rounded-lg p-2 text-gray-800"
              placeholder={
                selectedSubject
                  ? `You selected: "${selectedSubject}". How can we help further?`
                  : "Type your message here..."
              }
              rows={6}
            />
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;