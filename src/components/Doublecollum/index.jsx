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
  <div className="flex flex-col flex-1 bg-gray-100 p-6 space-y-4 rounded-lg">
    <h3 className="text-lg font-bold uppercase tracking-wide text-center">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

const SkillsColumn = ({ title, skills }) => (
  <div className="flex flex-col flex-1 bg-gray-100 p-6 space-y-4 rounded-lg">
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
    <div className="spacing-section w-full">
      <div className="flex flex-col md:flex-row md:space-x-6 px-6 md:px-12 my-8 w-full">
        {/* Coluna Informações */}
        <div className="flex flex-col flex-1 bg-gray-200 p-6 rounded-lg">
          <InfoColumn title="Detalhes Pessoais" items={[
            "Nome: Gustavo Dantas Guimarães",
            "Nacionalidade: Brasileiro",
            "Idade: 26 anos (21/12/1998)",
            "Localização: Uberlândia - MG",
            "Telefone: (61) 9.8159-4849 / (61) 9.8195-5443",
            "E-mail: dantaswebdesign77@gmail.com",
            "GitHub: github.com/sSmalKk",
            "Portfolio: dantastec.netlify.app",
          ]} />
          <InfoColumn title="Educação" items={[
            "Análise e Desenvolvimento de Sistemas - TADS",
            "Técnico em Computação - CEPAG",
          ]} />
          <InfoColumn title="Experiência Profissional" items={[
            "Freelancer - 2019/2025",
            "Design de Apps - Minerva Intermediações",
            "Suporte Técnico - Pedido Lógico",
          ]} />
        </div>

        {/* Coluna Habilidades */}
        <div className="flex flex-col flex-1 bg-gray-200 p-6 space-y-6 rounded-lg">
          <SkillsColumn title="Habilidades Técnicas" skills={skills} />
          <SkillsColumn title="Ferramentas e Design" skills={tools} />
        </div>
      </div>
    </div>
  );
};

export default DoubleColumn;
