import React from 'react';

const App = () => {
  return (
    <div className="font-roboto flex">
      {/* Navbar */}
      <nav className="flex flex-col fixed top-0 left-0 h-full bg-transparent text-white z-10 justify-center p-4">
  {/* <div className="text-3xl font-semibold transform -rotate-90 origin-bottom">Your Logo</div> */}
  <ul className="ms-8 space-y-20  ">
    <li className=" flex flex-row transform -rotate-90 origin-bottom">
      <a href="#home" className="hover:text-blue-500 text-xl">Home</a>
    </li>
    <li className="flex flex-row transform -rotate-90 origin-bottom">
      <a href="#project" className="hover:text-blue-500 transform text-xl">Project</a>
    </li>
    <li className=" flex flex-row transform -rotate-90 origin-bottom flex flex-row">
      <a href="#about" className="hover:text-blue-500 text-xl">About</a>
    </li>
    <li className="flex flex-row transform -rotate-90 origin-bottom  flex flex-row">
      <a href="#contact" className="hover:text-blue-500 transform  text-xl">Contact</a>
    </li>
  </ul>
</nav>





      {/* Content */}
      <div
        className="flex-grow"
        style={{ backgroundImage: 'url("/img/bg.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
      >
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
  <div className="container  p-40 text-left">
    <div>
      <h1 className="text-3xl font-semibold text-white mb-10 font-mono">Muhammad Ihya Ulumuddin</h1>
      <h1 className="text-9xl font-bold text-white mb-8">Software+</h1>
      <h1 className="text-9xl font-bold text-white">Developer</h1>
    </div>
  </div>
</section>


        {/* Project Section */}
        <section id="project" className="min-h-screen">
          <div className="container mx-auto p-6">
            <div className="container mx-auto p-6 border border-white rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-white">Project Section</h1>
              {/* Isi dari bagian Project */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen">
          <div className="container mx-auto p-6">
            <div className="container mx-auto p-6 border border-white rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-white">About Section</h1>
              {/* Isi dari bagian About */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <div className="container mx-auto p-6">
            <div className="container mx-auto p-6 border border-white rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-white">Contact Section</h1>
              {/* Isi dari bagian Contact */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
