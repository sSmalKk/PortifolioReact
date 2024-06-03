import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Doublecollum, Contact, BlogModel, PopupManager, PartnerSlider, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import { Portfolio, parceiros, Blog, content } from "../../components/content.jsx"
const bdurl = 'https://0e27ec-kend-sandbox.dhiwise.co/swagger/';



// const animationDelay = 1; // Altere para o valor desejado

export default function DantasPage() {
  // Referências para as seções
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



      <div ref={topRef}>
        <div className="flex flex-col">
          <div className="h-screen w-screen flex items-center justify-center"
            style={{
              position: 'fixed',
              zIndex: -99,
              backgroundImage: 'url(images/section.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="container-xs px-4 md:px-5">
            <div className="h-screen flex items-center justify-center">
              <div className="flex items-center justify-evenly md:flex-col">
                <div className="flex flex-col items-center w-full space-y-4 mt-4 text-center"> {/* Adicionado "text-center" aqui */}
                  <Heading size="s" as="h1" className="text-blueLimeade leading-[56px] text-responsive">
                    {content[0].portfolioTitle}
                  </Heading>
                  <Text size="7xl" as="h1" className="font-poppins-bold tracking-[1.50px] text-white text-responsive">
                    {content[0].headerTitle}
                  </Text>
                  <Text size="4lg" as="h3" className="font-lora-regular text-white uppercase">
                    |{content[0].titulo1}|{content[0].titulo2}{content[0].titulo3}|
                  </Text>
                  <Contact content={content} msg="..." withMessage openInNewTab buttonClassName="meu-estilo-personalizado" transparent />
                </div>
              </div>

            </div>
          </div>
          <div className=" w-screen flex items-center justify-center"
            style={{
              backgroundColor: '#fff',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container-xs px-4 md:px-5">
              {/* quem sou */}
              <div className="flex flex-col items-center w-full space-y-4 mt-4 text-center">
                <Heading size="s" as="h1" className="text-blueLimeade leading-[56px] text-responsive">
                  {content[0].portfolioTitle}
                </Heading>
                <div className="flex flex-row items-center space-x-4 mt-4 text-center">
                  <img src="/images/avatar.png" alt="avatar" className="avatar" />
                  <div className="flex flex-col items-center space-y-4 mt-4 text-center">
                    <Text size="7xl" as="h1" className="font-poppins-bold tracking-[1.50px] text-black text-responsive">
                      {content[0].headerTitle}
                    </Text>
                    <Text size="4lg" as="h3" className="font-lora-regular text-black uppercase">
                      |{content[0].titulo1}|{content[0].titulo2}{content[0].titulo3}|
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col md:space-x-4 px-4 md:px-5 my-8">
                  <Doublecollum />


                </div>

              </div>



              {/* <div id="services" ref={servicesRef}>
                  
                  <div className="my-8 flex items-center justify-around gap-5 overflow-auto border-b border-t border-solid border-gray-300 py-[13px] md:flex-col">
                    {services.map((service, index) => (
                      <ServiceItem service={service} index={index} animationDelay={animationDelay} />
                    ))}
                    <div className="w-full border-t border-gray-300"></div>
                  </div>

                  
                  <ServicesComponent url={bdurl} services={services} content={content} />
                </div> */}


            </div>
          </div>
          <div className=" w-screen flex items-center justify-center"
            style={{
              backgroundColor: '#fff',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div
              className="container-xs px-4 md:px-5"
              style={{
                backgroundColor: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
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
                  <div className="tracking-[0.50px] md:text-sm self-end mt-4 md:mt-0" ><Contact content={content} /></div>

                </div>
              </div>
            </div>
          </div>
          {/* portfolio section */}
          <div className="container-xs px-4 md:px-5">
            <div className="flex flex-col items-center px-4 md:px-5 my-8" ref={portfolioRef}>
              <Heading as="h3" style={{
                color: "#007bff"
              }} className="!font-bold uppercase tracking-[2.70px]">
                {content[0].portfolioTitle}
              </Heading>
            </div>
          </div>

          {/* portfolio section */}
          <div className="container-xs px-4 md:px-5">
            <div className="flex text-white flex-col md:flex-col items-center gap-8">
              {Portfolio.map((item, index) => (
                <div className="portfolio-item flex flex-col items-center md:items-start mb-8 md:mb-12" key={`portfolio-item-${index}`}>
                  <img
                    src={item.image}
                    alt={item.Title}
                    className="h-[396px] w-full object-cover mb-4 md:mb-6"
                  />
                  <Heading as="h3" className="font-bold uppercase tracking-[2.70px] text-center md:text-left">
                    {item.Title}
                  </Heading>
                </div>
              ))}
            </div>
          </div>

          {/* blog section */}
          <div className=" w-screen flex items-center justify-center"
            style={{
              backgroundColor: '#fff',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>

            <div className="container-xs px-4 md:px-5">
              <BlogModel blogData={Blog} content={content} />
            </div>

          </div>
          <div className="container-xs px-4 md:px-5">

            {/* parceiros section */}
            <div className="mt-8 flex flex-col gap-8" ref={partnersRef}>
              <div className="flex flex-col items-center px-4 md:px-5">
                <Heading as="h6" className="!font-bold uppercase tracking-[2.70px]">
                  {content[0].ParceirosTitle}
                </Heading>
              </div>
              <PartnerSlider parceiros={parceiros} />
            </div>
            <div class="flex w-full flex-col gap-5"
            >
              <div class="main-content flex flex-col items-center">
                <div class="popup-wrapper" >
                  <PopupManager url={bdurl} content={content} />
                </div>
              </div>
            </div>
          </div>

        </div >
        <Footer />
      </div>


    </>
  );
}