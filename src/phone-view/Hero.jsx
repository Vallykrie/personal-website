import { socialMedia } from "../constant";
import fotoGwejh from "../assets/HeroKotax.png";

const Hero = () => {
  return (
    // Hero section
    <section className="max-w-screen-md h-auto grid grid-flow-row">

      {/* Photo */}
      <div className="z-0 flex justify-center">
        <img
          src={fotoGwejh}
          alt="Foto Gwejh"
          className="max-[500px]:w-full w-1/2"
        />
      </div>

      {/* Hero content */}
      <div className="flex-col flex z-10 mt-12 text-4xl max-[470px]:text-3xl max-md:text-[36px] max-[400px]:text-[26px]">
        <div className="inline-flex gap-4">
          <div className="sora-400">Hello I am</div>
          <div className="sora-800">Nathan.</div>
        </div>
        <div className="inline-flex gap-4">
          <div className="sora-800">An</div>

          <div className="max-[400px]:hidden">
            <div
              className=" absolute sora-800 break-words"
              style={{
                webkitTextStrokeWidth: "0.25rem",
                webkitTextStrokeColor: "black",
              }}
            >
              Undergraduate
            </div>
            <div className="absolute sora-800 break-words text-white">
              Undergraduate
            </div>
          </div>

          <div className="hidden max-[400px]:block">
            <div
              className=" absolute sora-800 break-words"
              style={{
                webkitTextStrokeWidth: "0.17rem",
                webkitTextStrokeColor: "black",
              }}
            >
              Undergraduate
            </div>
            <div className="absolute sora-800 break-words text-white">
              Undergraduate
            </div>
          </div>

        </div>
        <div className="inline-flex gap-4">
          <div className="sora-400">Informatics Engineering</div>
        </div>
        <div className="sora-200 text-base mt-8 max-[470px]:text-[12px] max-[470px]:">
        Hello! My name is Pande Kadek Nathan Prabhaswara Sudiara Putra, but
            you can call me Nathan. I&apos;m 19 years old and currently studying
            Informatics Engineering at Brawijaya University. I&apos;m passionate about technology and always eager to learn more
            about the latest advancements, especially in AI. Being a fast
            learner, I thrive on picking up new skills and tackling new
            challenges. I&apos;m particularly
            drawn to graphic design and website/app design. I frequently use
            Figma for my design projects and have recently started learning
            frontend development with React.js, Tailwind, and Framer Motion.
        </div>
      </div>

      {/* Social Media */}
      <div className=" z-10">
        <div className="mt-8 flex flex-col max-w-fit z-10">
          <div className="flex justify-start items-end gap-8 py-1 h-[56px] bg-white pr-8 max-md:gap-4">
            {socialMedia.map((icon) => (
              <a
                className="relative flex justify-center items-center w-14 h-14 bg-white rounded border-solid border-2 border-black hover:bg-black cursor-pointer transition-all duration-300 ease-in-out "
                key={icon.alt}
                href={icon.href}
              >
                <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0">
                  <img src={icon.src} alt={icon.alt} width={20} height={20} />
                </div>
                <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                  <img src={icon.src2} alt={icon.alt} width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
