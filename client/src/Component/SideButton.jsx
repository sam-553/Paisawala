import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const SideButton = () => {
  return (
    <>
      {/* Container */}
      <div className="fixed right-5 bottom-20 flex flex-col gap-4 z-50">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition transform duration-300"
        >
          <MessageCircle size={24} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919876543210" // replace with your phone number
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition transform duration-300"
        >
          <Phone size={24} />
        </a>
      </div>
    </>
  );
};

export default SideButton;
