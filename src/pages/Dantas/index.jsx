import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { MeuComponente, BlogModel, PopupManager, PartnerSlider, ServicesComponent, Text, Img, Heading, ServiceItem } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import { services, Portfolio, parceiros, Blog, content } from "../../components/content.jsx"
const bdurl = 'https://0e27ec-kend-sandbox.dhiwise.co/swagger/';



const animationDelay = 1; // Altere para o valor desejado

export default function DantasPage() {
  // Referências para as seções
  const servicesRef = useRef(null);
  const personalInfoRef = useRef(null);
  const portfolioRef = useRef(null);
  const partnersRef = useRef(null);
  const topRef = useRef(null);


  return (
    <>
      <Helmet>
        <title>Dantas Soluções</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Header content={content} style={{ position: 'fixed', padding: '5px' }} />

      <div class="flex w-full flex-col gap-5 bg-gray-50 ">
    <div class="main-content flex flex-col items-center">
        <div class="popup-wrapper" >
            <PopupManager url={bdurl} content={content} />
        </div>
    </div>
</div>

      <div className="container-xs px-4 md:px-5" ref={topRef}>
        <div className="flex flex-col">
          <div className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-evenly md:flex-col ">
              <div className="flex w-full flex-col items-center">
                <div className="flex self-start bg-indigo-A700 p-2">
                  <Text
                    size="8xl"
                    as="p"
                    className="tracking-[1.50px] !text-white text-responsive"
                  >
                    {content[0].headerTitle}
                  </Text>
                </div>
                <Text
                  size="5xl"
                  as="p"
                  className="w-[87%] leading-[56px] text-responsive mt-4"
                >
                  {content[0].headerSubtitle}
                </Text>
              </div>
              <div className="flex w-full flex-col items-center gap-8 mt-8">
                <Img
                  src="images/img_container_380x410.png"
                  alt="container"
                  className="h-[380px] w-full object-cover md:h-[200px] md:w-auto"
                />
            <Heading as="h3" className="!font-bold uppercase tracking-[2.70px]">
                  {content[0].solucoes}
                </Heading>
              </div>
            </div>
          </div>

          <div id="services" ref={servicesRef}>
            {/* services bar */}
            <div className="my-8 flex items-center justify-around gap-5 overflow-auto border-b border-t border-solid border-gray-300 py-[13px] md:flex-col">
              {services.map((service, index) => (
                <ServiceItem service={service} index={index} animationDelay={animationDelay} />
              ))}
              <div className="w-full border-t border-gray-300"></div>
            </div>

            {/* services section */}
            <ServicesComponent services={services} />
          </div>

          {/* personal info section */}
          <div className="flex flex-row items-center md:flex-col md:max-w-screen-xl md:mx-auto my-8" ref={personalInfoRef}>
            <div className="h-screen md:h-auto md:relative md:w-full md:max-w-[379px]">
              <img src={content[0].personalimage} alt="container" className="w-[379px] h-full object-cover md:static md:w-auto md:h-auto md:transform-none md:max-h-screen" />
            </div>
            <div className="flex flex-col justify-start md:justify-center items-start md:items-center md:pl-10 md:pr-10 md:w-full mt-8 md:mt-0">
              <div>
                <p className="text-lg tracking-[0.50px] md:text-base">{content[0].personalInfoTitle}</p>
                <p className="text-8xl mt-2 tracking-[-1.50px] md:text-4xl">{content[0].headerTitle}</p>
                <p className="text-6xl w-[81%] leading-[56px] md:text-base md:w-full">{content[0].personalInfoSubtitle}</p>
              </div>
              <button className="bg-green-700 text-white px-4 py-2 rounded-full border border-solid border-green-400 tracking-[0.50px] md:text-sm self-end mt-4 md:mt-0">
                {content[0].personalInfoButton}
              </button>
            </div>
          </div>

          {/* portfolio section */}
          <div className="flex flex-col items-center px-4 md:px-5 my-8" ref={portfolioRef}>
            <Heading as="h3" className="!font-bold uppercase tracking-[2.70px]">
              {content[0].portfolioTitle}
            </Heading>
          </div>
          <div className="flex flex-col md:flex-col items-center gap-8">
            {Portfolio.map((item, index) => (
              <div className="portfolio-item flex flex-col items-center md:items-start mb-8 md:mb-12" key={`portfolio-item-${index}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[396px] w-full object-cover mb-4 md:mb-6"
                />
                <Heading as="h3" className="font-bold uppercase tracking-[2.70px] text-center md:text-left">
                  {item.title}
                </Heading>
              </div>
            ))}
          </div>

          {/* blog section */}
          <BlogModel blogData={Blog} content={content} />

          <MeuComponente />

          {/* parceiros section */}
          <div className="mt-8 flex flex-col gap-8" ref={partnersRef}>
            <div className="flex flex-col items-center px-4 md:px-5">
              <Heading as="h6" className="!font-bold uppercase tracking-[2.70px]">
                {content[0].ParceirosTitle}
              </Heading>
            </div>
            <PartnerSlider parceiros={parceiros} />
          </div>

          <Footer />
        </div>
      </div>

    </>
  );
}