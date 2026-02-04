import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Home
