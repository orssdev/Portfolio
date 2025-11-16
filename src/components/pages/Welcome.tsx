import picture from '../../assets/oscar.webp'

export default function Welcome() {
    return (
        <section className="page bg-grad center-div gap-[50px]">
            <div className="w-[800px] h-[550px] btb p-[50px] flex flex-col justify-center gap-[50px]">
                <div className="flex flex-col">
                    <h3 className="text-[18px] font-bold text-white">Hello, my name is</h3>
                    <h1 className="text-[64px] font-bold leading-tight">
                        <span className="text-[#FF0000]">Oscar Silva-Santiago</span>
                    </h1>
                    <h1 className="text-[64px] font-bold leading-tight">
                        <span className="text-gray-300">Software/Web Developer</span>
                    </h1>
                </div>
                <h3 className="text-[18px] font-bold text-gray-100">
                    Exploring the endless possibilities that code and technology can unlock, transforming the way we live, work, and connect in our everyday lives.
                </h3>
            </div>
            <div className='flex flex-col gap-[50px]'>
                <div className='w-[400px] h-[400px] overflow-hidden btb border-[1px] border-[#8b0000]'>
                    <img src={picture} alt='Oscar Silva-Santiago' className='w-full h-full object-cover'/>
                </div>
                <div className='h-[100px] w-full btb'>

                </div>
            </div>
        </section>
    );
}