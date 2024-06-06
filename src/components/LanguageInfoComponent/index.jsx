import React, { useState, useEffect, useRef } from 'react';
import { content } from "../../components/content.jsx";
import { PCInfoComponent } from "../../components";

const LanguageInfoComponent = () => {
    const languages = content.map(item => item.language);

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('languageIndex') ? languages[parseInt(localStorage.getItem('languageIndex'))] : localStorage.getItem('selectedLanguage') || languages[0]);
    const [languageIndex, setLanguageIndex] = useState(parseInt(localStorage.getItem('languageIndex')) || 0);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar se o menu está aberto ou fechado

    const menuRef = useRef();

    useEffect(() => {
        console.log("selectedLanguage:", selectedLanguage);
    }, [selectedLanguage]);

    useEffect(() => {
        console.log("languageIndex:", languageIndex);
    }, [languageIndex]);

    useEffect(() => {
        if (!localStorage.getItem('languageIndex')) {
            setSelectedLanguage(localStorage.getItem('selectedLanguage') || languages[0]);
            setLanguageIndex(languages.indexOf(localStorage.getItem('selectedLanguage')) || 0);
        }
    }, [languages]);

    useEffect(() => {
        // Adiciona um event listener para fechar o menu quando o usuário clicar fora dele
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleLanguageChange = (language, index) => {
        setSelectedLanguage(language);
        setLanguageIndex(index);
        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('languageIndex', index);
        setMenuOpen(false); // Fecha o menu após selecionar um idioma
         window.location.reload();
    };

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    id="options-menu"
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    onClick={() => setMenuOpen(!menuOpen)} // Alterna o estado do menu ao clicar no botão
                >
                    {selectedLanguage}
                </button>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
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
            )}
            <PCInfoComponent />
        </div>
    );
};

export default LanguageInfoComponent;
