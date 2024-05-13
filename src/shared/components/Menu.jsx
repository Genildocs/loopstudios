import { motion } from 'framer-motion';
export default function Menu({ isMobile, open }) {
  return (
    <motion.div className={open ? 'hidden' : ''}>
      <motion.div>
        <motion.ul className={isMobile ? '' : 'flex gap-8'}>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
