import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Footer2 from "../../components/Footer2";
import Header2 from "../../components/Header2";

export default function DantasPage() {
  return (
    <>
      <Helmet>
        <title>Portifolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col gap-5 bg-gray-50 pt-2.5">
        <div className="flex flex-col items-center">
          {/* header section */}
          <div className="container-xs px-7 md:p-5 sm:px-5">
            <Header2 className="gap-5" />
          </div>

          {/* hero section */}
          <div className="container-xs mt-60 md:p-5">
            <div className="flex flex-col">
              <div className="flex items-center justify-evenly md:flex-col">
                <div className="flex w-[67%] flex-col items-center gap-[22px] md:w-full">
                  <div className="flex self-start bg-indigo-A700">
                    <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px] !text-white-A700">
                      DANTAS SOLUÇÕES
                    </Text>
                  </div>
                  <Text size="6xl" as="p" className="w-[87%] leading-[56px] md:w-full">
                    Soluções especializadas para o seu negocio
                  </Text>
                </div>
                <div className="flex w-[32%] flex-col items-center gap-8 md:w-full">
                  <Img
                    src="images/img_container_380x410.png"
                    alt="container"
                    className="h-[380px] w-full object-cover md:h-auto"
                  />
                  <Heading size="lg" as="h1" className="!text-indigo-A200">
                    Soluções personalizadas!
                  </Heading>
                </div>
              </div>

              {/* features section */}
              <div className="mt-[302px]">
                <div className="mt-[321px] flex items-center gap-5 md:flex-col">
                  <Img
                    src="images/img_container.png"
                    alt="container"
                    className="h-[380px] w-[379px] object-cover md:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
                    <Text size="lg" as="p" className="tracking-[0.50px]">
                      FALE COMIGO!
                    </Text>
                    <div className="flex">
                      <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
                        DANTAS SOLUÇÕES
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="w-[81%] leading-[56px] md:w-full">
                      Soluções especializadas para o seu negocio
                    </Text>
                    <Button
                      color="green_700"
                      size="md"
                      shape="round"
                      className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
                    >
                      CONTATO
                    </Button>
                  </div>
                </div>

                {/* about section */}
                <div className="mt-[572px] flex items-center gap-[7px] py-[5px] md:flex-col">
                  <div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
                    <Text size="lg" as="p" className="tracking-[0.50px]">
                      FALE COMIGO!
                    </Text>
                    <div className="flex">
                      <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
                        DANTAS SOLUÇÕES
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="w-[82%] leading-[56px] md:w-full">
                      Soluções especializadas para o seu negocio
                    </Text>
                    <Button
                      color="green_700"
                      size="md"
                      shape="round"
                      className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
                    >
                      CONTATO
                    </Button>
                  </div>
                  <Img
                    src="images/img_container.png"
                    alt="container"
                    className="h-[1014px] w-[32%] object-cover md:w-full"
                  />
                </div>

                {/* services section */}
                <div className="mt-[250px] flex h-[1024px] flex-col items-start justify-end gap-[21px] bg-[url(/public/images/img_section2.png)] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5">
                  <Text size="lg" as="p" className="mt-[563px] tracking-[0.50px] !text-white-A700">
                    FALE COMIGO!
                  </Text>
                  <div className="flex">
                    <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px] !text-white-A700">
                      DANTAS SOLUÇÕES
                    </Text>
                  </div>
                  <Text size="6xl" as="p" className="w-[55%] leading-[56px] !text-white-A700 md:w-full md:p-5">
                    Soluções especializadas para o seu negocio
                  </Text>
                  <Button
                    color="black_900_60"
                    size="md"
                    shape="round"
                    className="min-w-[92px] border border-solid border-green-700 tracking-[0.50px]"
                  >
                    CONTATO
                  </Button>
                </div>

                {/* testimonials section */}
                <div className="mb-[61px] mt-[309px] flex items-center justify-between gap-5 overflow-auto border-b border-t border-solid border-gray-300 py-[13px] md:flex-col">
                  <Img
                    src="images/img_horizontal_divider.png"
                    alt="horizontal"
                    className="h-px w-px object-cover md:w-full"
                  />
                  <div className="flex w-[66%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <Text
                      size="md"
                      as="p"
                      className="w-[-153px] uppercase leading-5 tracking-[4.00px] !text-black-900_01"
                    >
                      @service
                    </Text>
                    <div className="flex w-[81%] items-center justify-between gap-5 self-end md:w-full md:flex-col">
                      <Img
                        src="images/img_horizontal_divider_1x1.png"
                        alt="horizontal"
                        className="mt-[5px] h-px w-px self-start object-cover md:w-full"
                      />
                      <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                        @service
                      </Text>
                      <div className="flex w-[11%] items-start justify-between gap-5 md:w-full">
                        <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                        <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                          @service
                        </Text>
                      </div>
                      <div className="flex w-[11%] items-start justify-between gap-5 md:w-full">
                        <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                        <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                          @service
                        </Text>
                      </div>
                      <div className="flex w-[11%] items-start justify-between gap-5 md:w-full">
                        <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                        <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                          @service
                        </Text>
                      </div>
                      <div className="flex w-[11%] items-start justify-between gap-5 md:w-full">
                        <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                        <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                          @service
                        </Text>
                      </div>
                      <div className="flex w-[11%] items-start justify-between gap-5 md:w-full">
                        <div className="mt-[5px] h-px w-[36px] bg-gray-300" />
                        <Text size="md" as="p" className="uppercase tracking-[4.00px] !text-black-900_01">
                          @service
                        </Text>
                      </div>
                      <Img
                        src="images/img_horizontal_divider_1.png"
                        alt="horizontal"
                        className="mt-[5px] h-px w-px self-start object-cover md:w-full"
                      />
                    </div>
                    <Text
                      size="md"
                      as="p"
                      className="w-[-153px] uppercase leading-5 tracking-[4.00px] !text-black-900_01"
                    >
                      @service
                    </Text>
                  </div>
                  <Img
                    src="images/img_horizontal_divider_2.png"
                    alt="horizontal"
                    className="h-px w-px object-cover md:w-full"
                  />
                </div>
              </div>

              {/* personal info section */}
              <div className="mt-5 flex items-center gap-[50px] md:flex-col">
                <Img
                  src="images/img_container.png"
                  alt="container"
                  className="h-[1014px] w-[50%] object-cover md:w-full"
                />
                <div className="flex w-[50%] flex-col items-center gap-[21px] md:w-full">
                  <Heading as="h2" className="self-start !font-bold uppercase tracking-[2.70px]">
                    QUEM EU SOU
                  </Heading>
                  <div className="flex self-start">
                    <Text size="8xl" as="p" className="mt-1.5 tracking-[-1.50px]">
                      Gustavo Dantas
                    </Text>
                  </div>
                  <Text size="6xl" as="p" className="w-full leading-[56px]">
                    Soluções especializadas para o seu negocio
                  </Text>
                  <Button
                    size="md"
                    shape="round"
                    className="min-w-[122px] self-end border border-solid border-black-900_dd tracking-[0.50px] text-black-900_dd"
                  >
                    FALE COMIGO!
                  </Button>
                </div>
              </div>

              {/* portfolio section */}
              <div className="mt-[19px] flex flex-col items-center px-[574px] md:px-5">
                <Heading as="h3" className="!font-bold uppercase tracking-[2.70px]">
                  PORTIFOLIO
                </Heading>
              </div>

              {/* blog section */}
              <div className="mt-[18px] flex flex-col gap-5">
                <div className="flex rounded-[19px] md:flex-col">
                  <Img
                    src="images/img_link_396x407.png"
                    alt="link"
                    className="h-[396px] w-[32%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_link_396x407.png"
                    alt="link"
                    className="ml-[9px] h-[396px] w-[32%] object-cover md:ml-0 md:w-full"
                  />
                  <Img
                    src="images/img_link_396x407.png"
                    alt="link"
                    className="ml-[9px] h-[396px] w-[32%] object-cover md:ml-0 md:w-full"
                  />
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
                      <Button size="xs" shape="circle" className="ml-[5px] w-[24px] !rounded-[12px]">
                        <Img src="images/img_search.svg" />
                      </Button>
                      <Text size="lg" as="p" className="!font-inter tracking-[0.50px] !text-black-900_60">
                        Filter
                      </Text>
                    </div>
                    <Heading as="h4" className="!font-bold uppercase tracking-[2.70px]">
                      Blog
                    </Heading>
                    <Heading size="xl" as="h5" className="mt-[7px] !text-gray-900">
                      Conteúdos sobre o marketing
                    </Heading>
                  </div>
                  <div className="flex items-start gap-8 md:flex-col">
                    <div className="flex flex-1 flex-col gap-8 md:self-stretch">
                      <Img src="images/img_container.png" alt="container" className="h-[453px] object-cover" />
                      <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
                        <Heading as="h6" className="mt-[11px]">
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
                        <Heading as="h6" className="mt-2">
                          @Nome
                        </Heading>
                        <div className="mb-2.5 flex self-stretch">
                          <Heading size="md" as="h3" className="w-[84%] leading-10 !text-gray-900">
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
                </div>
              </div>

              {/* partners section */}
              <div className="mt-[18px] flex flex-col gap-[18px]">
                <div className="flex flex-col items-center px-[580px] md:px-5">
                  <Heading as="h6" className="!font-bold uppercase tracking-[2.70px]">
                    PARCEIROS
                  </Heading>
                </div>
                <div className="border-b border-t border-solid border-black-900_60 px-[194px] shadow-xs md:px-5">
                  <div className="flex gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs md:flex-col">
                    <Img
                      src="images/img_link_200x200.png"
                      alt="link"
                      className="h-[200px] w-[200px] object-cover md:w-full"
                    />
                    <div className="flex flex-1 gap-[18px] md:flex-col md:self-stretch">
                      {[...Array(3)].map((d, index) => (
                        <Img
                          key={"listlinkone" + index}
                          src="images/img_link_200x200.png"
                          alt="link"
                          className="h-[200px] w-[31%] object-cover md:w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <Footer2 />
        </div>

        {/* privacy policy section */}
        <div className="flex flex-col items-end">
          <div className="mt-5 flex w-[84%] md:w-full md:p-5">
            <div className="flex w-[81%] flex-wrap justify-between gap-5 border-t border-solid border-gray-300 py-7 pr-7 md:w-full sm:py-5 sm:pr-5">
              <a href="#" className="self-start">
                <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
                  Privacy policy
                </Text>
              </a>
              <Text size="xs" as="p" className="mr-[155px] self-start uppercase tracking-[4.00px] !text-blue_gray-500">
                © 2024 DANTAS COPYRIGHT
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
