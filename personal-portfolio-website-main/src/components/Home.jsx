import project from '../assets/project-4.png';

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 h- w-full">
          <img src={project} alt="Project Image" className="w-50 h-auto md:h-[400px] lg:h-[500px] object-cover" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-sm text-headingcolor font-semibold mb-5">Hey, I am Saurabh Tiwari</p>
          <h1 className="md:text-4xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-5">
            A <span className="text-primary">Computer Science & Engineering</span> Student with a Passion for Technology
          </h1>
          <p className="text-md text-body leading-9 mb-8">
            As a dedicated B.Tech CSE student, I am deeply committed to mastering core programming concepts, data structures, and algorithms. My academic journey is complemented by hands-on experience through internships and projects, where I apply theoretical knowledge to real-world challenges. I strive to continually improve my skills and stay updated with the latest advancements in technology to build a strong foundation for a successful career in the tech industry.
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
        {/* right side */}
      </div>
    </div>
  );
};

export default Home;
