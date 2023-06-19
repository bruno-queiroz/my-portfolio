const Hero = () => {
  return (
    <section className="flex justify-center p-4">
      <div className="flex flex-col max-w-[1200px] w-full mt-4">
        <span>Hi my name is</span>

        <h1 className="flex flex-col gap-2 font-bold text-[4rem] leading-[4rem]">
          <span>Bruno Queiroz</span>
          <span>I do Web Devolopment</span>
        </h1>

        <p className="max-w-[600px] mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          cupiditate, error ut ducimus cum quisquam minima molestias sint
          pariatur sapiente facere rem asperiores ipsum accusantium omnis,
          beatae alias similique nostrum!
        </p>

        <button className="w-[max-content] border-red-400 border-[3px] p-2 rounded mt-8">
          Reach out
        </button>
      </div>
    </section>
  );
};

export default Hero;
