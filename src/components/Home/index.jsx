import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className= "home">
      <div className= "title">
        <h1>
          <p>Meticulously Crafted</p>
          <p>Full Stack</p>
          <p>Web Design</p>
        </h1>
        <Link to="about">
          <button>Hire Me</button>
        </Link>
      </div>
      <div className="person">
        <img
        src={`${process.env.PUBLIC_URL}/Group 1.png`}
        alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home
