import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SideButton = () => {
  const phoneNumber = "919011085007"; 
  const message = "Hi Paisewaala team, I want more details about your services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <div className="fixed right-5 bottom-2 flex flex-col gap-4 z-50">

       
        <Link
          to={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
         
          <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

         
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition transform duration-300">
            <MessageCircle size={24} />
          </div>
        </Link>

      </div>
    </>
  );
};

export default SideButton;