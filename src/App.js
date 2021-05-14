import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { SliderData } from "./components/SliderData";


function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} slides={SliderData}/>
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
