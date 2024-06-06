import React, { useState, useEffect } from 'react';
import { content } from "../../components/content.jsx";
import { PCInfoComponent } from "../../components";

const LanguageInfoComponent = () => {
    // Extrair a lista de idiomas da array de conteúdo
    const languages = content.map(item => item.language);

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('languageIndex') ? languages[parseInt(localStorage.getItem('languageIndex'))] : localStorage.getItem('selectedLanguage') || languages[0]); // Estado para controlar o idioma selecionado
    const [languageIndex, setLanguageIndex] = useState(parseInt(localStorage.getItem('languageIndex')) || 0); // Estado para controlar o índice do idioma selecionado

    useEffect(() => {
        console.log("selectedLanguage:", selectedLanguage);
    }, [selectedLanguage]);

    useEffect(() => {
        console.log("languageIndex:", languageIndex);
    }, [languageIndex]);

    // Função para definir o idioma selecionado e recarregar a página
    const handleLanguageChange = (language, index) => {
        setSelectedLanguage(language);
        setLanguageIndex(index);
        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('languageIndex', index);
        window.location.reload(); // Recarrega a página
    };

    // Selecionar o idioma padrão se o índice não estiver definido
    useEffect(() => {
        if (!localStorage.getItem('languageIndex')) {
            setSelectedLanguage(localStorage.getItem('selectedLanguage') || languages[0]);
            setLanguageIndex(languages.indexOf(localStorage.getItem('selectedLanguage')) || 0);
        }
    }, [languages]);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    {selectedLanguage}
                </button>
            </div>

            {/* Dropdown Menu */}
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {languages.map((language, index) => (
                    <button
                        key={language}
                        onClick={() => handleLanguageChange(language, index)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                    >
                        {language}
                    </button>
                ))}
            </div>
            <PCInfoComponent />
        </div>
    );
};

export default LanguageInfoComponent;
