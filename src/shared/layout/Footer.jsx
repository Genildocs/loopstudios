import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div>
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
      </div>
    </footer>
  );
}
