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
        {/* ... (kode lainnya) */}
        <ul className=" ms-4 space-y-14 sm:space-y-14 md:space-y-20 ">
          
        <li className="flex flex-row transform -rotate-90 origin-bottom">
          <a
            href="#home"
            onClick={handleHomeClick}
            className={`text-xl ${
              isHomeClicked ? 'text-red-500' : 'hover:text-blue-500'
            }`}
          >
            Home
          </a>
        </li>

        <li className="flex flex-row transform -rotate-90 origin-bottom">
          <a
            href="#project"
            onClick={handleProjectClick}
            className={`text-xl ${
              isProjectClicked ? 'text-red-500' : 'hover:text-blue-500'
            }`}
          >
            Project
          </a>
        </li>

        <li className="flex flex-row transform -rotate-90 origin-bottom">
          <a
            href="#exp"
            onClick={handleExpClick}
            className={`text-xl ${
              isExpClicked ? 'text-red-500' : 'hover:text-blue-500'
            }`}>
            Exp
          </a>
        </li>

        <li className="flex flex-row transform -rotate-90 origin-bottom">
          <a
            href="#about"
            onClick={handleAboutClick}
            className={`text-xl ${
              isAboutClicked ? 'text-red-500' : 'hover:text-blue-500'
            }`}
          >
            About
          </a>
        </li>

        <li className="flex flex-row transform -rotate-90 origin-bottom">
          <a
            href="#contact"
            onClick={handleContactClick}
            className={`text-xl ${
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
      <div
        className="flex-grow "
        style={{ backgroundImage: 'url("/read-me/img/bgss.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center mx-auto">
  <div className="container-about mx-auto flex flex-col md:flex-row text-left">
    <div>
      
      <p className="text-3xl font-semibold text-white mb-14 font-mono">M. Ihya Ulumuddin</p>
      <h1 className="text-9xl font-semibold text-white mb-14">Software+</h1>
      <h1 className="text-9xl font-semibold text-white">Developer</h1>
    </div>
  </div>
</section>


        {/* Project Section */}
        <section id="project" className="min-h-screen flex items-center mx-auto mb-5">
          <div className="container-about mx-auto text-left">
            <div className="container-about mx-auto p-6 border border-white rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-white">Project Section</h1>
              {/* Isi dari bagian Project */}
            </div>
          </div>
        </section>

          {/* Project Section */}
          <section id="exp" className="min-h-screen flex items-center mx-auto">
          <div className="container-about mx-auto flex flex-col md:flex-row text-center">
    <img
      src="./img/bg.jpg"
      alt="Foto Anda"
      className="w-full md:w-1/3 rounded-xl mx-auto mb-8 md:mb-0 me-5"
    />
    <div className="md:w-1/2   text-center p-6 border border-white rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold font-mono text-white mb-3">Achievements</h1>
      <ul className="text-2xl text-white custom-tracking">
        <li>- 8 Times Got First Rank in Elementary School </li>
        <li>- Top 8 Student In Middle School </li>
        <li>- Runner-Up Of Genshin Impact Tournament </li>
        <li>- Design Winner in Classmeeting </li>
        <li>- Futsal Runner Up in Classmeeting </li>
        <li>- Futsal Runner Up in Classmeeting </li>
        
      </ul>
    </div>
  </div>
        </section>




 {/* About Section */}
 <section id="about" className="min-h-screen flex items-center justify-center">
  <div className="container-about mx-auto flex flex-col md:flex-row text-center">
    <img
      src="./img/ihya2.jpg"
      alt="Foto Anda"
      className="w-full md:w-1/3 rounded-xl mx-auto mb-8 md:mb-0 me-5"
    />
    <div className="md:w-1/2 mx-auto ps-1 text-left">
      <h1 className="text-5xl font-semibold font-mono text-white mb-3">Hello there!</h1>
      <p className="text-2xl text-white custom-tracking">
        Your First Imperations : "Wow, this kid's a huge Otaku! 😄 I'm Muhammad Ihya Ulumuddin, a Software Developer. I craft digital experiences and stay updated on tech trends. When not coding, I explore anime, manga, and gaming. Technology fuels my creativity, and I love innovative projects. Connect with me for tech talks, anime suggestions, or creative collaborations. Let's make the digital world more exciting! 😄🚀🎮"
      </p>
    </div>
  </div>
</section>





        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="container-about mx-auto flex flex-col md:flex-row text-center">
            <div className="container mx-auto p-6 border border-white rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-white">Contact Section</h1>
              {/* Isi dari bagian Contact */}
            </div>
          </div>
        </section>

        <div className="fixed sosmed top-5 right-10 p-4">
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
