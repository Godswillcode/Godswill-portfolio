import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Call from "./Components/Call";
import AllProject from "./Components/AllProject";
import StartTop from "./Components/StartTop";

function App() {
  return (
    <>
      <Call />
      <StartTop />
      <Switch>
        <Route exact path="/">
          <Particles
            className="particle"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
                shape: {
                  type: "star",
                  stroke: {
                    width: 6,
                    color: "#ef4035",
                  },
                },
              },
            }}
          />
          <Navbar />
          <Header />
          <About />
          <Services />
          <Projects />
          <Skills />
        </Route>
        <Route path="/allProjects">
          <AllProject />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
