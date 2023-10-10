import React, { Component, useState } from 'react';

const App = () => {
  const [isHomeClicked, setHomeClicked] = useState(false);
  const [isProjectClicked, setProjectClicked] = useState(false);
  const [isExpClicked, setExpClicked] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [isContactClicked, setContactClicked] = useState(false);

  const handleHomeClick = () => {
    setHomeClicked(true);
    setProjectClicked(false);
    setExpClicked(false);
    setAboutClicked(false);
    setContactClicked(false);
  };

  const handleProjectClick = () => {
    setHomeClicked(false);
    setProjectClicked(true);
    setExpClicked(false);
    setAboutClicked(false);
    setContactClicked(false);
  };
  // <ul className=" ms-4 space-y-14 sm:space-y-14 md:space-y-20 "></ul>

  const handleExpClick = () => {
    setHomeClicked(false);
    setProjectClicked(false);
    setExpClicked(true);
    setAboutClicked(false);
    setContactClicked(false);
  };

  const handleAboutClick = () => {
    setHomeClicked(false);
    setProjectClicked(false);
    setExpClicked(false);
    setAboutClicked(true);
    setContactClicked(false);
  };

  const handleContactClick = () => {
    setHomeClicked(false);
    setProjectClicked(false);
    setExpClicked(false);
    setAboutClicked(false);
    setContactClicked(true);
  };

  
  return (
    <div className="fontFamily: 'Araboto Medium, sans-serif' flex">
      {/* Navbar */}
      <nav className="flex flex-col fixed top-0 left-0 h-full bg-transparent text-white mt-20 ps-1">
  <ul className="ms-4 space-y-14 sm:space-y-14 md:space-y-14">
    <li className="flex flex-row transform -rotate-90 origin-bottom mb-4 justify-center">
      <a
        href="#home"
        onClick={handleHomeClick}
        className={`text-base sm:text-lg ${
          isHomeClicked ? 'text-red-500' : 'hover:text-blue-500'
        }`}>
        Home
      </a>
    </li>

    <li className="flex flex-row transform -rotate-90 origin-bottom mb-4 justify-center">
      <a
        href="#project"
        onClick={handleProjectClick}
        className={`text-base sm:text-lg ${
          isProjectClicked ? 'text-red-500' : 'hover:text-blue-500'
        }`}
      >
        Project
      </a>
    </li>

    <li className="flex flex-row transform -rotate-90 origin-bottom mb-4 justify-center">
      <a
        href="#exp"
        onClick={handleExpClick}
        className={`text-base sm:text-lg ${
          isExpClicked ? 'text-red-500' : 'hover:text-blue-500'
        }`}
      >
        Exp
      </a>
    </li>

    <li className="flex flex-row transform -rotate-90 origin-bottom mb-4 justify-center">
      <a
        href="#about"
        onClick={handleAboutClick}
        className={`text-base sm:text-lg ${
          isAboutClicked ? 'text-red-500' : 'hover:text-blue-500'
        }`}
      >
        About
      </a>
    </li>

    <li className="flex flex-row transform -rotate-90 origin-bottom mb-4 justify-center">
      <a
        href="#contact"
        onClick={handleContactClick}
        className={`text-base sm:text-lg ${
          isContactClicked ? 'text-red-500' : 'hover:text-blue-500'
        }`}
      >
        Contact
      </a>
    </li>
  </ul>
  {/* ... (kode lainnya) */}
</nav>

      {/* Content */}
      <div className="flex-grow bg-cover bg-fixed bg-no-repeat px-20 "
         style={{ backgroundImage: 'url("/read-me/img/bgss.jpg")' }}>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center mx-auto ">
      <div className="container mx-auto flex flex-col md:text-center lg:text-center">
        <div>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4 font-mono">
  M. Ihya Ulumuddin
</p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl xl:text-10xl font-semibold text-white mb-4">
            Software+
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl xl:text-10xl font-semibold text-white">
            Developer
          </h1>
        </div>
      </div>
    </section>


        {/* Project Section */}
        <section id="project" className="min-h-screen flex items-center mx-auto mb-5">
      {/* Achievement */}
      <div className="container mx-auto text-center md:text-left">
        <div className="container mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-mono mb-4">
            Project Section
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-mono">
            Coming Soon
          </h1>
          {/* Isi dari bagian Project */}
        </div>
      </div>
    </section>





    <section id="exp" className="min-h-screen flex items-center justify-center">
  <div className='container mx-auto row'>

    {/* Achievements */}
    <div className="container-about mx-auto flex flex-col md:flex-row text-center mb-20">
      <img
        src="./img/bg.jpg"
        alt="Foto Anda"
        className="w-full md:w-1/2 lg:w-1/3 rounded-xl mx-auto mb-8 md:mb-0 md:me-5"
      />
      <div className="w-full md:w-1/2 lg:w-2/3 mx-auto ps-1 text-left md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-mono text-white mb-4 md:mb-6">Achievements</h1>
        <ul className="text-lg md:text-base text-white custom-tracking space-y-2 sm:space-y-4 md:space-y-4 list-disc">
          <li className="text-base md:text-lg lg:text-base"> 8 Times Got First Rank in Elementary School</li>
          <li className="text-base md:text-lg lg:text-base"> Top 8 Student In Middle School</li>
          <li className="text-base md:text-lg lg:text-base"> Runner-Up Of Genshin Impact Tournament</li>
          <li className="text-base md:text-lg lg:text-base"> Design Winner in Class Meeting</li>
          <li className="text-base md:text-lg lg:text-base"> Futsal Runner Up in Class Meeting</li>
          <li className="text-base md:text-lg lg:text-base"> Band Winner in Class Meeting</li>
        </ul>
      </div>
    </div>

    {/* Experience */}
    <div className="container-about mx-auto flex flex-col md:flex-row text-center">
      <img
        src="./img/bg.jpg"
        alt="Foto Anda"
        className="w-full md:w-1/2 lg:w-1/3 rounded-xl mx-auto mb-8 md:mb-0 md:me-5"
      />

      <div className="w-full md:w-1/2 lg:w-2/3 mx-auto ps-1 text-left md:text-left " >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-mono text-white mb-4 md:mb-6">Experience</h1>
        <ul className="text-lg md:text-base text-white custom-tracking space-y-3 sm:space-y-4 md:space-y-4 list-disc">
          <li className="text-base md:text-lg lg:text-base"> 8 Times Got First Rank in Elementary School</li>
          <li className="text-base md:text-lg lg:text-base"> Top 8 Student In Middle School</li>
          <li className="text-base md:text-lg lg:text-base"> Runner-Up Of Genshin Impact Tournament</li>
          <li className="text-base md:text-lg lg:text-base"> Design Winner in Class Meeting</li>
          <li className="text-base md:text-lg lg:text-base"> Futsal Runner Up in Class Meeting</li>
          <li className="text-base md:text-lg lg:text-base"> Band Winner in Class Meeting</li>
        </ul>
      </div>
    </div>

  </div>
</section>




 {/* About Section */}
 <section id="about" className="min-h-screen flex items-center justify-center">
 <div className='container mx-auto row'>
      <div className="container-about mx-auto flex flex-col md:flex-row text-center">
        <img
          src="./img/ihya2.jpg"
          alt="Foto Anda"
          className="w-full md:w-1/2 rounded-xl mx-auto mb-8 md:mb-0 me-5"
        />
        <div className="md:w-1/2 mx-auto text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-mono text-white mb-3">
            Hello there!
          </h1>
          <p className="text-base md:text-lg lg:text-base text-white">
            Your First Impressions: "Wow, this kid's a huge Otaku! 😄 I'm Muhammad Ihya Ulumuddin, a Software Developer. I craft digital experiences and stay updated on tech trends. When not coding, I explore anime, manga, and gaming. Technology fuels my creativity, and I love innovative projects. Connect with me for tech talks, anime suggestions, or creative collaborations. Let's make the digital world more exciting! 😄🚀🎮"
          </p>
        </div>
      </div>
      </div>
    </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center mx-auto mb-5">
  {/* Achievement */}
  <div className="container mx-auto text-left">
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-white mb-3 font-mono">Contact Section</h1>
      <h1 className="text-3xl font-semibold text-white font-mono">Coming Soon</h1>
      {/* Isi dari bagian Project */}
    </div>
  </div>
</section>


        <div className="fixed sosmed top-1 right-1 p-4">
  <div className="flex flex-col gap-4">
    {/* Icon Media Sosial Pertama */}
    <a
      href="mailto:ihyaulumuddin217@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white bg-opacity-10 p-2 hover:bg-opacity-20 transition duration-300 transform hover:scale-110 relative"
    >
      <img
        src="./img/google.png"
        alt="Gmail"
        className="w-5 h-5"
      />
      <span className="absolute -top-7 left-0 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded-full opacity-0 transform scale-0 transition-transform hover:opacity-100 hover:scale-100">
        Gmail
      </span>
    </a>

    {/* Icon Media Sosial Kedua */}
    <a
      href="https://instagram.com/ihya_ddin?igshid=OGQ5ZDc2ODk2ZA=="
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white bg-opacity-10 p-2 hover:bg-opacity-20 transition duration-300 transform hover:scale-110 relative"
    >
      <img
        src="./img/ig.png"
        alt="Instagram"
        className="w-5 h-5"
      />
      <span className="absolute -top-7 left-0 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded-full opacity-0 transform scale-0 transition-transform hover:opacity-100 hover:scale-100">
        Instagram
      </span>
    </a>

    {/* Tambahkan lebih banyak ikon media sosial di sini */}
  </div>
</div>
        
      </div>
      
    </div>
  );
  
}

export default App;
