import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Skills from "./Component/Skills";
import Works from "./Component/Works";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
