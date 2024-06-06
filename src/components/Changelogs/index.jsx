import React from "react";
import "./style.css";

const Changelogs = ({languageIndex, content }) => {
  return (
    <div className="changelogs-container">
      <h2>{content[languageIndex].changelogsText}</h2>
      <div className="changelogs-list">
        <ul>
          {content[languageIndex].changelog.map((log, index) => (
            <li key={index}>{log.title}: {log.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Changelogs;
