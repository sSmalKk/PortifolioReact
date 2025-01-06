import React from "react";
import Object from "../Objects";



const CharacterPage: React.FC = () => {
  return (
    <><canvas
      id="character-model"
      style={{
        width: "100%",
        height: "100%",
        zIndex: 50
      }}
    ></canvas></>
  );
};

export default CharacterPage;
