import { useState, useEffect } from 'react';
import { content } from "../../components/content.jsx";
import { PCInfoComponent } from "../../components";

const LanguageInfoComponent = () => {
    // Extrair a lista de idiomas da array de conteúdo
    const languages = content.map(item => item.language);

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || languages[1]); // Estado para controlar o idioma selecionado

    // Função para alternar entre os idiomas
    const toggleLanguage = () => {
        const currentIndex = languages.indexOf(selectedLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        setSelectedLanguage(languages[nextIndex]);
    };

    // Efeito para atualizar o idioma no localStorage sempre que o idioma selecionado mudar
    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    // Lógica para definir o idioma padrão se o idioma selecionado não estiver disponível nos conteúdos
    useEffect(() => {
        const contentLanguage = content.find(item => item.language === selectedLanguage);
        if (!contentLanguage) {
            setSelectedLanguage(languages[0]);
        }
    }, [languages, selectedLanguage]);

    const handleInfoChange = () => {
        setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    };

    return (
        <div>
            <button
                onClick={toggleLanguage} // Ao clicar, alterna para o próximo idioma
                className="contactbutton-white h-[36px] rounded-[18px] px-2.5"
            >
                {selectedLanguage}
            </button>
            <PCInfoComponent onInfoChange={handleInfoChange} />
        </div>
    );
};

export default LanguageInfoComponent;
