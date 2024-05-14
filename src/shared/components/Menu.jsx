import { motion } from "framer-motion";
export default function Menu({ isMobile, open }) {
  return (
    <motion.div
      className={`${isMobile && `${open ? "absolute top-1/2 " : "hidden"}`} `}
    >
      <motion.div>
        <motion.ul className={isMobile ? "text-[2rem]" : "flex gap-8 "}>
          <li>
            <a href="#"> About</a>{" "}
          </li>
          <li>
            <a href="#">Careers</a>{" "}
          </li>
          <li>
            <a href="#">Events</a>{" "}
          </li>
          <li>
            <a href="#">Products</a>{" "}
          </li>
          <li>
            <a href="#">Support</a>{" "}
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
