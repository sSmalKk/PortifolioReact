import React from "react";

const skills = [
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Python", level: 65 },
  { name: "UI/UX Design", level: 90 },
];

const tools = [
  { name: "Material-UI", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Figma", level: 90 },
  { name: "Illustrator", level: 85 },
  { name: "Photoshop", level: 80 },
];

const ProgressBar = ({ percentage }) => (
  <div className="h-2 bg-gray-300 rounded-md w-full">
    <div
      className="h-full bg-blue-600 rounded-md"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

const InfoColumn = ({ title, items }) => (
  <div className="flex flex-col bg-gray-100 p-6 space-y-4 rounded-lg shadow-md w-full">
    <h3 className="text-lg font-bold uppercase tracking-wide text-center">{title}</h3>
    <ul className="text-sm sm:text-base text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SkillsColumn = ({ title, skills }) => (
  <div className="flex flex-col bg-gray-100 p-6 space-y-4 rounded-lg shadow-md w-full">
    <h3 className="text-lg font-bold uppercase tracking-wide text-center">{title}</h3>
    {skills.map((skill, index) => (
      <div key={index} className="flex items-center space-x-4">
        <span className="w-1/3 text-sm text-gray-700">{skill.name}</span>
        <div className="w-2/3">
          <ProgressBar percentage={skill.level} />
        </div>
      </div>
    ))}
  </div>
);

const DoubleColumn = () => {
  return (
    <div className="spacing-section w-full px-4 sm:px-6 md:px-12 flex flex-col items-center space-y-6">
      {/* Personal Information */}
      <InfoColumn title="Personal Details" items={[
        "Name: Gustavo Dantas Guimarães",
        "Nationality: Brazilian",
        "Age: 26 years (21/12/1998)",
        "Location: Uberlândia - MG, Brazil",
        "Phone: +55 (61) 9.8159-4849 / +55 (61) 9.8195-5443",
        "Email: dantaswebdesign77@gmail.com",
        "GitHub: github.com/sSmalKk",
        "Portfolio: dantastec.netlify.app",
      ]} />
      
      {/* Education */}
      <InfoColumn title="Education" items={[
        "Systems Analysis and Development - TADS",
        "Computer Technician - CEPAG",
      ]} />
      
      {/* Professional Experience */}
      <InfoColumn title="Professional Experience" items={[
        "Freelancer - 2019/2025",
        "App Design - Minerva Intermediações",
        "Technical Support - Pedido Lógico",
      ]} />

      {/* Technical Skills */}
      <SkillsColumn title="Technical Skills" skills={skills} />

      {/* Tools & Design */}
      <SkillsColumn title="Tools & Design" skills={tools} />
    </div>
  );
};

export default DoubleColumn;
