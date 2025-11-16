import ProjectCard from "../ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Media Logger",
            tech: ["Next.js", "React", "Tailwind", "NextAuth", "MongoDB"],
            description: [
                "Media logger for game shows and games that I have watched or played.",
                "Built with Next.js and React for a modern, performant user experience.",
                "Implemented authentication using NextAuth and MongoDB for data persistence.",
                "Currently in active development with new features being added regularly."
            ],
            link: "https://medialog.orss.dev",
            status: "In Development"
        },
        {
            title: "Quintus",
            tech: ["Java", "Maven", "JavaFX", "Selenium", "Git"],
            description: [
                "Developed Quintus, an application that collects flight data through web scraping with Selenium.",
                "Gained hands-on experience in package management, documentation analysis, and UX/UI design.",
                "Strengthened teamwork, problem-solving, and critical thinking skills through collaborative development."
            ],
            link: null,
            status: undefined
        },
        {
            title: "Pong2D",
            tech: ["C++", "CMake", "SFML", "Git"],
            description: [
                "Created a clone of the classic game Pong, demonstrating strong foundational programming skills.",
                "Debugged code and improved project structure for a more efficient workflow."
            ],
            link: null,
            status: undefined
        },
        {
            title: "Sudoku Solver",
            tech: ["HTML", "CSS", "JavaScript", "Git"],
            description: [
                "Constructed a web application that allows users to input a Sudoku puzzle and receive a solved version.",
                "Implemented a constraint satisfaction algorithm with recursive logic to efficiently generate solutions."
            ],
            link: "https://webprojects.orss.dev/sudokuSolver/",
            status: undefined
        },
        {
            title: "Not-Great-Not-Drawful",
            tech: ["HTML", "CSS", "JavaScript", "Node.js"],
            description: [
                "Built a real-time multiplayer drawing game in a 24-hour hackathon, inspired by Jackbox's Drawful.",
                "Developed the backend using Node.js and Express.js, leveraging WebSockets for real-time communication.",
                "Designed a responsive interface compatible with both mobile and desktop devices."
            ],
            link: "https://github.com/orssdev/Not-Great-Not-Drawful",
            status: undefined
        },
        {
            title: "Handwritten Digit Classifier",
            tech: ["Python", "JavaScript", "TensorFlow", "Keras"],
            description: [
                "Trained a Convolutional Neural Network (CNN) to recognize handwritten digits using the MNIST dataset.",
                "Engineered and trained the model with Python and TensorFlow/Keras.",
                "Gained practical understanding of convolutional layers, pooling, activation functions, and model evaluation."
            ],
            link: "https://github.com/orssdev/Handwritten-Digit-Classifier",
            status: undefined
        }
    ];

    return (
        <section id="projects" className="page flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-8 md:pt-24">
            <div className="max-w-[1200px] w-full pt-[25px]">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wider">
                        PROJECTS
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent mx-auto shadow-[0_0_10px_#FF0000]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            tech={project.tech}
                            description={project.description}
                            link={project.link}
                            status={project.status}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}