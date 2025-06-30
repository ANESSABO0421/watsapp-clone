import React from "react";

const Footers = () => {
  return (
    <div>
      <section className="h-auto bg-[#111B21] text-white py-20 -mt-10">
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
      </section>
    </div>
  );
};

export default Footers;
