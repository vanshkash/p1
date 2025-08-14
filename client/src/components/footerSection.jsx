// FooterSection.jsx
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">ANIL DJ & EVENTS</h3>
          <p className="text-sm text-gray-400 mt-2">
            Electrifying baraats, mobile DJ setups, and unforgettable sound.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/anil_dj_event_001?utm_source=ig_web_button_share_sheet&igsh=c3J4NzIwMDMza2l4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/shivam.kashyap.944241/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/918923426667"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/@anildjeventshapur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} ANIL DJ & EVENTS. All rights reserved.
      </div>
    </footer>
  );
}