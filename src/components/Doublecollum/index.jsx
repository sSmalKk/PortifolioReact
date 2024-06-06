import React from "react";
import { Heading } from "..";
import { content } from "../content.jsx"
const languageIndex = localStorage.getItem('languageIndex');

const ProgressBar = ({ percentage }) => {
  return (
    <div className="h-2 bg-blue-500 rounded-md">
      <div
        className="h-full bg-green-500 rounded-md"
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
          <li key={index}>{item}</li>
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
      <div className="flex flex-col flex-1 bg-gray-100 p-4 space-y-4">

        <InfoColumn title="Personal Details" items={[
          `Name: ${content[languageIndex].personalDetails.name}`,
          `Nationality: ${content[languageIndex].personalDetails.nationality}`,
          `Age: ${content[languageIndex].personalDetails.age}`,
          `DOB: ${content[languageIndex].personalDetails.dob}`,
          `Birthplace: ${content[languageIndex].personalDetails.birthPlace}`,
          `Address: ${content[languageIndex].personalDetails.address}`,
          `Phone: ${content[languageIndex].personalDetails.phone.join(", ")}`,
          `Email: ${content[languageIndex].personalDetails.email}`,
          `GitHub: ${content[languageIndex].personalDetails.github}`,
          `Portfolio: ${content[languageIndex].personalDetails.portfolio}`
        ]} />
        <InfoColumn title="Education" items={content[languageIndex].education} />
        <InfoColumn title="Professional Profile" items={content[languageIndex].professionalProfile} />
        <InfoColumn title="Methodologies" items={content[languageIndex].methodologies} />
        <InfoColumn title="Certifications" items={content[languageIndex].certifications} />
      </div>
      <div className="flex flex-col flex-1 bg-gray-200 p-4 space-y-4 mt-4 md:mt-0">

        <SkillsColumn title="Knowledge" skills={content[languageIndex].knowledge} />
        <SkillsColumn title="Programming Languages" skills={content[languageIndex].programmingLanguages} />
        <SkillsColumn title="Databases" skills={content[languageIndex].databases} />
        <SkillsColumn title="Frameworks" skills={content[languageIndex].frameworks} />
        <SkillsColumn title="Tools" skills={content[languageIndex].tools} />
        <SkillsColumn title="Additional Skills" skills={content[languageIndex].additionalSkills} />
      </div>
    </div>
  );
};

export default Doublecollum;
