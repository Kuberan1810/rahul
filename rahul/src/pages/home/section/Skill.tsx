import bgSvg from '../../../assets/home/bg.svg';

const row1 = [
  "User Experience (UX)",
  "User Interface (UI)",
  "UX Research",
  "User Research",
  "User Flows",
  "Wireframing",
  "Low-Fidelity Wireframes"
];

const row2 = [
  "Information Architecture",
  "SaaS Product Design",
  "Customer Experience (CX)",
  "User Journey Mapping",
  "UX Writing",
  "Prototyping"
];

const row3 = [
  "Interactive Prototypes",
  "Micro Interactions",
  "High-Fidelity Design",
  "Interaction Design",
  "Visual Design",
  "Design Thinking",
  "Usability Testing"
];

export const Skill = () => {
  return (
    <section className="w-full select-none overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Skills
        </h2>
      </div>

      {/* Dark Outer Container with bg.svg background */}
      <div className="w-full bg-black py-12 sm:py-16 relative overflow-hidden">
        {/* SVG Background Image */}
        <img
          src={bgSvg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-80"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

        {/* Rows Container */}
        <div className="flex flex-col space-y-6 sm:space-y-8 relative z-10">
          
          {/* Row 1 (Scrolls Left) */}
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex space-x-4 sm:space-x-6 animate-skill-scroll-left whitespace-nowrap will-change-transform">
              {[...row1, ...row1, ...row1].map((skill, idx) => (
                <span key={idx} className="skill-capsule">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 (Scrolls Right) */}
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex space-x-4 sm:space-x-6 animate-skill-scroll-right whitespace-nowrap will-change-transform">
              {[...row2, ...row2, ...row2].map((skill, idx) => (
                <span key={idx} className="skill-capsule">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 (Scrolls Left) */}
          <div className="relative flex overflow-hidden w-full group">
            <div className="flex space-x-4 sm:space-x-6 animate-skill-scroll-left-slow whitespace-nowrap will-change-transform">
              {[...row3, ...row3, ...row3].map((skill, idx) => (
                <span key={idx} className="skill-capsule">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;
