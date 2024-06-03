// Header.js
import React, { useState, useEffect } from "react";
import { Contact, Contactbar, Text } from "..";
import "./style.css";

export default function Header(props) {
  const { content } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Verifique a posição de scroll no carregamento
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        {...props}
        className={`w-[100%] flex md:flex-col justify-between items-center sticky top-0 z-10 ${isScrolled ? "scrolled-header" : "top-header"
          }`}
      >
        <button
          onClick={() => (window.location.href = "/#about")}
          className="mainbutton h-[36px] min-w-[92px] border border-solid px-[15px] text-xs tracking-[0.50px] text-white-A700"
        >
          <Text
            style={{
              color: isScrolled ? "#000000" : "#007bff",
            }}
            className="text-2xl font-normal tracking-[0.18px] md:text-[22px]"
          >
            {content[0].headerTitle}
          </Text>
        </button>
        <ul className="flex items-center gap-[15px]">
          <button
            onClick={() => (window.location.href = "/#services")}
            style={{ margin: 5 }}
            className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
          >
            <Text style={{
              color: isScrolled ? "#000000" : "#fff",
            }}
              className="text-base font-semibold tracking-[0.50px]">
              {content[0].servicos}
            </Text>
          </button>

          <button
            onClick={() => (window.location.href = "/#projects")}
            className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
          >
            <Text style={{
              color: isScrolled ? "#000000" : "#fff",
            }}
              className="text-base font-normal tracking-[0.50px]">
              {content[0].projetos}
            </Text>
          </button>

          <button
            onClick={() => (window.location.href = "/#about")}
            className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
          >
            <Text style={{
              color: isScrolled ? "#000000" : "#fff",
            }}
              className="text-base font-normal tracking-[0.50px]">
              {content[0].sobre}
            </Text>
          </button>
        </ul>
        <div className="flex justify-between gap-5 md:w-full">
          <Contactbar className={isScrolled ? "contactbutton scrolled" : "contactbutton"} />
          <Contact content={content} />
        </div>
      </header>
    </>
  );
}
