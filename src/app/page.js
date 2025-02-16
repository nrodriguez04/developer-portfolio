"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
// import Image from "next/image";
// import avatar from "../public/avatar.jpg"; // Replace with your actual image path


export default function Home() {
    return (
        <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="relative z-10 text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-3">
                    Nico Rodriguez
                </h1>
                <h2 className="text-xl md:text-2xl font-light">
                    <Typewriter
                        options={{
                            strings: [
                                "Blockchain Engineer.",
                                "Fullstack Developer.",
                                "Software Innovator."
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Showcasing blockchain, fullstack, and software development projects that make an impact.
                </p>
                <div className="mt-6 flex space-x-4 justify-center">
                    <Link href="/projects" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all shadow-lg">
                        View My Projects
                    </Link>
                    <Link href="/about" className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-800 text-white font-medium transition-all shadow-lg">
                        Learn About Me
                    </Link>
                </div>
            </div>
        </div>
    );
}