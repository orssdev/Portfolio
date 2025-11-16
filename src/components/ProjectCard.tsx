interface ProjectCardProps {
    title: string;
    tech: string[];
    description: string[];
    link?: string | null;
    status?: string;
}

export default function ProjectCard({ title, tech, description, link, status }: ProjectCardProps) {
    return (
        <div className="btb p-6 md:p-7 border border-[rgba(255,0,0,0.15)] hover:border-[rgba(255,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] group">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#FF0000] to-transparent"></div>
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF0000] transition-colors duration-300">
                            {title}
                        </h3>
                        {status && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-[#FF0000] border border-[rgba(255,0,0,0.5)] bg-[rgba(255,0,0,0.1)]">
                                {status}
                            </span>
                        )}
                    </div>
                </div>
                {link && (
                    <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF0000] hover:text-white transition-colors duration-300 ml-3"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
                {tech.map((techItem, i) => (
                    <span 
                        key={i}
                        className="px-3 py-1 text-xs md:text-sm font-medium text-[#FF0000] border border-[rgba(255,0,0,0.3)] hover:bg-[rgba(255,0,0,0.1)] transition-colors duration-300"
                    >
                        {techItem}
                    </span>
                ))}
            </div>

            <ul className="space-y-3">
                {description.map((desc, i) => (
                    <li key={i} className="text-gray-300 text-sm md:text-base flex items-start gap-3 leading-relaxed">
                        <span className="text-[#FF0000] mt-1 text-sm">▹</span>
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
