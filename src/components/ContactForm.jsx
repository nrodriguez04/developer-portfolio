"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:nicolasmrodriguez3@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
        setSubmitted(true);
    };

    return (
        <div className="p-8 bg-black text-white min-h-screen flex flex-col items-center">
            {!submitted ? (
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-400">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 h-32" required></textarea>
                    </div>
                    <button type="submit" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all shadow-lg w-full">
                        Send Message
                    </button>
                </form>
            ) : (
                <p className="text-green-400 text-lg">Thank you! Your message has been sent.</p>
            )}
            <div className="mt-6 flex space-x-4">
                <a href="mailto:nicolasmrodriguez3@gmail.com" className="text-gray-400 hover:text-white">Email</a>
                <a href="https://linkedin.com/in/nicolasmrodriguez" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="https://github.com/nrodriguez04" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
        </div>
    );
}
