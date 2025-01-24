import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center p-4 bg-gray-100 "
      style={{ height: "100px" }}
    >
      <div className="text-lg font-bold hover:text-[#c09858]">شركة المدينه</div>
      <div className="text-lg ">
        <a href="tel:+9660561787280" className="hover:text-blue-600">
          0561787280
        </a>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="text-blue-600 hover:text-blue-800 ml-4"
            size={24}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-pink-600 hover:text-pink-800"
            size={24}
          />
        </a>
        <a
          href="https://wa.me/123456789,tel:0536833224"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            className="text-green-600 hover:text-green-800"
            size={24}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
