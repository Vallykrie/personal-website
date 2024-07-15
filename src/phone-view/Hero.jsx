import { socialMedia } from "../constant";

const Hero = () => {
  return (
    // Hero section
    <section className="w-auto h-auto grid grid-flow-row grid-rows-1 justify-center">

      {/* Right side image */}
      <div className=" h-[332px] bg-gray-200 z-0">
        <img
          src="/mnt/data/image.png"
          alt="Foto Gwejh"
          className="h-auto max-w-xs"
        />
      </div>

      {/* Hero content */}
      <div className="flex-col flex w-fit z-10 mt-12 text-4xl max-[470px]:text-3xl max-md:text-[36px] max-[400px]:text-2xl">
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
        <div className="sora-200 text-base max-w-lg mt-8 max-[470px]:text-[12px] max-[470px]:">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          repudiandae excepturi nobis neque vel. Sequi excepturi sunt, ex
          blanditiis ut eum delectus quidem neque veritatis corporis corrupti
          natus, labore magnam. Eius maxime aliquam tenetur iusto quas,
          laudantium dicta distinctio temporibus, totam fugit harum magnam
          reiciendis velit quaerat aliquid illo recusandae eveniet numquam
          voluptas corrupti perspiciatis exercitationem rem? Reiciendis, a
          delectus?
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
