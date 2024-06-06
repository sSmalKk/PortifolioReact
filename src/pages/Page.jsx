import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { content } from "../components/content.jsx"
const languageIndex = localStorage.getItem('languageIndex');

export default function Page({ title, texts }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="flex  w-full flex-col gap-5 bg-gray-50 pt-2.5">
        <div className="flex flex-col items-center">
          {/* header section */}
          <Header content={content} languageIndex={languageIndex} className="header sticky container-xs gap-5 px-7 md:p-5 sm:px-5" style={{ position: 'fixed', padding: '5px' }} />

          {/* hero section */}
          <div className="container-xs flex flex-col items-center py-10 px-5 gap-5">
            <Heading size="lg" className="text-center">
              {title}
            </Heading>
            <div className="text-left">
              {texts.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer content={content} languageIndex={languageIndex}/>
      </div>
    </>
  );
}
