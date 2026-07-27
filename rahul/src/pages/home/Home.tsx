import Hero from './section/hero';
import About from './section/About';
import Skill from './section/Skill';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skill />
    </div>
  );
};

export default Home;