const About = () => {
  return (
    <section className="px-8 flex flex-row justify-between w-auto h-auto pt-20">
      {/* Photo */}
      <div className="h-[572px] w-[525px] flex justify-center border-solid border-4 rounded-xl border-black ">
        <img
          src="/mnt/data/image.png"
          alt="Foto Gwejh"
          className="h-auto max-w-xs"
        />
      </div>
      <div className="h-auto w-1/2 flex justify-center flex-col ">
        <div className="p-5 flex flex-row gap-4 w-full justify-start">
          <div className="sora-400 text-4xl text-black">About</div>
          <div className="sora-800 text-4xl text-black">Me</div>
        </div>
        <div className="gap-5 p-5 sora-200 text-base flex flex-col w-full justify-start">
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
            I&apos;m passionate about technology and always eager to learn more about
            the latest advancements, especially in AI. Being a fast learner, I
            thrive on picking up new skills and tackling new challenges.
            Although I&apos;m not currently involved in any clubs or organizations,
            I&apos;m always open to new opportunities and experiences that can help
            me grow both personally and professionally.
          </p>
          <p>
            Thank you for visiting my website!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
