import { projectLists } from "../constant";
import readMore from "../assets/readMore.svg";

const Project = () => {
  return (
    <section className="w-auto h-auto">
      <div className="flex w-full flex-row justify-center gap-4 py-5 text-white text-4xl  max-md:text-[40px] max-sm:text-3xl">
        <div className="sora-400">My</div>
        <div className="sora-800">Project</div>
      </div>

      {/* card and desc full view */}
      <div className="w-full flex flex-col max-sm:hidden">
        {projectLists.map((icon) => (
          <div key={icon.no}>
            <div className="py-5 gap-10 w-full h-auto grid grid-cols-2">
              <div className="justify-center flex items-center h-full">
                <img src={icon.img} alt={icon.alt} className="rounded-2xl" />
              </div>
              <div className="gap-3 justify-center flex flex-col h-auto">
                <div className="text-white text-3xl sora-800">{icon.no}</div>
                <div className="text-white sora-700 text-3xl">{icon.title}</div>
                <div className="text-white text-xs sora-200">
                  {icon.description}
                </div>
                <a href={icon.href}>
                  <img src={readMore} alt="Read More" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="py-5 gap-10 w-full h-auto grid grid-cols-2">
              <div className="gap-3 justify-center flex flex-col h-auto">
                <div className="text-white text-3xl sora-800">{icon.no2}</div>
                <div className="text-white sora-700 text-3xl">
                  {icon.title2}
                </div>
                <div className="text-white text-xs sora-200">
                  {icon.description2}
                </div>
                <a href={icon.href}>
                  <img src={readMore} alt="Read More" className="h-5 w-5" />
                </a>
              </div>
              <div className="justify-center flex items-center h-full">
                <img src={icon.img2} alt={icon.alt2} className="rounded-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* card and desc small view */}
      <div className="w-full flex-col hidden max-sm:block ">
        {projectLists.map((icon) => (
          <div
            key={icon.no}
            className="grid grid-flow-row grid-cols-1 gap-7 mt-7 "
          >
            {/* photo */}
            <div className="flex justify-center items-center">
              <img
                src={icon.img}
                alt={icon.alt}
                className="w-full rounded-2xl"
              />
            </div>

            {/* desc */}
            <div className="sora-800 text-2xl text-white">{icon.no}</div>
            <div className="sora-800 text-2xl text-white">{icon.title}</div>
            <div className="sora-200 text-white text-base max-[400px]:text-[12px]">
              {icon.description}
            </div>
            <img src={readMore} alt="Read More" className="h-5 w-5" />

            {/* photo */}
            <div className="flex justify-center items-center">
              <img
                src={icon.img2}
                alt={icon.alt2}
                className="w-full rounded-2xl"
              />
            </div>

            {/* desc */}
            <div className="sora-800 text-2xl text-white">{icon.no2}</div>
            <div className="sora-800 text-2xl text-white">{icon.title2}</div>
            <div className="sora-200 text-white text-base max-[400px]:text-[12px]">
              {icon.description2}
            </div>
            <img src={readMore} alt="Read More" className="h-5 w-5" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
