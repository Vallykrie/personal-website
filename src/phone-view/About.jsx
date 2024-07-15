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
            I am a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I
            have continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I amm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            When I am not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
