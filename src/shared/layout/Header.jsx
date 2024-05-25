import { delay, motion, useCycle } from 'framer-motion';
import Menu from '../components/Menu';
import Logo from '../../assets/logo.svg';
import BtnToggleHeader from '../components/BtnToggleHeader';
import { useEffect } from 'react';
export default function Header({ isMobile }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  console.log(isOpen);
  const variants = {
    open: {
      width: '100%',
      transition: { duration: 0.5 },
    },
    closed: {
      width: '0%',
      transition: { delay: 0.2 },
    },
  };

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  return (
    <motion.header className="header-container xl:px-32 xl:py-10 2xl:px-40 2xl:py-20">
      <motion.div
        className=" flex justify-between items-center "
        initial={false}
        animate={isOpen ? 'open' : 'closed'}>
        <motion.div className="flex justify-between items-center flex-1 py-8 px-4">
          <div className="h-[32px]">
            <img src={Logo} alt="logo" className="absolute  z-50" />
          </div>
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-black z-10"
            variants={variants}></motion.div>
          <BtnToggleHeader toggle={toggleOpen} isMobile={isMobile} />
        </motion.div>
        <Menu isMobile={isMobile} />
      </motion.div>
      <div className="pb-10 px-4 xl:w-[60%] 2xl:w-[40%]">
        <div className="border-4 border-white border-solid p-7 mt-[200px] ">
          <h1 className="text-white font-normal font-josefin text-[2.5rem] md:text-[4rem] uppercase ">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </motion.header>
  );
}
