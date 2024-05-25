import Earth from "../../assets/mobile/image-deep-earth.jpg";
export default function SectionTwo({ isDevice }) {
  const gallery = [
    {
      source: {
        mobile: { Earth },
        desktop: "./src/assets/desktop/image-deep-earth.jpg",
      },
      name: "deep earth",
      alt: "Earth",
      id: 1,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-night-arcade.jpg",
        desktop: "/src/assets/desktop/image-night-arcade.jpg",
      },
      name: "night arcade",
      alt: "Arcade",
      id: 2,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-soccer-team.jpg",
        desktop: "/src/assets/desktop/image-soccer-team.jpg",
      },
      name: "soccer team vr",
      alt: "Soccer",
      id: 3,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-grid.jpg",
        desktop: "/src/assets/desktop/image-grid.jpg",
      },
      name: "the grid",
      alt: "car grid",
      id: 4,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-from-above.jpg",
        desktop: "/src/assets/desktop/image-from-above.jpg",
      },
      name: "from up above vr",
      alt: "estrada",
      id: 5,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-pocket-borealis.jpg",
        desktop: "/src/assets/desktop/image-pocket-borealis.jpg",
      },
      name: "pocket borealis",
      alt: "aurora boreal",
      id: 6,
    },
    {
      source: {
        mobile: "/src/assets/mobile/image-fisheye.jpg",
        desktop: "/src/assets/desktop/image-fisheye.jpg",
      },
      name: "Make it fisheye",
      alt: "fisheye",
      id: 7,
    },
  ];
  console.log(gallery);
  return (
    <section className=" mb-20">
      <div>
        <div className="text-center mb-10">
          <p className="uppercase text-[1.8rem] pb-4 font-josefin font-normal">
            our creations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 px-8 uppercase">
          {gallery.map(
            (elemento, index) => (
              console.log(elemento.source.mobile),
              (
                <div key={index} className="mb-[4rem]">
                  {isDevice ? (
                    <img
                      src={elemento.source.mobile.Earth}
                      alt={elemento.alt}
                    />
                  ) : (
                    <img src={elemento.source.desktop} alt={elemento.alt} />
                  )}

                  <p className="mt-[-60px] ml-5 text-white font-josefin">
                    {elemento.name}
                  </p>
                </div>
              )
            )
          )}
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
