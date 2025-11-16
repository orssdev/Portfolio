import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Skills() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="skills" className="page flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-8 pt-20 md:pt-24">
            <div ref={elementRef} className={`max-w-[1200px] w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wider">
                        SKILLS
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent mx-auto shadow-[0_0_10px_#FF0000]"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
                    <div className={`space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                        <div className="btb p-5 md:p-6 border border-[rgba(255,0,0,0.15)] hover:border-[rgba(255,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:scale-[1.02] group">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-1 h-8 bg-gradient-to-b from-[#FF0000] to-transparent"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#FF0000] group-hover:text-white transition-colors duration-300">
                                    Core Skills
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">Problem Solving</span>
                                </li>
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">Critical Thinking</span>
                                </li>
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">Adaptability</span>
                                </li>
                            </ul>
                        </div>

                        <div className="btb p-5 md:p-6 border border-[rgba(255,0,0,0.15)] hover:border-[rgba(255,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:scale-[1.02] group">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-1 h-8 bg-gradient-to-b from-[#FF0000] to-transparent"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#FF0000] group-hover:text-white transition-colors duration-300">
                                    Technical Skills
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">Object-Oriented Programming</span>
                                </li>
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">SQL and NoSQL Databases</span>
                                </li>
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">System Programming</span>
                                </li>
                                <li className="text-gray-100 text-base md:text-lg flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                                    <span className="text-[#FF0000] text-xl">▹</span>
                                    <span className="font-medium">Web Development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`btb p-5 md:p-6 border border-[rgba(255,0,0,0.15)] hover:border-[rgba(255,0,0,0.4)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:scale-[1.02] group h-fit ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-[#FF0000] to-transparent"></div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#FF0000] group-hover:text-white transition-colors duration-300">
                                Tech Stack
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-5">
                            {[
                                { src: "python", label: "Python", skills: "Backend, Data Science" },
                                { src: "js", label: "JavaScript", skills: "Frontend, Full Stack" },
                                { src: "ts", label: "TypeScript", skills: "Type Safety, Full Stack" },
                                { src: "html", label: "HTML", skills: "Web Structure" },
                                { src: "css", label: "CSS", skills: "Styling, Design" },
                                { src: "tailwind", label: "Tailwind", skills: "CSS Framework" },
                                { src: "react", label: "React", skills: "UI Development" },
                                { src: "next", label: "Next.js", skills: "React Framework" },
                                { src: "nodejs", label: "Node.js", skills: "Backend Runtime" },
                                { src: "express", label: "Express", skills: "API Development" },
                                { src: "mysql", label: "MySQL", skills: "SQL Database" },
                                { src: "mongo", label: "MongoDB", skills: "NoSQL Database" },
                                { src: "git", label: "Git", skills: "Version Control" },
                                { src: "kotlin", label: "Kotlin", skills: "Android Development" },
                                { src: "androidstudio", label: "Android Studio", skills: "Mobile IDE" },
                                { src: "swift", label: "Swift", skills: "iOS Development" }
                            ].map((skill, index) => (
                                <div 
                                    key={skill.src}
                                    className="flex flex-col items-center gap-3 group/icon"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="btb p-2 border border-[rgba(255,0,0,0.1)] hover:border-[rgba(255,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.3)] hover:scale-110 hover:-translate-y-2 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 cursor-pointer">
                                        <img 
                                            src={`https://skillicons.dev/icons?i=${skill.src}`} 
                                            alt={skill.label} 
                                            className="w-full h-full object-contain transition-all duration-300 group-hover/icon:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" 
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-semibold text-xs md:text-sm">{skill.label}</p>
                                        <p className="text-gray-400 text-[10px] md:text-xs mt-0.5">{skill.skills}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}