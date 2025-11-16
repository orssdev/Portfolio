import { useState, useEffect } from 'react';
import picture from '../assets/oscar.webp';

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('welcome');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['welcome', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const getButtonClass = (section: string) => {
        const baseClass = "h-[60px] px-6 lg:px-8 rtb border text-lg lg:text-xl font-bold transition-all duration-300";
        const isActive = activeSection === section;
        
        if (isActive) {
            return `${baseClass} border-[#FF0000] bg-[rgba(255,0,0,0.2)] text-white shadow-[0_0_10px_rgba(255,0,0,0.5)] scale-105`;
        }
        
        return `${baseClass} border-[rgba(255,0,0,0.2)] text-white hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]`;
    };

    return (
        <>
            <header className="fixed top-0 w-full h-[100px] bg-black/50 backdrop-blur-md px-6 z-50 border-b-2 border-[#ff0000] transition-all duration-300">
                <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto">
                    <button
                        onClick={() => scrollToSection('welcome')}
                        className="flex items-center gap-4 h-[60px] px-6 md:px-8 rtb border border-[rgba(255,0,0,0.2)] text-white font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]"
                    >
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-[#FF0000] bg-black">
                            <img src={picture} alt="Oscar Silva-Santiago" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl md:text-2xl tracking-wider">ORSS</span>
                    </button>

                    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                        <button onClick={() => scrollToSection('about')} className={getButtonClass('about')}>
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className={getButtonClass('skills')}>
                            Skills
                        </button>
                        <button onClick={() => scrollToSection('projects')} className={getButtonClass('projects')}>
                            Projects
                        </button>
                        <button onClick={() => scrollToSection('contact')} className={getButtonClass('contact')}>
                            Contact
                        </button>
                    </nav>

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

            <div
                className={`fixed top-0 right-0 h-screen w-full bg-black/50 backdrop-blur-md border-l-2 border-[#ff0000] z-40 transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col gap-6 pt-[140px] px-8">
                    <button onClick={() => scrollToSection('about')} className={getButtonClass('about')}>
                        About
                    </button>
                    <button onClick={() => scrollToSection('skills')} className={getButtonClass('skills')}>
                        Skills
                    </button>
                    <button onClick={() => scrollToSection('projects')} className={getButtonClass('projects')}>
                        Projects
                    </button>
                    <button onClick={() => scrollToSection('contact')} className={getButtonClass('contact')}>
                        Contact
                    </button>
                </nav>
            </div>
        </>
    );
}