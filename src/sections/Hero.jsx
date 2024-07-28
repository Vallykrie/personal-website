import { socialMedia } from "../constant";
import fotoGwejh from "../assets/Hero.png";

const Hero = () => {
  return (
    // Hero section
    <section className="px-8 w-auto h-auto flex flex-col">
      {/* Hero content */}
      <div className="flex-col flex w-fit z-10 mt-12 ml-[10%] max-wide:ml-0">
        <div className="inline-flex gap-4" style={{ fontSize: "3rem" }}>
          <div className="sora-400">Hello I am</div>
          <div className="sora-800">Nathan.</div>
        </div>
        <div className="inline-flex gap-4" style={{ fontSize: "3rem" }}>
          <div className="sora-800">An</div>
          <div>
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
        </div>
        <div className="inline-flex gap-4" style={{ fontSize: "3rem" }}>
          <div className="sora-400">Informatics Engineering</div>
        </div>
        <div className="mt-[250px] sora-200 text-base absolute max-w-lg">
        Hello! My name is Pande Kadek Nathan Prabhaswara Sudiara Putra, but
            you can call me Nathan. I&apos;m 19 years old and currently studying
            Informatics Engineering at Brawijaya University. I&apos;m passionate about technology and always eager to learn more
            about the latest advancements.
        </div>
      </div>


      {/* Social Media */}
      <div className="absolute z-10 ml-[10%] max-wide:ml-0">
        <div className="justify-end h-[593px] flex flex-col max-w-fit z-10">
          <div className="flex justify-start items-end gap-8 py-1 h-[56px] bg-white pr-8 ">
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

      {/* Right side image */}
      <div className="max-xl:left-[30%] left-[40%] h-[561px]  absolute z-0 ">
        <img
          src={fotoGwejh}
          alt="Foto Gwejh"
          className="h-[561px]"
        />
      </div>

      {/* Divider */}
      <div className="mt-[294px] z-0 flex justify-end mr-[10%] max-wide:mr-0">
        <div className="w-[80%] bg-black h-1 z-0"></div>
      </div>
    </section>
  );
};

export default Hero;
