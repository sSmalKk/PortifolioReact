import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { BlogModel, Button, Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Blog, content } from "../../components/content.jsx"

const languageindex = localStorage.getItem('languageIndex');



export default function Post() {
  return (
    <>
      <Helmet>
        <title>Portifolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[11px] bg-gray-50">
        {/* header section */}
        <Header content={content} languageindex={languageindex} className="header sticky container-xs gap-5 px-7 md:p-5 sm:px-5" style={{ position: 'fixed', padding: '5px' }} />
        <div className="flex flex-col items-center gap-5">
          {/* about section */}
          <div className="container-xs flex flex-col items-center gap-[83px] md:gap-[62px] md:p-5 sm:gap-[41px]">
            <div className="flex items-center gap-[50px] self-stretch md:flex-col">
              <Img
                src="images/img_container.png"
                alt="container"
                className="h-[250px] w-[26%] object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-[23px] md:self-stretch">
                <Heading as="h1" className="!font-bold uppercase tracking-[2.70px]">
                  QUEM EU SOU
                </Heading>
                <div className="flex self-center">
                  <Text size="8xl" as="p" className="mt-1.5 tracking-[-1.50px]">
                    Gustavo Dantas
                  </Text>
                </div>
                <Text size="6xl" as="p">
                  Soluções especializadas para o seu negocio
                </Text>
              </div>
            </div>
            <Img src="images/img_container.png" alt="container" className="h-[453px] w-[53%] object-cover" />
          </div>
          <div className="flex flex-col items-center gap-[19px] self-stretch">
            {/* typography section */}
            <div className="flex flex-col items-center justify-center self-stretch rounded-[60px] py-[78px] md:py-5">
              <div className="container-xs my-[25px] flex flex-col items-start px-2 md:p-5">
                <div className="flex w-[84%] flex-col items-start md:w-full">
                  <Text size="2xl" as="p" className="!font-robotomono tracking-[-0.13px]">
                    Dhiwise Design
                  </Text>
                  <Text size="6xl" as="p" className="mt-2.5 !font-robotomono tracking-[-0.40px]">
                    Typography
                  </Text>
                  <div className="mt-[129px] flex flex-wrap items-center gap-12">
                    <Text as="p" className="mb-7 self-end">
                      Headline 1
                    </Text>
                    <Text size="8xl" as="p" className="!font-inter tracking-[-1.50px]">
                      H1/Roboto/Light/96px
                    </Text>
                  </div>
                  <div className="mt-[45px] flex flex-wrap items-center gap-[46px]">
                    <Text as="p" className="mb-[17px] self-end">
                      Headline 2
                    </Text>
                    <Text size="7xl" as="p" className="!font-inter tracking-[-0.50px]">
                      H2/Roboto/Light/60px
                    </Text>
                  </div>
                  <div className="mt-[57px] flex flex-wrap items-center gap-[46px]">
                    <Text as="p" className="mb-4 self-end">
                      Headline 3
                    </Text>
                    <Text size="6xl" as="p" className="!font-inter">
                      H3/Roboto/Regular/48px
                    </Text>
                  </div>
                  <div className="mt-[58px] flex w-[48%] flex-wrap items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="mt-[5px]">
                      Headline 4
                    </Text>
                    <Text size="5xl" as="p" className="!font-inter">
                      H4/Roboto/Regular/34px
                    </Text>
                  </div>
                  <div className="mt-[60px] flex w-[37%] flex-wrap items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="mt-1">
                      Headline 5
                    </Text>
                    <Text size="4xl" as="p" className="!font-inter tracking-[0.18px]">
                      H5/Roboto/Regular/24px
                    </Text>
                  </div>
                  <div className="mt-16 flex w-[34%] flex-wrap items-start justify-between gap-5 md:w-full">
                    <Text as="p">Headline 6</Text>
                    <Text size="3xl" as="p" className="!font-inter tracking-[0.15px]">
                      H6/Roboto/Medium/20px
                    </Text>
                  </div>
                  <div className="mt-[67px] flex w-[33%] flex-wrap items-start justify-between gap-5 md:w-full">
                    <Text as="p">Subtitle 1</Text>
                    <Text size="2xl" as="p" className="!font-inter tracking-[0.15px]">
                      Subtitle 1/Roboto/Regular/16px
                    </Text>
                  </div>
                  <div className="mt-[70px] flex w-[31%] flex-wrap justify-between gap-5 md:w-full">
                    <Text as="p" className="self-start">
                      Subtitle 2
                    </Text>
                    <Text as="p" className="self-end !font-inter !font-medium tracking-[0.10px]">
                      Subtitle 2/Roboto/Medium/14px
                    </Text>
                  </div>
                  <div className="mt-[70px] flex w-[32%] flex-wrap items-center justify-between gap-5 md:w-full">
                    <Text as="p" className="self-start">
                      Body 1
                    </Text>
                    <Text size="2xl" as="p" className="!font-inter tracking-[0.50px]">
                      Body 1/Roboto/Regular/16px
                    </Text>
                  </div>
                  <div className="mt-[69px] flex w-[29%] flex-wrap justify-between gap-5 md:w-full">
                    <Text as="p" className="self-end">
                      Body 2
                    </Text>
                    <Text as="p" className="self-start !font-inter tracking-[0.25px]">
                      Body 2/Roboto/Regular/14px
                    </Text>
                  </div>
                  <div className="mt-[76px] flex w-[27%] flex-wrap items-center justify-between gap-5 md:w-full">
                    <Text as="p" className="self-start">
                      Caption
                    </Text>
                    <Text size="lg" as="p" className="self-end !font-inter tracking-[0.40px]">
                      Caption/Roboto/Regular/12px
                    </Text>
                  </div>
                  <div className="mt-16 flex w-[31%] flex-wrap items-start justify-between gap-5 md:w-full">
                    <Text as="p">Overline</Text>
                    <Text size="s" as="p" className="!font-inter uppercase tracking-[1.50px]">
                      OVERLINE/Roboto/Regular/10px
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* portfolio section */}
            <div className="container-xs flex flex-col items-center px-[574px] md:p-5 md:px-5">
              <Heading as="h2" className="!font-bold uppercase tracking-[2.70px]">
                PORTIFOLIO
              </Heading>
            </div>

            {/* blog section */}
            <div className="container-xs md:p-5">
              <div className="flex flex-col items-center">
                <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
                  <Button size="xs" shape="circle" className="ml-[5px] w-[24px] !rounded-[12px]">
                    <Img src="images/img_search.svg" />
                  </Button>
                  <Text size="lg" as="p" className="!font-inter tracking-[0.50px] !text-black-900_60">
                    Filter
                  </Text>
                </div>
                <Heading as="h3" className="!font-bold uppercase tracking-[2.70px]">
                  Blog
                </Heading>
                <Heading size="xl" as="h4" className="mt-[7px] !text-gray-900">
                  Conteúdos sobre o marketing
                </Heading>
              </div>

            </div>

            <BlogModel blogData={Blog} content={content} languageindex={languageindex} />
            {/* footer section */}
            <Footer content={content} languageindex={languageindex} />
          </div>
        </div>
      </div>
    </>
  );
}
