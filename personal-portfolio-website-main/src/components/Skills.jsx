
const skills = [
  {
    id: 1,
    name: "Data Structure and Algorithm",
    description:
      "Mastering essential concepts for efficient data organization and problem-solving.",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg",
  },
  {
    id: 2,
    name: "JavaScript",
    description:
      "Building interactive and dynamic web applications with modern JavaScript.",
    image: "https://static.javatpoint.com/images/javascript/javascript_logo.png",
  },
  {
    id: 3,
    name: "React.js and Tailwind CSS",
    description:
      "Creating responsive and modern UIs with React and Tailwind CSS.",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*SVakq4ra_rdsYkPQ6nvAHA.jpeg",
  },
  {
    id: 4,
    name: "Web Development",
    description:
      "Developing robust and scalable web applications with full-stack technologies.",
    image: "https://wayspire.in/wp-content/uploads/2022/11/web-development.jpg",
  },
];
const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">My Expertise</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
