import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
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
      {/* Components */}
      <Navbar />
      <Header />
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      {/* <div style={{marginBottom: 50}}></div> */}
    </>
  );
}

export default App;
