import { motion, useCycle } from 'framer-motion';
import Menu from '../components/Menu';
import Logo from '../../assets/logo.svg';
import BtnToggleHeader from '../components/BtnToggleHeader';
export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  console.log(isOpen);
  const variants = {
    open: { width: '100%', transition: { duration: 0.5 } },
    closed: { width: '0%' },
  };

  return (
    <motion.header
      className="header-container flex justify-between items-center "
      initial={false}
      animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="flex justify-between items-center flex-1 py-8 px-4">
        <div className="h-[32px]">
          <img src={Logo} alt="logo" className="absolute  z-50" />
        </div>
        <motion.div
          className="absolute top-0 bottom-0 left-0 bg-black z-10"
          variants={variants}></motion.div>
        <BtnToggleHeader toggle={toggleOpen} />
      </motion.div>
      <Menu />
    </motion.header>
  );
}
