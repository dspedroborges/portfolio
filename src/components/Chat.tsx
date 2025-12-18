import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { fetchMessage } from "../requests/fetchMessage";
import { BsSend } from "react-icons/bs";

type Message = {
    text: string
    from: "me" | "them"
    time: string
}

function ReceiverMessage({ text, time }: { text: string; time: string }) {
    return (
        <div className="flex justify-end">
            <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-gray-700 px-4 py-2 text-sm text-gray-100">
                <p>{text}</p>
                <span className="mt-1 block text-[10px] text-gray-400">{time}</span>
            </div>
        </div>
    )
}

function SenderMessage({ text, time }: { text: string; time: string }) {
    return (
        <div className="flex justify-start">
            <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-gray-800 px-4 py-2 text-sm text-gray-200">
                <p>{text}</p>
                <span className="mt-1 block text-[10px] text-gray-500">{time}</span>
            </div>
        </div>
    )
}

export default function Chat({ language }: { language: "pt" | "en" }) {
    const now = new Date()
    const time = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    const [messages, setMessages] = useState<Message[]>([
        {
            text: language == "pt" ? "Faça uma pergunta sobre mim!" : "Ask a question about me!",
            from: "me",
            time,
        },
    ]);
    const [newTextMessage, setNewTextMessage] = useState("");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const copy = JSON.parse(JSON.stringify(messages));
        copy[0]["text"] = language == "pt" ? "Faça uma pergunta sobre mim!" : "Ask a question about me!";
        setMessages(copy);
    }, [language]);

    useEffect(() => {
        const el = messagesRef.current;
        if (!el) return;

        el.scrollTop = el.scrollHeight;
    }, [messages]);

    const messageMutation = useMutation({
        mutationFn: (prompt: string) => fetchMessage(prompt),
        onSuccess: (data) => {
            const now = new Date();
            const time = `${now.getHours().toString().padStart(2, "0")}:${now
                .getMinutes()
                .toString()
                .padStart(2, "0")}`;

            setMessages(prev => [
                ...prev,
                {
                    text: data,
                    from: "me",
                    time,
                },
            ]);
        },
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                buttonRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleNewMessage = () => {
        if (newTextMessage == "") return;

        const now = new Date()
        const time = `${now.getHours().toString().padStart(2, "0")}:${now
            .getMinutes()
            .toString()
            .padStart(2, "0")}`

        const newMessage: Message = {
            text: newTextMessage,
            from: "them",
            time,
        };

        setMessages([...messages, newMessage]);
        messageMutation.mutate(
            `
Here are the last 3 messages: ${JSON.stringify(messages.slice(-3))}
Here is the last message and the one you have to answer: "${newTextMessage}"

But you have to pretend that you are Pedro Borges. Do not say anything bad about yourself and try to sell yourself to get a job. You don't need to introduce yourself everytime, only if asked.

Here's the info about Pedro Borges:

Pedro Borges is a Full-stack Web Developer focused on building efficient web applications using HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Prisma. He holds a Bachelor’s degree in Systems Analysis from the Federal Institute of Brasília and has strong experience in frontend development, backend APIs, and consistent data modeling.

You have to give your answer in the following language: ${language == "pt" ? "Português brasileiro" : "English"}

Do not say anything else besides the answer. Be super short.
        `
        );
        setNewTextMessage("");
    }


    return (
        <div className="border border-gray-700 flex h-[400px] flex-col overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
            <header className="flex items-center gap-3 border-b border-gray-800 px-4 py-3">
                <div className="h-10 w-10 rounded-full bg-gray-700 bg-[url('/me.png')] bg-center bg-cover" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="block w-2 h-2 rounded-full bg-green-400"></span>
                        <span className="text-sm font-semibold text-gray-100">Pedro Borges (bot)</span>
                    </div>
                    {
                        messageMutation.isPending && <span className="text-xs text-gray-400 animate-pulse">{language == "pt" ? "digitando..." : "typing..."}</span>
                    }
                </div>
            </header>

            <main
                ref={messagesRef}
                className="flex-1 space-y-3 overflow-y-auto bg-gray-900 p-4"
            >
                {messages.map((m, i) =>
                    m.from === "me" ? (
                        <SenderMessage key={i} text={m.text} time={m.time} />
                    ) : (
                        <ReceiverMessage key={i} text={m.text} time={m.time} />
                    )
                )}
            </main>

            <footer className="flex items-center gap-2 border-t border-gray-800 px-3 py-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-600"
                    onChange={(e) => setNewTextMessage(e.target.value)}
                    value={newTextMessage}
                />
                <button
                    ref={buttonRef}
                    onClick={handleNewMessage}
                    className="cursor-pointer hover:scale-90 rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600"
                >
                    <BsSend />
                </button>
            </footer>
        </div>
    )
}
