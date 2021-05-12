import "./style.css";

const Footer = () => {
  return ( 
    <footer>
      <a 
        href="https://github.com/stack-gunnar"
        target="_blank"
      >
        <img
        src={`${process.env.PUBLIC_URL}/github.png`}
        alt="GitHub-icon"
        />
      </a>
      <a 
        href="https://www.linkedin.com/in/williamjudd13"
        target="_blank"
      >
        <img
        src={`${process.env.PUBLIC_URL}/linkedin-round.png`}
        alt="LinkedIn-icon"
        />
      </a>

    </footer>
  );
};

export default Footer;
