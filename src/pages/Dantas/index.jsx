import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Doublecollum, Contact, BlogModel, PopupManager, PartnerSlider, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import _ from 'lodash';
import { Portfolio, parceiros, Blog, content } from "../../components/content.jsx"
const bdurl = 'https://0e27ec-kend-sandbox.dhiwise.co/swagger/';
const languageindex = localStorage.getItem('languageIndex') || 0;

function generateRandomTransformations() {
  const numSteps = 10; // Número de keyframes (0%, 25%, 50%, 75%, 100%)
  let keyframes = '';

  for (let i = 0; i <= numSteps; i++) {
    const percent = (i / numSteps) * 200;
    const translateX = (_.random(-2, 2)); // Valor aleatório entre -2 e 2
    const translateY = (_.random(-2, 2)); // Valor aleatório entre -1 e 1

    keyframes += `${percent}% { transform: translate(${translateX}px, ${translateY}px); } `;
  }

  return keyframes;
}
// const animationDelay = 1; // Altere para o valor desejado
export default function DantasPage() {

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const numAberrations = 5; // Número de aberrações desejadas

    for (let i = 1; i <= numAberrations; i++) {
      const chromaAberration = generateRandomTransformations();
      styleSheet.insertRule(`
        @keyframes chromaAberration${i} {
          ${chromaAberration}
        }
      `, styleSheet.cssRules.length);
    }
  }, []);



  return (
    <>
      <Helmet>
        <title>Dantas Soluções</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Header content={content} languageindex={languageindex} style={{ position: 'fixed', padding: '5px' }} />



      <div>
        <div className="w-full flex flex-col">
          <div id="top" className="h-screen w-screen flex items-center justify-center"
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
                <div className="flex flex-col items-center w-full space-y-4 mt-4 text-center">
                  <Heading size="s" as="h1" className="chroma-text text-blueLimeade leading-[56px] text-responsive" data-text={content[languageindex].portfolioTitle}>
                    {content[languageindex].portfolioTitle}
                  </Heading>
                  <Text size="7xl" as="h1" className="chroma-text font-poppins-bold tracking-[1.50px] text-white text-responsive" data-text={content[languageindex].headerTitle}>
                    {content[languageindex].headerTitle}
                  </Text>
                  <Text size="4lg" as="h3" className="chroma-text font-lora-regular text-white uppercase" data-text={`|${content[languageindex].titulo1}|${content[languageindex].titulo2}${content[languageindex].titulo3}|`}>
                    |{content[languageindex].titulo1}|{content[languageindex].titulo2}{content[languageindex].titulo3}|
                  </Text>
                  <Contact content={content} languageindex={languageindex} msg="..." withMessage openInNewTab buttonClassName="meu-estilo-personalizado" transparent />
                </div>
              </div>
            </div>
          </div>

          <div id="about" className=" w-screen flex items-center justify-center"
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
                  {content[languageindex].sobre}
                </Heading>
                <div className="flex flex-row md:flex-col items-center space-x-4 mt-4 text-center">
                  <img src="/images/avatar.png" alt="avatar" className="avatar" />
                  <div className="flex flex-col items-center space-y-4 mt-4 text-center">
                    <Text size="7xl" as="h1" className="font-poppins-bold tracking-[1.50px] text-black text-responsive">
                      {content[languageindex].headerTitle}
                    </Text>
                    <Text size="4lg" as="h3" className="font-lora-regular text-black uppercase">
                      |{content[languageindex].titulo1}|{content[languageindex].titulo2}{content[languageindex].titulo3}|
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col md:space-x-4 px-4 md:px-5 my-8">
                  <Doublecollum languageindex={languageindex} />


                </div>

              </div>



              {/* <div id="services" >
                  
                  <div className="my-8 flex items-center justify-around gap-5 overflow-auto border-b border-t border-solid border-gray-300 py-[13px] md:flex-col">
                    {services.map((service, index) => (
                      <ServiceItem service={service} index={index} animationDelay={animationDelay} />
                    ))}
                    <div className="w-full border-t border-gray-300"></div>
                  </div>

                  
                  <ServicesComponent url={bdurl} services={services} content={content} languageindex={languageindex} />
                </div> */}


            </div>
          </div>
          <div className="w-screen flex items-center justify-center" style={{ backgroundColor: '#fff', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="flex flex-row md:flex-col items-center md:max-w-screen-xl md:mx-auto my-8">
              <div className="h-screen px-4 md:h-auto md:relative md:w-full md:max-w-[379px] flex justify-center md:justify-end">
                <img src={content[languageindex].personalimage} alt="container" className="w-[379px] h-auto object-cover md:static md:w-auto md:h-auto md:transform-none md:max-h-[80vh]" />
              </div>
              <div className="flex flex-col justify-center items-start md:items-center md:pl-10 md:pr-10 md:w-full mt-8 md:mt-0">
                <div>
                  <p className="text-lg tracking-[0.50px] md:text-base">{content[languageindex].personalInfoTitle}</p>
                  <p className="text-6xl mt-2 tracking-[-1.50px] md:text-3xl">{content[languageindex].headerTitle}</p>
                  <p className="text-4xl w-[81%] leading-[40px] md:text-base md:w-full md:leading-normal">{content[languageindex].personalInfoSubtitle}</p>
                </div>
                <div id="projects" className="tracking-[0.50px] md:text-sm self-end mt-4 md:mt-0">
                  <Contact content={content} languageindex={languageindex} />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          {/* portfolio section */}
          <div className="container-xs px-4 md:px-5">

            <div className="flex text-white flex-col md:flex-col items-center gap-8">
              <Heading size="s" as="h1" className="text-blueLimeade leading-[56px] text-responsive">
                {content[languageindex].portfolioTitle}
              </Heading>

              {Portfolio.map((item, index) => (<a
                href={item.link}>                 <div className="portfolio-item flex flex-col items-center md:items-start mb-8 md:mb-12" key={`portfolio-item-${index}`}>
                  <img
                    src={item.image}
                    alt={item.Title}
                    className="h-[396px] w-full object-cover mb-4 md:mb-6"
                  />
                  <Heading as="h3" className="font-bold uppercase tracking-[2.70px] text-center md:text-left">
                    {item.Title}
                  </Heading>
                </div>
              </a>

              ))}
            </div>
          </div>

          {/* blog section */}
          <div id="blog" className=" w-screen flex items-center justify-center"
            style={{
              backgroundColor: '#fff',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            <div id="blog" className="w-screen flex items-center justify-center  p-4 md:p-5" style={{
              backgroundColor: '#fff',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className="container-xs bg-gray-100 p-4 md:p-5">
                <div className="flex items-center justify-center" style={{
                  backgroundColor: '#fff',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} >
                  <Heading size="s" as="h1" className="text-blueLimeade leading-[56px] text-responsive">
                    {content[languageindex].blogTitle}
                  </Heading>
                </div>
                <div className="bg-gray-100 mt-4 p-4 md:p-8">
                  <BlogModel id="blog" blogData={Blog} content={content} languageindex={languageindex} />
                </div>
              </div>
            </div>


          </div>
          <div style={{
            backgroundColor: '#fff',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} className="w-screen   px-4 md:px-5">

            {/* parceiros section */}
            <div className="mt-8 flex flex-col gap-8" >
              <div className="flex flex-col items-center px-4 md:px-5">
                <Heading size="s" as="h1" className="text-blueLimeade leading-[56px] text-responsive">
                  {content[languageindex].ParceirosTitle}
                </Heading>
              </div>
              <PartnerSlider parceiros={parceiros} />
            </div>
            <div className="flex w-full flex-col gap-5"
            >
              <div className="main-content flex flex-col items-center">
                <div className="popup-wrapper" >
                  <PopupManager url={bdurl} content={content} languageindex={languageindex} />
                </div>
              </div>
            </div>
          </div>

        </div >
        <Footer content={content} languageindex={languageindex} />
      </div >


    </>
  );
}





//PROG BAR PRECISA CHAMAR MENOS ATENÇÃO, CONTATO PRECISA CHAMAR MAIS