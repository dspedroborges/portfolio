import { BsGithub, BsGlobe } from "react-icons/bs";

export type ProjectType = {
    title: string;
    image: string;
    description: { en: string, pt: string };
    techs: string[];
    demo: string;
    github: string;
    inProgress: boolean;
}

type Props = {
    project: ProjectType;
    language: "en" | "pt";
}

export default function Project({ project, language }: Props) {
    return (
        <div className="bg-gray-950 p-4 rounded-xl shadow-xl h-full flex flex-col justify-between items-center">
            <div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                    <img
                        className="w-full h-auto object-cover object-center rounded-xl"
                        alt={`${project.title} - Image`}
                        src={project.image}
                    />
                </div>
                <h3 className="font-bold mt-5">{project.title}</h3>
                <p className="py-4 border-t my-4 border-gray-800 border-dashed">{project.description[language]}</p>
            </div>

            <div>
                <div className="flex gap-2 flex-wrap my-4 pt-4 border-t border-gray-800 border-dashed">
                    {
                        project.techs.map((t, i) => {
                            return <div key={i} className="bg-gray-900 rounded-xl p-1 text-xs hover:scale-105">{t}</div>
                        })
                    }
                </div>
                <div className="flex items-center justify-start gap-2 w-full">

                    <a
                        href={project.demo}
                        target="_blank"
                        className="w-full flex text-white bg-blue-900 py-2 px-2 lg:px-6 hover:bg-blue-950 rounded text-lg items-center justify-center gap-2"
                    >
                        <BsGlobe />
                        <span>Demo</span>
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        className="w-full flex text-white bg-blue-900 py-2 px-2 lg:px-6 hover:bg-blue-950 rounded text-lg items-center justify-center gap-2"
                    >
                        <BsGithub />
                        <span>Github</span>
                    </a>
                </div>
            </div>

        </div>
    )
}