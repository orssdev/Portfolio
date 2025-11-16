export default function About() {
    return (
        <section id="about" className="page flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-8 pt-20 md:pt-24">
            <div className="max-w-[1200px] w-full">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        About Me!
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent mx-auto shadow-[0_0_10px_#FF0000]"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="btb p-5 md:p-6 border border-[rgba(255,0,0,0.1)] hover:border-[rgba(255,0,0,0.3)] transition-all duration-300">
                        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed">
                            Hey there! I'm someone who loves bringing ideas to life — whether that's through{' '}
                            <span className="text-[#FF0000] font-bold">design</span>,{' '}
                            <span className="text-[#FF0000] font-bold">code</span>, or creative{' '}
                            <span className="text-[#FF0000] font-bold">problem-solving</span>. I'm all about making things that look good and work well. I like learning new skills, experimenting with different styles, and finding{' '}
                            <span className="text-[#FF0000] font-bold">smarter</span>{' '}
                            ways to get things done.
                        </p>
                        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                            I get a real kick out of turning small ideas into something tangible, whether it's a sleek interface, a fun side project, or a{' '}
                            <span className="text-[#FF0000] font-bold">solution</span>{' '}
                            that makes someone's day a little easier. I'm always curious, always creating, and constantly looking for ways to{' '}
                            <span className="text-[#FF0000] font-bold">grow</span>.
                        </p>
                        <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed mt-4">
                            I love collaborating with people who are just as{' '}
                            <span className="text-[#FF0000] font-bold">passionate</span>{' '}
                            about their craft, and I'm always up for tackling projects that challenge me to think differently or push my limits.
                        </p>
                    </div>
                    <div className="space-y-4 md:space-y-5">
                        <div className="btb p-5 md:p-6 border border-[rgba(255,0,0,0.1)] hover:border-[rgba(255,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                            <h3 className="text-xl md:text-2xl font-bold text-[#FF0000] mb-4 flex items-center gap-3">
                                Education
                            </h3>
                            <div className="space-y-2 pl-2">
                                <h4 className="text-lg md:text-xl font-bold text-white">
                                    Appalachian State University
                                </h4>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    Bachelor of Science in Computer Science
                                </p>
                                <p className="text-sm md:text-base text-gray-400">
                                    Aug 2022 - Dec 2025
                                </p>
                                <div className="pt-1 space-y-1">
                                    <p className="text-sm md:text-base text-gray-300">
                                        Minor in Mathematics
                                    </p>
                                    <p className="text-sm md:text-base text-gray-300">
                                        Certificate in Data Science
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="btb p-5 md:p-6 border border-[rgba(255,0,0,0.1)] hover:border-[rgba(255,0,0,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                            <h3 className="text-xl md:text-2xl font-bold text-[#FF0000] mb-4 flex items-center gap-3">
                                Current Position
                            </h3>
                            <div className="space-y-2 pl-2">
                                <h4 className="text-lg md:text-xl font-bold text-white">
                                    Appalachian State University
                                </h4>
                                <p className="text-base md:text-lg font-bold text-white">
                                    Academic Tutor
                                </p>
                                <p className="text-sm md:text-base text-gray-300">
                                    Computer Science and Math
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}