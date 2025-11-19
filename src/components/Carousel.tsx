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

    const prev = () => {
        setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
    };

    const next = () => {
        setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
    };

    const p = projects[index];

    // ok
    return (
        <div className="relative w-full mx-auto flex flex-col items-center bg-gray-900/80 p-2 rounded-xl">
            <div className="relative w-full">
                <div className="flex justify-between items-center my-3 p-2 rounded-xl">
                    <button
                        onClick={prev}
                        className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-950 rounded-full"
                    >
                        <BsArrowLeft size={20} />
                    </button>
                    <span>{index + 1} / {projects.length}</span>
                    <button
                        onClick={next}
                        className="cursor-pointer p-2 bg-gray-900 hover:bg-gray-950 rounded-full"
                    >
                        <BsArrowRight size={20} />
                    </button>
                </div>
                <div className="rounded-lg shadow-sm bg-gray-950 border border-gray-700">
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
                        <div
                            className="block w-full h-32 rounded-xl mb-2 bg-cover bg-center bg-pan"
                            style={{
                                backgroundImage: `url(${p.image})`,
                            }}
                        ></div>

                        <p className="mb-3 font-normal text-gray-400">
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
                </div>
            </div>
        </div>
    );
}