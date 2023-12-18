export default function Mission() {
  return (
    <div id="About">
      <div className="bg-[#f2c48b]  flex flex-col justify-around  md:flex-row">
        <div>
          <h1 className="text-4xl mt-16 md:text-7xl text-center font-normal uppercase text-black md:max-w-xl italic mx-auto">
            *more things that
          </h1>
          <h1 className="text-4xl  md:text-7xl text-center uppercase text-[#594024] md:max-w-xl font-semibold mx-auto">
            you can fix
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 md:mt-20">
          <p className="max-w-sm text-center md:text-left font-medium text-lg mb-10">
            Our mission: Keep ONE BILLION POUNDS of plastic from being made.
            Healthy delf-care routines shouldn't come at the expense of our
            planet. We believe that by making the right choices with our daily
            routines, we can have a large lasting impact.
          </p>

          <button className="border border-black text-black w-40 font-bold px-1 py-4 mb-20 rounded-full hover:bg-black hover:text-white duration-500">
            OUR MISSION*
          </button>
        </div>
      </div>
      <img src="/images/footer.png" alt="" />
    </div>
  );
}
