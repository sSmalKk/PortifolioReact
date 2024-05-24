import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "..";
import "./style.css";

export default function Header(props) {
  const { content, languages, selectedId} = props;
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    // Check if there's a stored language in localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && languages.includes(storedLanguage)) {
      setSelectedLanguage(storedLanguage);
    } else {
      // If no stored language or stored language is invalid, set the default language to the first one in the array
      const defaultLanguage = languages[0];
      setSelectedLanguage(defaultLanguage);
      localStorage.setItem("selectedLanguage", defaultLanguage);
    }
  }, [languages]); // Include languages array in dependencies to handle changes
  const handleLanguageChange = () => {
    const currentIndex = languages.indexOf(selectedLanguage);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= languages.length) {
      nextIndex = 0; // Voltar para o início da matriz se estiver além do final
    }
    const nextLanguage = languages[nextIndex];
    setSelectedLanguage(nextLanguage);
    localStorage.setItem("selectedLanguage", nextLanguage);
  };
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center sticky bg-white z-10`}>
      <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">
        {content && content.length > 0 && content[selectedId].headerTitle}
      </Text>
      <ul className="flex items-center gap-[15px]">
        <Button
          onClick={() => window.location.href = '/#services'}
          className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700"
        >
          <Text className="text-base font-semibold tracking-[0.50px]">
            {content && content.length > 0 && content[0].servicos}
          </Text>
        </Button>

        <Button
          onClick={() => window.location.href = '/#projects'}
          className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700"
        >
          <Text className="text-base font-semibold tracking-[0.50px]">
            {content && content.length > 0 && content[selectedId].projetos}
          </Text>
        </Button>


        <Button
          onClick={() => window.location.href = '/#about'}
          className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700"
        >
          <Text className="text-base font-semibold tracking-[0.50px]">
            {content && content.length > 0 && content[0].sobre}
          </Text>
        </Button>


      </ul>
      <div className="flex w-[22%] justify-between gap-5 md:w-full">
        <div className="flex gap-5">
          <Button
            onClick={() => window.location.href = '/#contact'}
            className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
          >
            <Img src="images/img_u_linkedin_alt.svg" />
          </Button>
          <Button
            onClick={() => window.location.href = '/#contact'}
            className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
          >
            <Img src="images/img_volume.svg" />
          </Button>
          <Button
            onClick={() => handleLanguageChange(selectedLanguage === languages[0] ? languages[1] : languages[0])}
            className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
          >
            {localStorage.getItem("selectedLanguage")}
          </Button>
        </div>
        <Button
          onClick={() => window.location.href = '/#contact'}
          className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700"
        >
          {content && content.length > 0 && content[0].personalInfoButton}
        </Button>
      </div>
    </header>
  );
}
