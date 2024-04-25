import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Post from "../../components/Post";
import ServiceA from "../../components/ServiceA";
import ServiceB from "../../components/ServiceB";
import ServiceC from "../../components/ServiceC";

const data = [
  { linkone: "images/img_link.png" },
  { linkone: "images/img_link_396x406.png" },
  { linkone: "images/img_link_1.png" },
];

export default function DantasPage() {
  return (
    <>
      <Helmet>
        <title>Portifolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-60 bg-gray-50 pt-2.5 md:gap-[180px] sm:gap-[120px]">
        {/* header section */}
        <Header className="flex w-[89%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5" />
        <div className="flex flex-col gap-5 self-stretch">
          {/* hero section */}
          <div className="flex flex-col items-center gap-[250px] md:gap-[187px] sm:gap-[125px]">
            {/* about section */}
            <div className="container-sm flex flex-col md:p-5">
              <div className="relative h-[380px] md:h-auto">
                <div className="flex w-full items-start justify-center md:flex-col">
                  <div className="mt-[90px] flex flex-1 bg-indigo-A700 md:self-stretch">
                    <Text size="8xl" as="p" className="mt-[15px] tracking-[-1.50px] !text-white-A700">
                      DANTAS SOLUÇÕES
                    </Text>
                  </div>
                  <Img
                    src="images/img_container.png"
                    alt="container"
                    className="relative ml-[-216px] h-[380px] w-[27%] object-cover md:ml-0 md:w-full"
                  />
                </div>
                <Text
                  size="6xl"
                  as="p"
                  className="absolute bottom-[23.09px] left-[0.00px] m-auto w-[52%] leading-[56px]"
                >
                  Soluções especializadas para o seu negocio
                </Text>
              </div>
              <div className="mt-[15px] flex flex-col items-end pl-14 pr-[63px] md:px-5">
                <Heading size="xl" as="h1" className="!text-indigo-A200">
                  Soluções personalizadas!
                </Heading>
              </div>

              {/* contact section */}
              <ServiceA className="mt-[301px] flex items-center gap-[50px] py-20 pr-14 md:flex-col md:py-5 md:pr-5" />

              {/* services section */}
              <ServiceB className="mt-[250px] flex items-center gap-[37px] py-[5px] md:flex-col" />

              {/* testimonials section */}
              <ServiceC className="mt-[250px] flex h-[1024px] flex-col items-start justify-end gap-[21px] bg-[url(/public/images/img_section2.png)] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5" />
            </div>
            <div className="flex flex-col items-center gap-[19px] self-stretch">
              {/* services overview section */}
              <div className="self-stretch py-[59px] md:py-5">
                <div className="flex items-end justify-between gap-5 self-start overflow-auto border-b border-t border-solid border-gray-300 py-[15px] md:flex-col">
                  <div className="flex w-[6%] items-start justify-between gap-5 md:w-full md:p-5">
                    <Img
                      src="images/img_horizontal_divider.png"
                      alt="horizontal"
                      className="mt-[5px] h-px w-px object-cover"
                    />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <div className="flex w-[8%] items-start justify-between gap-5 md:w-full md:p-5">
                    <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                    <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                      @service
                    </Text>
                  </div>
                  <Img
                    src="images/img_horizontal_divider_1x1.png"
                    alt="horizontal"
                    className="h-px w-px object-cover md:w-full"
                  />
                </div>
              </div>

              {/* personal info section */}
              <div className="container-sm flex items-center gap-[50px] py-[5px] md:flex-col md:p-5">
                <Img
                  src="images/img_container.png"
                  alt="container"
                  className="h-[1014px] w-[50%] object-cover md:w-full"
                />
                <div className="flex w-[50%] flex-col items-center gap-[21px] md:w-full">
                  <Heading as="h2" className="self-start !font-bold uppercase tracking-[2.70px]">
                    QUEM EU SOU
                  </Heading>
                  <div className="flex">
                    <Text size="8xl" as="p" className="mt-1.5 tracking-[-1.50px]">
                      Gustavo Dantas
                    </Text>
                  </div>
                  <Text size="6xl" as="p" className="w-full leading-[56px]">
                    Soluções especializadas para o seu negocio
                  </Text>
                  <Button
                    size="sm"
                    shape="round"
                    className="min-w-[122px] self-end border border-solid border-black-900_dd tracking-[0.50px] text-black-900_dd"
                  >
                    FALE COMIGO!
                  </Button>
                </div>
              </div>
              <div className="container-sm px-20 md:p-5 md:px-5">
                {/* portfolio section */}
                <div className="flex flex-col items-center gap-[19px]">
                  <Heading as="h3" className="text-center !font-bold uppercase tracking-[2.70px]">
                    PORTIFOLIO
                  </Heading>
                  <div className="flex w-[97%] gap-2.5 rounded-[19px] md:w-full md:flex-col">
                    {data.map((d, index) => (
                      <Img
                        key={"container" + index}
                        src="images/img_link.png"
                        alt="link"
                        className="h-[396px] w-[33%] object-cover md:w-full"
                      />
                    ))}
                  </div>
                  <div className="self-stretch">
                    <div className="flex flex-col items-center">
                      <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
                        <Button size="xs" shape="circle" className="ml-[5px] w-[24px] !rounded-[12px]">
                          <Img src="images/img_search.svg" />
                        </Button>
                        <Text size="lg" as="p" className="!font-inter tracking-[0.50px] !text-black-900_60">
                          Filter
                        </Text>
                      </div>
                      <Heading as="h4" className="text-center !font-bold uppercase tracking-[2.70px]">
                        Blog
                      </Heading>
                      <Heading size="lg" as="h5" className="mt-[7px] text-center !text-gray-900">
                        Conteúdos sobre o marketing
                      </Heading>
                    </div>
                    <div className="flex items-start gap-8 md:flex-col">
                      <div className="flex flex-1 flex-col gap-8 md:self-stretch">
                        <Img src="images/img_container.png" alt="container" className="h-[453px] object-cover" />
                        <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
                          <Heading as="h6" className="mt-2.5">
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
                        <Post className="flex flex-1 flex-col items-start justify-center gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-[34px] shadow-sm sm:p-5" />
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
                  </div>
                </div>
              </div>

              {/* partners section */}
              <div className="flex flex-col items-center gap-[18px] self-stretch">
                <div className="container-sm flex flex-col items-center px-[659px] md:p-5 md:px-5">
                  <Heading as="h6" className="text-center !font-bold uppercase tracking-[2.70px]">
                    PARCEIROS
                  </Heading>
                </div>
                <div className="flex justify-center self-stretch border-b border-t border-solid border-black-900_60 shadow-xs">
                  <div className="container-sm flex justify-center px-[274px] md:p-5 md:px-5">
                    <div className="flex w-full gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs md:flex-col">
                      {[...Array(4)].map((d, index) => (
                        <Img
                          key={"border" + index}
                          src="images/img_link_200x200.png"
                          alt="link"
                          className="h-[200px] w-[23%] object-cover md:w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex flex-col items-center gap-5" />
        </div>
      </div>
    </>
  );
}
