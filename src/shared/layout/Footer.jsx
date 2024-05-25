import { motion } from 'framer-motion';
import Logo from '../../assets/logo.svg';
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex justify-items-center items-center flex-col">
        <div className="pt-10 pb-10">
          <img src={Logo} alt="logo" />
        </div>
        <motion.ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
        </motion.ul>
        <div className="py-10">
          <p>&copy; 2021 Loopstudios. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
