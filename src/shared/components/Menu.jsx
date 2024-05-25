import { motion } from 'framer-motion';
export default function Menu({ isMobile }) {
  return (
    <nav className="absolute top-[30%]  left-[15px] md:left-0 z-50 md:relative  ">
      <motion.ul
        className={`${
          isMobile
            ? 'text-[2rem]'
            : ' md:text-[1.2rem]  md:!flex md:gap-4 md:mr-10 md:!opacity-100 '
        }  `}
        variants={{
          open: { opacity: 1, display: 'block' },
          closed: { opacity: 0, transitionEnd: { display: 'none' } },
        }}>
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
    </nav>
  );
}
