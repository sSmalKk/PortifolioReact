import React from "react";
import { Heading } from "..";
import { content } from "../content.jsx"

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
        `Name: ${content[0].personalDetails.name}`,
        `Nationality: ${content[0].personalDetails.nationality}`,
        `Age: ${content[0].personalDetails.age}`,
        `DOB: ${content[0].personalDetails.dob}`,
        `Birthplace: ${content[0].personalDetails.birthPlace}`,
        `Address: ${content[0].personalDetails.address}`,
        `Phone: ${content[0].personalDetails.phone.join(", ")}`,
        `Email: ${content[0].personalDetails.email}`,
        `GitHub: ${content[0].personalDetails.github}`,
        `Portfolio: ${content[0].personalDetails.portfolio}`
      ]} />
      <InfoColumn title="Education" items={content[0].education} />
      <InfoColumn title="Professional Profile" items={content[0].professionalProfile} />
      <InfoColumn title="Methodologies" items={content[0].methodologies} />
      <InfoColumn title="Certifications" items={content[0].certifications} />
                  </div>
                  <div className="flex flex-col flex-1 bg-gray-200 p-4 space-y-4 mt-4 md:mt-0">
                    
                    <SkillsColumn title="Knowledge" skills={content[0].knowledge} />
      <SkillsColumn title="Programming Languages" skills={content[0].programmingLanguages} />
      <SkillsColumn title="Databases" skills={content[0].databases} />
      <SkillsColumn title="Frameworks" skills={content[0].frameworks} />
      <SkillsColumn title="Tools" skills={content[0].tools} />
      <SkillsColumn title="Additional Skills" skills={content[0].additionalSkills} />
                  </div>
    </div>
  );
};

export default Doublecollum;
