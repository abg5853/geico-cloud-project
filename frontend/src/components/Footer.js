import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} GEICO. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
