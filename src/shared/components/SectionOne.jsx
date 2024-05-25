import image_1 from '../../assets/mobile/image-interactive.jpg';
import image_2 from '../../assets/desktop/image-interactive.jpg';
export default function SectionOne({ isDevice }) {
  return (
    <section>
      <div className="mt-16">
        <div className="flex justify-center px-8 mb-6">
          {isDevice ? (
            <img src={image_1} alt="hero" />
          ) : (
            <img src={image_2} alt="hero" />
          )}
        </div>
        <div className="text-center px-7 mb-16">
          <h2 className="uppercase text-[1.8rem] pb-4 font-josefin font-normal">
            the leader in interactive vr
          </h2>
          <p className="font-alata px-1 opacity-75">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
