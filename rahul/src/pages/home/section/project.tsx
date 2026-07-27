import React from 'react';
import ProblemToPrototype from '../../about/components/ProblemToPrototype';

export const ProjectSection: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa] text-gray-900 selection:bg-[#E2F163] selection:text-black">
      <ProblemToPrototype />
    </div>
  );
};

export default ProjectSection;