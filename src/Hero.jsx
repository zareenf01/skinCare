export default function Hero() {
  return (
    <div className="bg-black">
      <div className=" flex flex-col justify-center items-center m-3 mt-32 md:mt-48 md:flex-row md:space-x-20">
        <img
          src="/images/side-img.webp"
          alt=""
          className="hidden w-40 absolute top-48 left-0 rounded-tr-full rounded-br-full md:flex"
        />
        <div className="absolute  top-48 z-40 md:top-20 md:mt-16">
          <h1 className="text-6xl md:text-8xl text-center uppercase text-[#c49358]">
            *Your skin
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold text-left uppercase text-[#c49358]">
            We care*
          </h1>
        </div>

        <img
          src="/images/hero-face.jpeg"
          alt=""
          className="w-80 rounded-full relative md:w-96"
        />

        <div className="flex flex-col">
          <h2 className="text-[#c49358] max-w-sm mt-8 mx-10">
            Summer's most special skin and lip serum for health skin concerned -
            No hidden ingredients, no opacity. Full disclosure of ingredients
            used & their concentration
          </h2>

          <button className="bg-[#d0bea7] hover:border hover:border-[#d0bea7] hover:bg-black hover:text-[#c49358] duration-500 w-40 mx-auto mt-6 font-semibold px-2 py-4 rounded-lg md:mx-10">
            <a href="#Product"> SHOP NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
}
