import React from 'react';
import ProjectSection from './section/project';
import Experience from './section/experience';
import Footer from './section/footer';

const Home: React.FC = () => {
  return (
    <div className="w-full space-y-12">
      <ProjectSection />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;