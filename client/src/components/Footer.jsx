import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram} from 'react-icons/bs';
import { FaGithub, FaLinkedin , FaTwitter} from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

function FooterComponent() {
  return (
    <Footer container className='border-t-8 border-teal-500 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
      <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        
        {/* BlogiFy Brand */}
        <div className='mb-4 md:mb-0'>
          <Link to="/" className='flex items-center text-2xl font-semibold'>
            <span className='px-2 py-1 bg-white text-indigo-500 rounded-lg'>BlogiFy</span>
          </Link>
          <p className='mt-2 text-sm'>© {new Date().getFullYear()} BlogiFy. All rights reserved.</p>
        </div>

        {/* Follow Us Section */}
        <div className='flex flex-col items-center'>
          <h5 className='text-lg font-semibold mb-2'>Connect Me</h5>
          <div className='flex gap-4'>
            <a href="https://github.com/manankumar94" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaGithub size={20} /> 
            </a>
            <a href="https://www.linkedin.com/in/manangautam/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/MananGautam46" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
            <FaTwitter size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
              <BsFacebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
              <BsInstagram size={20} />
            </a>
            <a href="https://leetcode.com/u/69mazdoor_admi/" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
              <SiLeetcode size={20} />
            </a>
            <a href="https://www.codechef.com/users/mazdoor_admi69" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
              <SiCodechef size={20} />
            </a>
            {/* <Footer.Icon href='https://github.com/manankumar94' icon={BsGithub}  color='red'/>   we can also use this */}
          </div>
        </div>
        
        {/* Additional Links */}
        <div className='text-center md:text-right mt-4 md:mt-0'>
          <h5 className='text-lg font-semibold mb-2'>Quick Links</h5>
          <ul className='space-y-2 text-sm'>
            <li><Link to="/about" className='hover:text-gray-300'>About Us</Link></li>
            <li><Link to="/contact" className='hover:text-gray-300'>Contact</Link></li>
            <li><Link to="/privacy-policy" className='hover:text-gray-300'>Privacy Policy</Link></li>
            <li><Link to="/terms" className='hover:text-gray-300'>Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
