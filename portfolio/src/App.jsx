import { BrowserRouter} from "react-router-dom"
import { Element} from "react-scroll";
import Navmenu from "./navbar/navbar"
import Header from "./header/Header"
import AboutUs from "./about-us/AboutUs"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"
import ContactUs from "./contact-us/ContactUs"
import Footer from "./footer/Footer"



function App() {


  return (
    <>
     <BrowserRouter>
     <Navmenu />
      <Element name="header">
        <Header />
      </Element>
      <Element name="about-us">
        <AboutUs />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact-us">
        <ContactUs />
      </Element>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
