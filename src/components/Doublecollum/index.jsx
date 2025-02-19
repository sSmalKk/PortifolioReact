import React from "react";
import { Heading } from "..";
import { content } from "../content.jsx";
const languageindex = localStorage.getItem('languageindex') || 0;

const ProgressBar = ({ percentage }) => {
  return (
    <div className="h-2 bg-blue-400 rounded-md"> {/* Altera a cor principal da barra de progresso para azul */}
      <div
        className="h-full bg-blue-600 rounded-md"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const InfoColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 p-4 space-y-4">
      <Heading as="h3" className="!font-bold uppercase tracking-[2.70px] text-center">
        {title}
      </Heading>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mt-2">{item}</li> 
        ))}
      </ul>
    </div>
  );
};


const SkillsColumn = ({ title, skills }) => {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 p-4 space-y-4">
      <Heading as="h3" className="!font-bold uppercase tracking-[2.70px] text-center">
        {title}
      </Heading>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-1/3">{skill}</div>
          <div className="w-2/3">
            <ProgressBar percentage={60} /> {/* Adjust percentage based on skill level */}
          </div>
        </div>
      ))}
    </div>
  );
};

const Doublecollum = () => {
  return (
    <div className="flex flex-colu md:flex-col md:space-x-4 px-4 md:px-5 my-8">
      <div className="flex flex-col flex-1 bg-gray-200 p-4 space-y-4 mt-4 md:mt-0">
 
        <InfoColumn title="Personal Details" items={[
          `Name: ${content[languageindex].personalDetails.name}`,
          `Nationality: ${content[languageindex].personalDetails.nationality}`,
          `Age: ${content[languageindex].personalDetails.age}`,
          `DOB: ${content[languageindex].personalDetails.dob}`,
          `Birthplace: ${content[languageindex].personalDetails.birthPlace}`,
          `Address: ${content[languageindex].personalDetails.address}`,
          `Phone: ${content[languageindex].personalDetails.phone.join(", ")}`,
          `Email: ${content[languageindex].personalDetails.email}`,
          `GitHub: ${content[languageindex].personalDetails.github}`,
          `Portfolio: ${content[languageindex].personalDetails.portfolio}`
        ]} />
        <InfoColumn title="Education" items={content[languageindex].education} />
        <InfoColumn title="Professional Profile" items={content[languageindex].professionalProfile} />
        <InfoColumn title="Methodologies" items={content[languageindex].methodologies} />
        <InfoColumn title="Certifications" items={content[languageindex].certifications} />
      </div>
      <div className="flex flex-col flex-1 bg-gray-200 p-4 space-y-4 mt-4 md:mt-0">

        <SkillsColumn title="Knowledge" skills={content[languageindex].knowledge} />
        <SkillsColumn title="Programming Languages" skills={content[languageindex].programmingLanguages} />
        <SkillsColumn title="Databases" skills={content[languageindex].databases} />
        <SkillsColumn title="Frameworks" skills={content[languageindex].frameworks} />
        <SkillsColumn title="Tools" skills={content[languageindex].tools} />
        <SkillsColumn title="Additional Skills" skills={content[languageindex].additionalSkills} />
      </div>
    </div>
  );
};

export default Doublecollum;
