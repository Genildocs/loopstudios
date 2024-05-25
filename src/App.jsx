import { useMediaQuery } from '@uidotdev/usehooks';
import Footer from './shared/layout/Footer';
import Header from './shared/layout/Header';

export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <>
      <Header isMobile={isSmallDevice} />
      <main></main>
      <Footer />
    </>
  );
}
