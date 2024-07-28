import { socialMedia } from "../constant";

const Contact = () => {
  return (
    <section className="h-auto w-full px-8 grid grid-flow-row grid-cols-1 ">
      {/* left side */}
      <div className=" py-5 flex flex-col h-auto justify-center gap-5">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="How can i help?*"
            className="justify-start items-start h-36 w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div className="flex flex-row gap-8 justify-start items-center max-md:flex-col">
          <a href="https://ngl.link/reinaiueo_" className="w-full h-14 px-5 py-4 rounded bg-black justify-center items-center flex text-white text-xl sora-600 hover:bg-white hover:text-black hover:border-solid hover:border-2  transition-all duration-300 ease-in-out hover:border-black hover:cursor-pointer">
            Get in Touch
          </a>

          {/* sosmed */}
          <div className="flex justify-start w-full">
            <div className="flex items-center gap-8 py-1 h-14 bg-white">
              {socialMedia.map((icon) => (
                <a
                  className="flex justify-center items-center w-14 h-14 bg-white rounded border-solid border-2 border-black hover:bg-black cursor-pointer transition-all duration-300 ease-in-out"
                  key={icon.alt}
                  href={icon.href}
                >
                  <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0">
                    <img src={icon.src} alt={icon.alt} width={20} height={20} />
                  </div>
                  <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                    <img
                      src={icon.src2}
                      alt={icon.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-start py-5 gap-5 h-auto">
        <div className="flex flex-col gap-5">
          {/* title */}
          <div className="flex flex-col gap-3 text-4xl sora-800  max-md:text-[40px] max-sm:text-3xl max-md:gap-0">
            <div className="flex flex-row gap-4 max-[350px]:gap-2 max-[350px]:text-2xl">
              <div className="">Lets</div>
              <div>
                <div
                  className=" absolute"
                  style={{
                    webkitTextStrokeWidth: "0.25rem",
                    webkitTextStrokeColor: "black",
                  }}
                >
                  talk
                </div>
                <div className="absolute text-white">talk</div>
                <div className="">talk</div>
              </div>
              <div className="">for</div>
            </div>
            <div className="flex flex-row gap-4 max-[350px]:gap-2 max-[350px]:text-2xl">
              <div className="">Something</div>
              <div className="">special</div>
            </div>
          </div>

          {/* description */}
          <div className="sora-200">
            <p>
            Ini belum nyambung ke backend sih... jadi kalo mau kirim anonymous message, bisa langsung klik get in touch wkwkwk :D
            </p>
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col sora-600 text-2xl max-md:text-xl">
          <p>blablabla@than.com</p>
          <p>08123456789</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
