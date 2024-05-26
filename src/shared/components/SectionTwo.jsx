import img_1 from "../../assets/mobile/image-deep-earth.jpg";
import img_1D from "../../assets/desktop/image-deep-earth.jpg";
import img_2 from "../../assets/mobile/image-night-arcade.jpg";
import img_2D from "../../assets/desktop/image-night-arcade.jpg";
import img_3 from "../../assets/mobile/image-soccer-team.jpg";
import img_3D from "../../assets/desktop/image-soccer-team.jpg";
import img_4 from "../../assets/mobile/image-grid.jpg";
import img_4D from "../../assets/desktop/image-grid.jpg";
import img_5 from "../../assets/mobile/image-from-above.jpg";
import img_5D from "../../assets/desktop/image-from-above.jpg";
import img_6 from "../../assets/mobile/image-pocket-borealis.jpg";
import img_6D from "../../assets/desktop/image-pocket-borealis.jpg";
import img_7 from "../../assets/mobile/image-curiosity.jpg";
import img_7D from "../../assets/desktop/image-curiosity.jpg";
import img_8 from "../../assets/mobile/image-fisheye.jpg";
import img_8D from "../../assets/desktop/image-fisheye.jpg";
export default function SectionTwo({ isDevice }) {
  const gallery = [
    {
      source: {
        mobile: [img_1],
        desktop: [img_1D],
      },
      name: "deep earth",
      alt: "Earth",
      id: 1,
    },
    {
      source: {
        mobile: [img_2],
        desktop: [img_2D],
      },
      name: "night arcade",
      alt: "Arcade",
      id: 2,
    },
    {
      source: {
        mobile: [img_3],
        desktop: [img_3D],
      },
      name: "soccer team vr",
      alt: "Soccer",
      id: 3,
    },
    {
      source: {
        mobile: [img_4],
        desktop: [img_4D],
      },
      name: "the grid",
      alt: "car grid",
      id: 4,
    },
    {
      source: {
        mobile: [img_5],
        desktop: [img_5D],
      },
      name: "from up above vr",
      alt: "estrada",
      id: 5,
    },
    {
      source: {
        mobile: [img_6],
        desktop: [img_6D],
      },
      name: "pocket borealis",
      alt: "aurora boreal",
      id: 6,
    },
    {
      source: {
        mobile: [img_7],
        desktop: [img_7D],
      },
      name: "the curiosity",
      alt: "curiosity",
      id: 7,
    },
    {
      source: {
        mobile: [img_8],
        desktop: [img_8D],
      },
      name: "Make it fisheye",
      alt: "fisheye",
      id: 8,
    },
  ];

  return (
    <section className=" mb-20">
      <div>
        <div className="text-center mb-10">
          <p className="uppercase text-[1.8rem] pb-4 font-josefin font-normal">
            our creations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 px-8 uppercase">
          {gallery.map((elemento, index) => (
            <div key={index} className="mb-[4rem]">
              <picture>
                <source
                  srcSet={elemento.source.desktop[0]}
                  media="(min-width: 768px)"
                />
                <img src={elemento.source.mobile[0]} alt={elemento.alt} />
              </picture>

              <p className="mt-[-60px] ml-5 text-white font-josefin">
                {elemento.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-black px-10 py-2 uppercase tracking-widest">
            <span className="hover:opacity-50">see all</span>
          </button>
        </div>
      </div>
    </section>
  );
}
