import proPic from "../assets/project-4.png";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
      <div className="md:w-1/2 h- w-full">
          <img src={proPic} alt="Project Image" className="w-50 h-auto md:h-[400px] lg:h-[500px] object-cover" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            My Skills
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">My Expertise</h2>
          <p className="mt-8 md:pr-8 mb-8">     
As a B.Tech student in the CSE branch,
my skills encompass a diverse range of technical proficiencies.
My expertise lies in Data Structures and Algorithms,
where I have mastered essential concepts for efficient data organization and problem-solving. I am also proficient in JavaScript, enabling me to build 
interactive and dynamic web applications
            <br /> <br />
            Additionally, I have extensive experience with 
            React.js and Tailwind CSS, allowing me to create responsive and modern user interfaces. 
          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
