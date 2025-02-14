export default function About() {
  return (
    <div className="p-8 bg-black text-white min-h-screen flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">About Me</h1>
      
      <p className="text-lg max-w-3xl leading-relaxed">
        I am a **passionate software developer, entrepreneur, and blockchain enthusiast** with a deep focus on fullstack development, AI, and decentralized technologies. With a track record of building **scalable applications** and launching **real-world tech projects**, my mission is to create innovative products that **push boundaries** and **solve real-world problems**.
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Experience */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Software & Blockchain Development</h2>
          <p className="text-gray-400 mt-2">I specialize in **fullstack engineering**, **blockchain solutions**, and **AI-driven applications**, developing products that improve efficiency and scalability.</p>
        </div>
        
        {/* Entrepreneurship */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Entrepreneurial Hustle</h2>
          <p className="text-gray-400 mt-2">Founder of **Koral Digital**, a digital marketing and automation agency, and actively building **Coined.live**, an on-chain streaming platform.</p>
        </div>
        
        {/* Goals */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Vision & Goals</h2>
          <p className="text-gray-400 mt-2">My long-term goal is to **scale impactful businesses**, develop **disruptive tech**, and achieve **financial freedom through tech and real estate**.</p>
        </div>
        
        {/* Beyond Code */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Beyond Code</h2>
          <p className="text-gray-400 mt-2">Outside of tech, I am focused on **fitness, real estate investing, and content creation**. I believe in the power of **networking, hustle, and continuous growth**.</p>
        </div>
      </div>
    </div>
  );
}