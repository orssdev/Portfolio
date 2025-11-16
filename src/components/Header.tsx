import { useState } from 'react';
import picture from '../assets/oscar.webp';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 w-full h-[100px] bg-black/50 backdrop-blur-md px-6 z-50 border-b-2 border-[#ff0000]">
                <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto">
                    {/* Left side - Profile Picture and Name */}
                    <button
                        onClick={() => scrollToSection('welcome')}
                        className="flex items-center gap-4 h-[60px] px-6 md:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                    >
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-[#FF0000] bg-black">
                            <img src={picture} alt="Oscar Silva-Santiago" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl md:text-2xl tracking-wider">ORSS</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="h-[60px] px-6 lg:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-lg lg:text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="h-[60px] px-6 lg:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-lg lg:text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="h-[60px] px-6 lg:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-lg lg:text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="h-[60px] px-6 lg:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-lg lg:text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden h-[60px] w-[60px] rtb border border-[rgba(255,0,0,0.2)] text-white font-bold transition-all duration-300 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000] flex flex-col items-center justify-center gap-1.5"
                    >
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Side Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-full bg-black/50 backdrop-blur-md border-l-2 border-[#ff0000] z-40 transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col gap-6 pt-[140px] px-8">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="h-[60px] px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-xl font-bold transition-all duration-300 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000]"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="h-[60px] px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-xl font-bold transition-all duration-300 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000]"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="h-[60px] px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-xl font-bold transition-all duration-300 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000]"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="h-[60px] px-8 rtb border border-[rgba(255,0,0,0.2)] text-white text-xl font-bold transition-all duration-300 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000]"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </>
    );
}