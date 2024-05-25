import { useMediaQuery } from '@uidotdev/usehooks';
import Footer from './shared/layout/Footer';
import Header from './shared/layout/Header';
import SectionOne from './shared/components/SectionOne';
import SectionTwo from './shared/components/SectionTwo';

export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <>
      <Header isMobile={isSmallDevice} />
      <main>
        <SectionOne isDevice={isSmallDevice} />
        <SectionTwo isDevice={isSmallDevice} />
      </main>
      <Footer />
    </>
  );
}
