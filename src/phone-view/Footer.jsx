import logo from "../assets/logoHeader.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row h-[100] w-full justify-between items-center px-8 max-md:px-0">
      <div className="justify-center items-start">
        <a href="#home">
          <img src={logo} alt="logo" className="h-10 w-36" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-end gap-3 sora-200 text-white text-base max-md:text-xs max-[400px]:gap-0">
        <p>@ 2024 Nathan Sudiara</p>
        <p>Made with React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
