import picture from '../../assets/oscar.webp';
import githubIcon from '../../assets/icons8-github-480.png';
import linkedinIcon from '../../assets/icons8-linkedin-500.png';

export default function Welcome() {
    return (
        <section id="welcome" className="page bg-grad flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-[50px] px-4 md:px-8 py-8 lg:py-0">
            <div className="w-full max-w-[90%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] min-h-[400px] md:h-auto lg:h-[550px] btb p-6 md:p-8 lg:p-[50px] flex flex-col justify-center gap-6 md:gap-8 lg:gap-[50px]">
                <div className="flex flex-col">
                    <h3 className="text-sm md:text-base lg:text-[18px] font-bold text-white mb-3">Hello, my name is</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight">
                        <span className="text-[#FF0000]">Oscar Silva-Santiago</span>
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight">
                        <span className="text-gray-300">Software/Web Developer</span>
                    </h1>
                </div>
                <h3 className="text-sm md:text-base lg:text-[18px] font-bold text-gray-100">
                    Exploring the endless possibilities that code and technology can unlock, transforming the way we live, work, and connect in our everyday lives.
                </h3>
            </div>
            <div className='flex flex-col gap-6 md:gap-8 lg:gap-[50px]'>
                <div className='w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden btb border-[1px] border-[#8b0000]'>
                    <img src={picture} alt='Oscar Silva-Santiago' className='w-full h-full object-cover'/>
                </div>
                <div className='min-h-[80px] md:h-[100px] w-full btb flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-[25px] p-4'>
                    <a href="https://github.com/orssdev" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 lg:w-[50px] cursor-pointer transition-all duration-300 hover:scale-110">
                        <img src={githubIcon} alt="GitHub" className="w-full" style={{filter: 'brightness(0) saturate(100%) invert(19%) sepia(91%) saturate(7455%) hue-rotate(4deg) brightness(98%) contrast(112%)'}} />
                    </a>
                    <a href="https://linkedin.com/in/orssdev" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 lg:w-[50px] cursor-pointer transition-all duration-300 hover:scale-110">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-full" style={{filter: 'brightness(0) saturate(100%) invert(19%) sepia(91%) saturate(7455%) hue-rotate(4deg) brightness(98%) contrast(112%)'}} />
                    </a>
                    <a href="https://orss.dev/orssdev/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 md:px-6 md:py-3 rtb border border-[rgba(255,0,0,0.2)] text-white text-sm md:text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FF0000] hover:shadow-[0_0_5px_#FF0000,0_0_10px_#FF0000,0_0_15px_#FF0000,0_12px_40px_rgba(0,0,0,0.8)]">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}