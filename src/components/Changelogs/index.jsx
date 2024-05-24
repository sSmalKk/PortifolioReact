import React from "react";
import "./style.css";

const Changelogs = ({ content }) => {
  return (
    <div className="changelogs-container">
      <h2>{content[0].changelogsText}</h2>
      <div className="changelogs-list">
        <ul>
          {content[0].changelog.map((log, index) => (
            <li key={index}>{log.title}: {log.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Changelogs;
