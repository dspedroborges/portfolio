import { BsGithub, BsLinkedin } from "react-icons/bs"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Chat from "./Chat";

export default function Hero({ title, description, language }: { title: string, description: string, language: "pt"|"en" }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="text-gray-100 body-font pt-12">
            <div className="container mx-auto flex px-5 pb-5 lg:pb-16 pt-16 lg:pt-8 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 data-aos="fade-down" className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-100 break-words">
                        {
                            title
                        }
                    </h1>
                    <p data-aos="fade-left" className="mb-8 leading-relaxed">
                        {
                            description
                        }
                    </p>
                    <div data-aos="fade-right" className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/dspedroborges"
                            target="_blank"
                            className="inline-flex text-white bg-blue-900 py-2 px-6 hover:bg-blue-950 rounded text-lg items-center gap-2"
                        >
                            <BsGithub />
                            <span>Github</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dspedroborges/"
                            target="_blank"
                            className="inline-flex text-gray-700 bg-gray-100 py-2 px-6 hover:bg-gray-200 rounded text-lg items-center gap-2"
                        >
                            <BsLinkedin />
                            <span>Linkedin</span>
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-1/2" data-aos="fade-up">
                    <Chat language={language} />
                </div>


            </div>
        </section>
    )
}