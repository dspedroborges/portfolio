import { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsGithub } from "react-icons/bs";

export default function Carousel({
    projects,
    lang,
    content
}: {
    projects: any[],
    lang: string,
    content: any
}) {
    const [index, setIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const prev = () => {
        setShowDetails(false);
        setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
    };

    const next = () => {
        setShowDetails(false);
        setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
    };

    const p = projects[index];

    // ok
    return (
        <div className="relative w-full mx-auto flex flex-col items-center bg-gray-950 p-2 rounded-xl">
            <div className="relative w-full">
                <div className="flex justify-between items-center my-3 px-2 border-b border-dashed border-gray-600 pb-4">
                    <button
                        onClick={prev}
                        className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-800 rounded-full"
                    >
                        <BsArrowLeft size={20} />
                    </button>
                    <span>{index + 1} / {projects.length}</span>
                    <button
                        onClick={next}
                        className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-800 rounded-full"
                    >
                        <BsArrowRight size={20} />
                    </button>
                </div>
                <div className="rounded-lg bg-gray-950">
                    <div className="p-5">
                        {p.inProgress && (
                            <span className="mb-2 inline-block px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full animate-pulse">
                                In progress...
                            </span>
                        )}

                        <h5 className="hover:rotate-[2deg] mb-2 text-2xl text-center font-bold tracking-tight text-white">
                            {p.title}
                        </h5>

                        <div className="flex my-4 flex-wrap gap-2">
                            {p.techs.map((t: string, j: number) => (
                                <span
                                    key={j}
                                    className="cursor-pointer text-xs font-medium px-2.5 py-0.5 rounded-sm bg-gray-900 text-gray-300 hover:bg-gray-800 hover:scale-105"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        {
                            !showDetails && (
                                <div
                                    className="relative block w-full h-96 rounded-xl mb-2 bg-cover bg-center bg-pan cursor-pointer"
                                    onClick={() => setShowDetails(!showDetails)}
                                    style={{
                                        backgroundImage: `url(${p.image})`,
                                    }}
                                >
                                    <span className="absolute top-2 left-2 bg-gray-800 rounded-xl p-2">{content.details}</span>
                                </div>
                            )
                        }

                        {
                            showDetails && (
                                <div className="bg-gray-900 p-2 cursor-pointer rounded-xl">
                                    <p onClick={() => setShowDetails(!showDetails)} className="mb-3 font-normal text-gray-400">
                                        {p.description[lang]}
                                    </p>

                                    {
                                        p.github.map((g: Record<string, string>, i: number) => {
                                            return (
                                                <a
                                                    href={g.link}
                                                    key={i}
                                                    target="_blank"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 mr-2"
                                                >
                                                    <BsGithub className="mr-2" />
                                                    {g.label}
                                                </a>
                                            )
                                        })
                                    }

                                    {p.demo !== "" && (
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                                        >
                                            {content.demo}
                                        </a>
                                    )}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}