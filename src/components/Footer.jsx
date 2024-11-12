import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram, Facebook, Globe, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-pastel-red text-black py-16 -mt-5 border-t-2 border-black">
      <div className="container mx-auto px-6">
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              DevFest
            </span>
            <span className="ml-2">Rajkot 2024</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-black transform -skew-x-12"></div>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Join us for an incredible journey of technology, innovation, and community at GDG DevFest Rajkot 2024
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://gdg.community.dev/events/details/google-gdg-rajkot-presents-gdg-rajkot-devfest-2024/" target="_blank" className="hover:text-amber-600 transition-colors duration-300">About Event</a></li>
              <li><a href="https://storage.googleapis.com/gdgrajkot/index.html" target="_blank" className="hover:text-amber-600 transition-colors duration-300">Schedule</a></li>
              <li><a href="https://gdg.community.dev/events/details/google-gdg-rajkot-presents-gdg-rajkot-devfest-2024/" target="_blank" className="hover:text-amber-600 transition-colors duration-300">Speakers</a></li>
              <li><a href="https://gdg.community.dev/events/details/google-gdg-rajkot-presents-gdg-rajkot-devfest-2024/" target="_blank" className="hover:text-amber-600 transition-colors duration-300">Sponsors</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Guidelines</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="https://gdg.community.dev/gdg-rajkot/" target="_blank" className="hover:text-amber-600 transition-colors duration-300">Past Events</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors duration-300">Disclaimer</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
             <a href="https://gdg.community.dev/gdg-rajkot/" className="hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </a> 
              <a href="https://chat.whatsapp.com/KiC9rhF5Jk09j4ba7by7tH" className="hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6" />
              </a> 
             <a href="https://www.facebook.com/GDGRajkot" className="hover:scale-110 transition-transform duration-300">
                <Facebook className="w-6 h-6" />
              </a> 
              <a href="https://www.instagram.com/gdgrajkot" className="hover:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6" />
              </a> 
              <a href="https://x.com/GDGRajkot" target="_blank" className="hover:scale-110 transition-transform duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/gdgrajkot/" target="_blank" className="hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:gdg.rajkot@gmail.com" target="_blank" className="hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Stay updated with the latest news and announcements
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 GDG DevFest Rajkot. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button onClick={() => window.open('https://allevents.in/rajkot/gdg-rajkot-devfest24/80006332062962', '_blank')} className="bg-black text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors duration-300">
                Register Now
              </button>
              <button onClick={() => window.open('https://linktr.ee/gdgrajkot', '_blank')} className="border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;