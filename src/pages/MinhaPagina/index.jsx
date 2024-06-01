import React, { } from "react";
import { Helmet } from "react-helmet";
import {Parceiros, MeuComponente, PortfolioComponent, OrderComponent } from "../../components";

export default function MinhaPagina() {
  return (
    <>
      <Helmet>
        <title>Portifolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[11px] bg-gray-50">
        {/* header section */}
        <MeuComponente />
        <PortfolioComponent />
        <OrderComponent />
        <Parceiros />
      </div>
    </>
  );
}
