import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/HeroSection";
import Nav from "../Components/navbar/Nav";
import Projects from "../Components/projects/Projects";
import Skills from "../Components/skills/Skills";
import Social from "../Components/social/Social";

const Home = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Social />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
