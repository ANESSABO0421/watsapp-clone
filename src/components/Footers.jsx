import React from "react";
import { FaTimes, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";


const Footers = () => {
  return (
    <div>
      <section className="h-[350px] bg-[#111B21] text-white py-20 -mt-10">
        <div className="flex justify-evenly items-center ">
          <div>
            <h2 className="text-lg font-semibold mb-4">What we do</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Features</li>
              <li>Blog</li>
              <li>Security</li>
              <li>For Business</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Who we are</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About us</li>
              <li>Careers</li>
              <li>Brand Center</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Use WhatsApp</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Android</li>
              <li>iPhone</li>
              <li>Mac/PC</li>
              <li>WhatsApp Web</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Need help?</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Apps</li>
              <li>Security Advisories</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center py-8 px-10 gap-[20px]">
          <div className="">
            <span className="text-white">2025 ©️ Whatsapp LLC</span>
          </div>
          <div className="">
            <span className="text-white">terms & privacy policy</span>
          </div>
          <div className="">
            <span className="text-white">Sitemap</span>
          </div>
          <div className="flex gap-[20px]">
            <button className="p-2 rounded-full bg-[#1f2a33] hover:bg-[#2c3b46] transition">
              <FaTimes />
            </button>
            <button className="p-2 rounded-full bg-[#1f2a33] hover:bg-[#2c3b46] transition">
              <FaYoutube />
            </button>
            <button className="p-2 rounded-full bg-[#1f2a33] hover:bg-[#2c3b46] transition">
              <FaInstagram />
            </button>
            <button className="p-2 rounded-full bg-[#1f2a33] hover:bg-[#2c3b46] transition">
              <FaFacebookF />
            </button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footers;
