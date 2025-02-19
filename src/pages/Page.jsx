import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page({ title, texts }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="flex w-full flex-col gap-5 bg-gray-50 pt-2.5">
        <Header className="sticky top-0 bg-white shadow-md p-4" />

        <div className="container mx-auto py-10 px-5">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
          <div className="mt-4">
            {texts.map((text, index) => (
              <p key={index} className="text-base text-gray-700 mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>

        <Footer className="bg-white p-4" />
      </div>
    </>
  );
}
