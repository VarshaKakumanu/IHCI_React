import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Hero from "./components/Hero(section1)";
import Team from "./components/Team";
import Testmonial from "./components/Testmonial";

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Headers />
        <Hero />
        <Content />
        <Team />
        <Testmonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
