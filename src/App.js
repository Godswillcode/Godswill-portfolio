import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";

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
                color: "#ff4a57",
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
    </>
  );
}

export default App;
