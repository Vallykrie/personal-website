const About = () => {
  return (
    <section className="flex justify-between w-auto h-auto pt-20 flex-col">
      {/* Photo */}
      <div className="h-[366px] w-full border-solid border-4 rounded-xl border-black">
        <img
          src="/mnt/data/image.png"
          alt="Foto Gwejh"
          className="h-auto max-w-xs"
        />
      </div>
      <div className="h-auto w-full flex flex-col ">
        <div className="py-5 min-lg:px-5 flex flex-row gap-4 w-full justify-start text-4xl text-black max-md:text-[40px] max-sm:text-3xl">
          <div className="sora-400">About</div>
          <div className="sora-800">Me</div>
        </div>
        <div className="gap-5 py-5 min-lg:px-5 sora-200 text-base flex flex-col w-full justify-start">
          <p>
            Hello! My name is Pande Kadek Nathan Prabhaswara Sudiara Putra, but
            you can call me Nathan. I&apos;m 19 years old and currently studying
            Informatics Engineering at Brawijaya University. In my free time, I
            enjoy playing games and diving into the world of manga. I consider
            myself a bit of a &quot;weeb&quot;, always excited to explore new
            stories and characters.
          </p>
          <p>
            While I&apos;m still exploring my career path, I&apos;m particularly
            drawn to graphic design and website/app design. I frequently use
            Figma for my design projects and have recently started learning
            frontend development with React.js, Tailwind, and Framer Motion.
            Once I feel confident with frontend technologies, I plan to dive
            into backend development as well.
          </p>
          <p>
            I&apos;m passionate about technology and always eager to learn more
            about the latest advancements, especially in AI. Being a fast
            learner, I thrive on picking up new skills and tackling new
            challenges. Although I&apos;m not currently involved in any clubs or
            organizations, I&apos;m always open to new opportunities and
            experiences that can help me grow both personally and
            professionally.
          </p>
          <p>Thank you for visiting my website!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
