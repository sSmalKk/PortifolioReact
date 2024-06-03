import React from "react";
import { Heading } from "..";
import { info } from "../content.jsx"

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
        `Name: ${info.personalDetails.name}`,
        `Nationality: ${info.personalDetails.nationality}`,
        `Age: ${info.personalDetails.age}`,
        `DOB: ${info.personalDetails.dob}`,
        `Birthplace: ${info.personalDetails.birthPlace}`,
        `Address: ${info.personalDetails.address}`,
        `Phone: ${info.personalDetails.phone.join(", ")}`,
        `Email: ${info.personalDetails.email}`,
        `GitHub: ${info.personalDetails.github}`,
        `Portfolio: ${info.personalDetails.portfolio}`
      ]} />
      <InfoColumn title="Education" items={info.education} />
      <InfoColumn title="Professional Profile" items={info.professionalProfile} />
      <InfoColumn title="Methodologies" items={info.methodologies} />
      <InfoColumn title="Certifications" items={info.certifications} />
                  </div>
                  <div className="flex flex-col flex-1 bg-gray-200 p-4 space-y-4 mt-4 md:mt-0">
                    
                    <SkillsColumn title="Knowledge" skills={info.knowledge} />
      <SkillsColumn title="Programming Languages" skills={info.programmingLanguages} />
      <SkillsColumn title="Databases" skills={info.databases} />
      <SkillsColumn title="Frameworks" skills={info.frameworks} />
      <SkillsColumn title="Tools" skills={info.tools} />
      <SkillsColumn title="Additional Skills" skills={info.additionalSkills} />
                  </div>
    </div>
  );
};

export default Doublecollum;
