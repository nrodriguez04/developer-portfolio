"use client";

import React from "react";
import Image from "next/image";

const projects = [
    {
        title: "Memecoin Trading Bot",
        description: "A trading bot that interacts with crypto exchanges using real-time data.",
        image: "/memecoin.jpg", // Make sure the image path is correct
        github: "https://github.com/yourrepo",
        live: "https://yourliveproject.com",
    },
    {
        title: "On-Chain Streaming Platform (Coined.live)",
        description: "A decentralized content platform for streaming and payments on Solana.",
        image: "/coinedlive.jpg",
        github: "https://github.com/yourrepo",
        live: "https://yourliveproject.com",
    },
    {
        title: "DeepSeek API AI Wrapper",
        description: "An AI-powered wrapper for DeepSeek API, enabling smarter integrations.",
        image: "/deepseek.jpg",
        github: "https://github.com/yourrepo",
        live: "https://yourliveproject.com",
    },
    {
        title: "Frontend Development Project (Koral Digital)",
        description: "A modern and responsive frontend project showcasing Koral Digital's capabilities.",
        image: "/koral.jpg",
        github: "https://github.com/yourrepo",
        live: "https://yourliveproject.com",
    },
    {
        title: "Fullstack Application",
        description: "A fullstack web application demonstrating end-to-end development skills.",
        image: "/fullstack.jpg",
        github: "https://github.com/yourrepo",
        live: "https://yourliveproject.com",
    },
];

export default function Projects() {
    return (
        <div className="p-8 bg-black text-white min-h-screen">
            <h1 className="text-5xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-lg mb-4" />
                        <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="mt-4 flex space-x-3">
                            <a href={project.github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                            <a href={project.live} target="_blank" className="text-green-400 hover:underline">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
