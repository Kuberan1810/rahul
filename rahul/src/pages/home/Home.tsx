
import Hero from './section/hero';
import About from './section/About';
import Skill from './section/Skill';
import Experience from './section/experience';
import Footer from './section/footer';
import ProjectSection from './section/project';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skill />
      <ProjectSection />
      <Experience />
      <Footer />

    </div>
  );
};

export default Home;