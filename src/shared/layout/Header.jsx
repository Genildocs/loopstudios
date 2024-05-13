import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';
import iconHamburguer from '../../assets/icon-hamburger.svg';
import iconClose from '../../assets/icon-close.svg';
import Menu from '../components/Menu';
import Logo from '../../assets/logo.svg';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);

  const varianst = {
    open: {
      position: 'absolute',
      backgroundColor: 'black',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
    },
    closed: {
      position: 'relative',
      width: '100%',
    },
  };
  const menuToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="header-container">
      <motion.div
        className=" pt-6 pl-6 pr-6 menu-container"
        animate={open ? 'open' : 'closed'}
        transition={{ duration: 1 }}
        variants={varianst}>
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="logotipo" className="w-[150px]" />
          </div>
          {isMobile && (
            <div>
              <button onClick={menuToggle}>
                <motion.img
                  src={iconHamburguer}
                  alt="menu"
                  className={open ? 'hidden' : 'visible '}
                />
                <motion.img
                  src={iconClose}
                  alt="menu"
                  className={open ? 'visible ' : 'hidden'}
                />
              </button>
            </div>
          )}
          <Menu isMobile={isMobile} open={open} />
        </div>
      </motion.div>
    </div>
  );
}
