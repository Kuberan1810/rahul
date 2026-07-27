import React, { useState, useEffect, useRef } from 'react';
import chatGptImg from '../../../assets/chatgpt.svg';

interface ExperienceItem {
    period: string;
    role: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        period: '01-Oct-2025 - 30-Dec-2025',
        role: 'UI/UX Intern',
        description: 'Collaborated with designers and developers to transform ideas into intuitive digital experiences.'
    },
    {
        period: '01-Jan-2026 - 30-Mar-2026',
        role: 'UI/UX Designer',
        description: 'Collaborated with designers and developers to transform ideas into intuitive digital experiences.'
    },
    {
        period: '01-Mar-2026 - Present',
        role: 'UI/UX Lead Designer',
        description: 'Collaborated with designers and developers to transform ideas into intuitive digital experiences.'
    }
];

interface TextSegment {
    text: string;
    type: 'plain' | 'bold' | 'highlight';
}

const textSegments: TextSegment[] = [
    { text: 'Rapidly progressed from UI/UX Intern to Lead Designer by delivering three products in ', type: 'plain' },
    { text: 'six months', type: 'bold' },
    { text: ' and becoming a ', type: 'plain' },
    { text: 'trusted', type: 'bold' },
    { text: ' ', type: 'plain' },
    { text: 'Core team Member.', type: 'highlight' }
];

const totalLength = textSegments.reduce((acc, s) => acc + s.text.length, 0);

export const Experience: React.FC = () => {
    const [displayedChars, setDisplayedChars] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll Observer: Trigger typewriter effect when scrolled into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Character-by-character Typewriter Animation
    useEffect(() => {
        if (!hasStarted) return;

        if (displayedChars < totalLength) {
            const timer = setTimeout(() => {
                setDisplayedChars((prev) => prev + 1);
            }, 25);
            return () => clearTimeout(timer);
        }
    }, [hasStarted, displayedChars]);

    // Helper to incrementally render formatted segments
    const renderTypedContent = () => {
        let charOffset = 0;

        return textSegments.map((segment, index) => {
            const start = charOffset;
            const end = charOffset + segment.text.length;
            charOffset = end;

            if (displayedChars <= start) return null;

            const visibleText = segment.text.slice(0, Math.max(0, displayedChars - start));

            if (segment.type === 'bold') {
                return (
                    <strong key={index} className="font-bold text-black">
                        {visibleText}
                    </strong>
                );
            }

            if (segment.type === 'highlight') {
                return (
                    <span key={index} className="text-[#F3BA19] font-bold">
                        {visibleText}
                    </span>
                );
            }

            return <React.Fragment key={index}>{visibleText}</React.Fragment>;
        });
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 select-none">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Experience
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 font-normal leading-relaxed">
                    Building user-centered digital products by collaborating with cross-functional teams and solving real-world business problems.
                </p>
            </div>

            {/* Top 3 Cards Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-16 lg:mb-20">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-[#FAE849] rounded-[30px] w-full max-w-[356px] h-[304px] pt-[60px] pr-[17px] pb-[59px] pl-[17px] flex flex-col gap-[10px] shadow-sm shrink-0"
                    >
                        <div>
                            <span className="text-xs font-medium text-gray-700 tracking-wide block mb-2">
                                {exp.period}
                            </span>
                            <h3 className="text-2xl sm:text-[28px] font-extrabold text-gray-900 tracking-tight leading-snug">
                                {exp.role}
                            </h3>
                        </div>
                        <p className="text-gray-900 text-xs sm:text-sm font-medium leading-relaxed mt-auto">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Row: Pinned LinkedIn Graphic + Animated Typewriter Statement */}
            <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left: Graphic Image */}
                <div className="lg:col-span-6 flex justify-center">
                    <div className="relative max-w-md sm:max-w-lg w-full">
                        <img
                            src={chatGptImg}
                            alt="Rahul Rajan - Performer of the Month Recognition"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Right: Key Statement with Scroll-Triggered Typewriter Effect */}
                <div className="lg:col-span-6 space-y-4">
                    <p className="text-2xl sm:text-4xl lg:text-[48px] text-black font-normal leading-[1.3] tracking-[0.02em] min-h-[160px] sm:min-h-[220px]">
                        {renderTypedContent()}
                        {displayedChars < totalLength && (
                            <span className="inline-block w-1 h-10 sm:h-12 bg-black align-middle ml-1 animate-pulse" />
                        )}
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Experience;
