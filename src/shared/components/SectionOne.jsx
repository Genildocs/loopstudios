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
        <div></div>
      </div>
    </section>
  );
}
