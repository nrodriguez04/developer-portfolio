import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-4 text-center bg-black text-white border-t border-gray-700">
      <p>&copy; 2025 Nico Rodriguez</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://x.com/nicofrm99" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/nicolasmrodriguez/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nrodriguez04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-xl">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
