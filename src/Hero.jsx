import HeroVideo from "./assets/HeroVideo.mp4";
import UilsLogo from "./assets/UilsLogo.png";

const Hero = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <video
        loop
        autoPlay
        muted
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-2/4 -translate-y-2/4 -z-10"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-2/4 -translate-y-2/4 bg-black opacity-70 z-0" />

      <div className="grid grid-cols-2 z-10 md:grid-cols-4">
        <div className="z-10 flex items-center justify-end">
          <img
            src={UilsLogo}
            alt="logo Uils"
            className=" w-36 h-auto z-10 sm:w-56"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 z-10 sm:gap-2">
          <div className="h-1 w-7 rounded-sm bg-white sm:w-9"></div>
          <div className="h-1 w-7 rounded-sm bg-white sm:w-9"></div>
          <div className="h-1 w-7 rounded-sm bg-white sm:w-9"></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
