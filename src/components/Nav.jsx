// rafce
import logoHeader from "../assets/logoHeader2.svg";
// import hamburger from "../assets/hamburger.svg";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { navLinks } from "../constant/index";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header className="px-20 py-6 sticky top-0 backdrop-blur drop-shadow-lg bg-white/60 w-auto z-50 max-lg:p-4 max-lg:px-0">
      <nav className="px-8 flex justify-between items-center flex-row">
        <div className="justify-start">
          <a href="#home">
            <img src={logoHeader} alt="logo" />
          </a>
        </div>
        <div className="justify-center space-x-8 sora-600 text-xl max-lg:hidden">
          <a className="text-stroke-1 hover:text-transparent" href="#about">
            About Me
          </a>
          <a className="text-stroke-1 hover:text-transparent" href="#skills">
            Skills
          </a>
          <a className="text-stroke-1 hover:text-transparent" href="#project">
            Projects
          </a>
          <a className="text-stroke-1 hover:text-transparent" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="justify-end max-lg:hidden">
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=yKEyHpcwxQhWjwD0"
            className="w-36 h-14 px-5 py-4 rounded bg-black  justify-center items-center flex text-white text-xl sora-600 hover:bg-white cursor-pointer transition-all duration-300 ease-in-out hover:text-black hover:border-solid hover:border-2 hover:border-black"
          >
            rawrrr
          </a>
        </div>
        <div ref={ref} className="justify-end hidden max-lg:block">
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-6 absolute left-0 right-0 top-[3.5rem] p-5 backdrop-blur drop-shadow-lg bg-white/60"
              >
                <ul className="grid gap-2">
                  {navLinks.map((route, idx) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="w-full p-[0.08rem] rounded-xl"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-start w-full p-5 rounded-xl bg-transparent hover:bg-black hover:bg-opacity-10 transition-all duration-300 ease-in-out"
                          }
                          href={route.href}
                        >
                          <span className="flex gap-1 text-lg sora-600">
                            {route.title}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
