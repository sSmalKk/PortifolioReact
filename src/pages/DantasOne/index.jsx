import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import DantasOne141tabbar from "../../components/DantasOne141tabbar";
import Header from "../../components/Header";

export default function DantasOnePage() {
  return (
    <>
      <Helmet>
        <title>Portifolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-gray-50">
        <div className="flex flex-col items-center">
          {/* header section */}
          <div className="container-sm relative h-[390px] self-stretch md:h-auto md:p-5">
            <Header className="mt-2.5 flex w-[85%] items-center justify-between gap-5 md:flex-col" />

            {/* hero section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center gap-[50px] px-14 py-[63px] md:relative md:flex-col md:p-5">
              <Img
                src="images/img_container.png"
                alt="container"
                className="h-[250px] w-[26%] object-cover md:w-full"
              />
              <div className="mt-1.5 flex flex-1 flex-col items-start gap-[23px] md:self-stretch">
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
          </div>

          {/* typography section */}
          <div className="container-sm mt-5 flex flex-col items-center gap-[19px] self-stretch md:p-5">
            <Img src="images/img_container.png" alt="container" className="h-[453px] w-[47%] object-cover" />
            <div className="flex flex-col items-start justify-center gap-[65px] self-stretch rounded-[60px] py-[88px] pl-[88px] pr-14 md:p-5 sm:gap-8">
              <div className="mt-3.5 flex flex-col items-start">
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
              </div>
              <div className="flex flex-wrap items-center gap-[46px]">
                <Text as="p" className="mb-4 self-end">
                  Headline 3
                </Text>
                <Text size="6xl" as="p" className="!font-inter">
                  H3/Roboto/Regular/48px
                </Text>
              </div>
              <div className="flex w-[40%] flex-wrap items-start justify-between gap-5 md:w-full">
                <Text as="p" className="mt-[5px]">
                  Headline 4
                </Text>
                <Text size="5xl" as="p" className="!font-inter">
                  H4/Roboto/Regular/34px
                </Text>
              </div>
              <div className="flex w-[31%] flex-wrap items-start justify-between gap-5 md:w-full">
                <Text as="p" className="mt-1">
                  Headline 5
                </Text>
                <Text size="4xl" as="p" className="!font-inter tracking-[0.18px]">
                  H5/Roboto/Regular/24px
                </Text>
              </div>
              <div className="flex w-[28%] flex-wrap items-start justify-between gap-5 md:w-full">
                <Text as="p">Headline 6</Text>
                <Text size="3xl" as="p" className="!font-inter tracking-[0.15px]">
                  H6/Roboto/Medium/20px
                </Text>
              </div>
              <div className="flex w-[27%] flex-wrap items-start justify-between gap-5 md:w-full">
                <Text as="p">Subtitle 1</Text>
                <Text size="2xl" as="p" className="!font-inter tracking-[0.15px]">
                  Subtitle 1/Roboto/Regular/16px
                </Text>
              </div>
              <div className="flex w-[25%] flex-wrap justify-between gap-5 md:w-full">
                <Text as="p" className="self-start">
                  Subtitle 2
                </Text>
                <Text as="p" className="self-end !font-inter !font-medium tracking-[0.10px]">
                  Subtitle 2/Roboto/Medium/14px
                </Text>
              </div>
              <div className="flex w-[26%] flex-wrap items-center justify-between gap-5 md:w-full">
                <Text as="p" className="self-start">
                  Body 1
                </Text>
                <Text size="2xl" as="p" className="!font-inter tracking-[0.50px]">
                  Body 1/Roboto/Regular/16px
                </Text>
              </div>
              <div className="flex w-[24%] flex-wrap justify-between gap-5 md:w-full">
                <Text as="p" className="self-end">
                  Body 2
                </Text>
                <Text as="p" className="self-start !font-inter tracking-[0.25px]">
                  Body 2/Roboto/Regular/14px
                </Text>
              </div>
              <div className="flex w-[22%] flex-wrap items-center justify-between gap-5 md:w-full">
                <Text as="p" className="self-start">
                  Caption
                </Text>
                <Text size="lg" as="p" className="self-end !font-inter tracking-[0.40px]">
                  Caption/Roboto/Regular/12px
                </Text>
              </div>
              <div className="mb-[15px] flex w-[25%] flex-wrap items-start justify-between gap-5 md:w-full">
                <Text as="p">Overline</Text>
                <Text size="s" as="p" className="!font-inter uppercase tracking-[1.50px]">
                  OVERLINE/Roboto/Regular/10px
                </Text>
              </div>
            </div>
            <Heading as="h2" className="text-center !font-bold uppercase tracking-[2.70px]">
              PORTIFOLIO
            </Heading>
          </div>

          {/* blog section */}
          <div className="container-xs mt-[18px] flex flex-col items-center md:p-5">
            <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
              <Button size="xs" shape="circle" className="ml-[5px] w-[24px] !rounded-[12px]">
                <Img src="images/img_search.svg" />
              </Button>
              <Text size="lg" as="p" className="!font-inter tracking-[0.50px] !text-black-900_60">
                Filter
              </Text>
            </div>
            <Heading as="h2" className="text-center !font-bold uppercase tracking-[2.70px]">
              Blog
            </Heading>
            <Heading size="lg" as="h3" className="mt-[7px] text-center !text-gray-900">
              Conteúdos sobre o marketing
            </Heading>
          </div>

          {/* featured articles section */}
          <div className="container-xs flex items-start gap-8 md:flex-col md:p-5">
            <div className="flex flex-1 flex-col gap-8 md:self-stretch">
              <Img src="images/img_container.png" alt="container" className="h-[453px] object-cover" />
              <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
                <Heading as="h2" className="mt-2.5">
                  @Nome
                </Heading>
                <Heading size="md" as="h3" className="w-full leading-10 !text-gray-900">
                  <>
                    Como o design de sites afeta a conversão
                    <br />
                    de visitantes?
                  </>
                </Heading>
              </div>
            </div>
            <div className="flex w-[45%] flex-col gap-8 md:w-full">
              <div className="flex flex-1 flex-col items-start justify-center gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-[34px] shadow-sm sm:p-5">
                <Heading as="h4" className="mt-2">
                  @Nome
                </Heading>
                <div className="mb-2.5 flex self-stretch">
                  <Heading size="md" as="h5" className="w-[84%] leading-10 !text-gray-900">
                    <>
                      Como o design de sites afeta a conversão
                      <br />
                      de visitantes?
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-center gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-[35px] shadow-sm sm:p-5">
                <Heading as="h6" className="mt-2">
                  @Nome
                </Heading>
                <Heading size="md" as="h3" className="mb-2.5 w-[92%] leading-10 !text-gray-900 md:w-full">
                  <>
                    Como o design de sites afeta a conversão
                    <br />
                    de visitantes?
                  </>
                </Heading>
              </div>
              <div className="flex flex-1 flex-col items-start justify-center gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-[35px] shadow-sm sm:p-5">
                <Heading as="h6" className="mt-2">
                  @Nome
                </Heading>
                <Heading size="md" as="h3" className="mb-2.5 w-full leading-10 !text-gray-900">
                  <>
                    Como o design de sites afeta a conversão
                    <br />
                    de visitantes?
                  </>
                </Heading>
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className="relative mt-5 h-[322px] self-stretch md:h-auto">
            <div className="flex w-full flex-col gap-5">
              <div className="flex items-center justify-between gap-5 px-[65px] md:flex-col md:px-5">
                <div className="flex w-[77%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <Text size="4xl" as="p" className="tracking-[0.18px]">
                    DANTAS
                  </Text>
                  <DantasOne141tabbar className="flex w-[36%] flex-wrap items-center justify-between gap-5 p-[7px] sm:w-full" />
                  <Button
                    color="green_700"
                    size="sm"
                    shape="round"
                    className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
                  >
                    CONTATO
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs">
                  <Button shape="circle" className="w-[36px] !rounded-[18px]">
                    <Img src="images/img_u_linkedin_alt.svg" />
                  </Button>
                  <Button shape="circle" className="w-[36px] !rounded-[18px]">
                    <Img src="images/img_volume.svg" />
                  </Button>
                  <Button shape="circle" className="w-[36px] !rounded-[18px]">
                    <Img src="images/img_u_instagram.svg" />
                  </Button>
                  <Button shape="circle" className="w-[36px] !rounded-[18px]">
                    <Img src="images/img_lock.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300 py-[9px] pr-[9px]">
                <a href="#" className="my-[18px]">
                  <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
                    Privacy policy
                  </Text>
                </a>
                <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
                  © 2024 DANTAS COPYRIGHT
                </Text>
                <a href="#">
                  <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
                    Terms & conditions
                  </Text>
                </a>
              </div>
            </div>
            <div className="absolute bottom-[0.43px] left-[1.00px] m-auto flex flex-col items-center gap-[18px] p-[18px] shadow-xs">
              <Button shape="circle" className="w-[36px] !rounded-[18px]">
                <Img src="images/img_u_comment.svg" />
              </Button>
              <Button shape="circle" className="w-[36px] !rounded-[18px]">
                <Img src="images/img_u_arrow_up.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
