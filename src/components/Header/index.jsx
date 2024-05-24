import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "..";
import "./style.css";

export default function Header(props) {
  const { content, languages } = props;
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0); // Inicialize selectedLanguageIndex com 0

  useEffect(() => {
    // Check if there's a stored language index in localStorage
    const storedLanguageIndex = localStorage.getItem("selectedLanguageIndex");
    if (storedLanguageIndex && !isNaN(storedLanguageIndex)) { // Verificar se o índice armazenado é válido
      const index = parseInt(storedLanguageIndex);
      if (index >= 0 && index < languages.length) { // Verificar se o índice está dentro dos limites do array de idiomas
        setSelectedLanguageIndex(index);
      }
    } else {
      // Se não houver índice armazenado ou se for inválido, definir o índice padrão como 0
      localStorage.setItem("selectedLanguageIndex", 0);
    }
  }, [languages]);

  const handleLanguageChange = () => {
    const nextIndex = (selectedLanguageIndex + 1) % languages.length; // Calcular o próximo índice
    setSelectedLanguageIndex(nextIndex);
    localStorage.setItem("selectedLanguageIndex", nextIndex); // Armazenar o próximo índice
  };

  const selectedLanguage = languages[selectedLanguageIndex]; // Obter o idioma selecionado com base no índice
  console.log("localStorage content:", localStorage);






  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center sticky bg-white z-10`}>
      <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">
        {content && content.length > 0 && content[0].headerTitle}
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
            {content && content.length > 0 && content[0].projetos}
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
            {languages[localStorage.getItem("selectedLanguageIndex")]}
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
