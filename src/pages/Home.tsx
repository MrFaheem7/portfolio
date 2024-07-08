import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/HeroSection";
import Skills from "../Components/skills/Skills";
import Social from "../Components/social/Social";

const Home = () => {
  return (
    <>
      <>
        <nav>nav</nav>
        <main>
          <Hero />
          <Skills />
          <Contact />
          <Social />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </>
  );
};

export default Home;
