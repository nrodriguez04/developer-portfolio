export default function Projects() {
  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-8">Projects: </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Memecoin Trading Bot */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold mb-2">Memecoin Trading Bot</h2>
          <p className="text-gray-400">A trading bot that interacts with crypto exchanges using real-time data.</p>
        </div>
        
        {/* On-Chain Streaming Platform */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold mb-2">On-Chain Streaming Platform (Coined.live)</h2>
          <p className="text-gray-400">A decentralized content platform for streaming and payments on Solana.</p>
        </div>
        
        {/* DeepSeek API AI Wrapper */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold mb-2">DeepSeek API AI Wrapper</h2>
          <p className="text-gray-400">An AI-powered wrapper for DeepSeek API, enabling smarter integrations.</p>
        </div>
        
        {/* Frontend Development Project (Koral Digital) */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold mb-2">Frontend Development Project (Koral Digital)</h2>
          <p className="text-gray-400">A modern and responsive frontend project showcasing Koral Digital&#39;s capabilities.</p>
        </div>
        
        {/* Fullstack Application */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold mb-2">Fullstack Application</h2>
          <p className="text-gray-400">A fullstack web application demonstrating end-to-end development skills.</p>
        </div>
      </div>
    </div>
  );
}