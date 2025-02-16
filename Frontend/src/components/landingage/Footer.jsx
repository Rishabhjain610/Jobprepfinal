import React from 'react'
import logo from '../../assets/logo.png'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
     

<footer className="bg-black text-white py-12 w-full">
  <div className="mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      {/* Logo */}
      <div className="mb-6 md:mb-0">
        <img src={logo} alt="EduWorld Logo" className="h-12" />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-6 md:mb-0">
        <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com" className="text-gray-400 hover:text-white">
          <FaGithub className="w-6 h-6" />
        </a>
      </div>

      {/* Newsletter Subscription */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
        <form className="flex mt-2">
          <input
            type="email"
            className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your Email"
            required
          />
          <button
            type="submit"
            className="bg-[#9333ea] text-white px-4 py-2 rounded-r-md transition duration-300 hover:bg-[#9333ea] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Footer Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-6">
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#courses" className="hover:text-blue-500">Courses</a>
          <a href="#aboutus" className="hover:text-blue-500">About Us</a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <div className="flex flex-col space-y-2 mt-2 text-gray-400">
          <p>Email: <a href="mailto:jainrishabh2610@gmail.com" className="hover:text-blue-500">info@jobprep.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-500">+1 (234) 567-890</a></p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold">Features</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <a href="#services" className="hover:text-blue-500">Our Services</a>
          <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
          <a href="#pricing" className="hover:text-blue-500">Pricing</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="#faq" className="hover:text-blue-500">FAQ</a>
        </div>
      </div>

      {/* Legal */}
      <div>
        <h3 className="text-lg font-semibold">Legal</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <a href="#privacypolicy" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-500">Terms of Service</a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-6">
      <p className="text-gray-400">© 2025 JobPrep. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
