import { useState, useEffect, useRef } from 'react';

const bioText = "Hi, I'm Rahul, a UI/UX Designer with experience designing SaaS platforms, AI-powered applications, and mobile experiences. I enjoy transforming complex workflows into intuitive interfaces through user centered design, design systems, and thoughtful problem-solving. My focus is on creating products that are visually clean, functional, and easy to use.";

interface CounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 1600 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, target, duration]);

  return (
    <div ref={counterRef} className="flex items-center">
      <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[128px] font-light tracking-tight text-white leading-none">
        + {count}
      </span>
    </div>
  );
};

export const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTypingStarted) {
          setIsTypingStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isTypingStarted]);

  useEffect(() => {
    if (!isTypingStarted) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= bioText.length) {
        setDisplayedText(bioText.slice(0, index));
        index += 1;
      } else {
        setDisplayedText(bioText);
        clearInterval(timer);
      }
    }, 8);

    return () => clearInterval(timer);
  }, [isTypingStarted]);

  return (
    <section className="w-full GlobalPadding">
      <div 
        ref={sectionRef}
        className="w-full bg-black text-white rounded-[16px] sm:rounded-[20px] p-8 sm:p-12 md:p-14 shadow-2xl transition-all duration-300"
      >
        {/* Top Title & Subtitle */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white! mb-2">
            About me
          </h2>
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-normal">
            Designing products that are simple, intuitive, and built for real users.
          </p>
        </div>

        {/* Typing Animation Bio Paragraph */}
        <div className="my-8 sm:my-12 min-h-[160px] sm:min-h-[200px]">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-normal leading-[2em] text-white tracking-wide">
            {displayedText}
            {displayedText.length < bioText.length && (
              <span className="inline-block w-1.5 h-6 ml-1 bg-white animate-pulse align-middle" />
            )}
          </p>
        </div>

        {/* Stats Row with Animated Count Numbers (Matching Screenshot 1:1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 pt-8 sm:pt-12 items-center justify-between">
          {/* Stat 1: + 1 Year Experience */}
          <div className="flex items-center gap-4">
            <AnimatedCounter target={1} />
            <div className="text-left text-base sm:text-xl font-light! text-white leading-snug">
              <div>Year</div>
              <div>Experience</div>
            </div>
          </div>

          {/* Stat 2: + 3 Products Designed */}
          <div className="flex items-center gap-4">
            <AnimatedCounter target={3} />
            <div className="text-left text-base sm:text-xl font-light! text-white leading-snug">
              <div>Products</div>
              <div>Designed</div>
            </div>
          </div>

          {/* Stat 3: + 25 Screens Designed */}
          <div className="flex items-center gap-4">
            <AnimatedCounter target={25} />
            <div className="text-left text-base sm:text-xl font-light! text-white leading-snug">
              <div>Screens</div>
              <div>Designed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;