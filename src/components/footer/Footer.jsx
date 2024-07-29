const Footer = () => {
  return (
    <div className="   bg-slate-600 min-w-screen min-h-20 flex flex-col justify-start">
      <a href="https://github.com/marguigle?tab=repositories" target="_blank">
        <img
          src="logotipo-de-github.png"
          alt="logotipo degithub"
          className="logo w-16 h-16 p-3"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/marcelo-iglesia-3047b98b/"
        target="_blank"
      >
        {" "}
        <img
          src="linkedin.png"
          alt="logotipo linkedin"
          className="logo w-16 h-16 p-3"
        />
      </a>
    </div>
  );
};

export default Footer;
