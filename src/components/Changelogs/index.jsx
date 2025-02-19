import React from "react";
import "./style.css";

const Changelogs = ({languageindex, content }) => {
  return (
    <div className="changelogs-container">
      <h2>{content[languageindex].changelogsText}</h2>
      <div className="changelogs-list">
        <ul>
          {content[languageindex].changelog.map((log, index) => (
            <li key={index}>{log.title}: {log.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Changelogs;
