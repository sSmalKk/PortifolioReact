import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PartnerSlider, ServicesComponent, Text, Img, Heading, Button, ServiceItem } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
const services = [
  { designtype: 1, id: 'Service1', name: 'Service 1', link: 'service1', subtitle: 'Subtitle 1', text: 'This is the text for service 1', button: 'Learn More', image: "images/img_container.png" },
  { designtype: 2, id: 'Service2', name: 'Service 2', link: 'service2', subtitle: 'Subtitle 2', text: 'This is the text for service 2', button: 'Learn More', image: "images/img_container.png" },
  { designtype: 3, id: 'Service3', name: 'Service 3', link: 'service3', subtitle: 'Subtitle 3', text: 'This is the text for service 3', button: 'Learn More', image: "images/img_container.png", imagePosition: 'center' },
  { designtype: 3, id: 'Service4', name: 'Service 4', link: 'service4', subtitle: 'Subtitle 4', text: 'This is the text for service 4', button: 'Learn More', image: "images/img_container.png", imagePosition: 'start' },
  { designtype: 3, id: 'Service5', name: 'Service 5', link: 'service5', subtitle: 'Subtitle 5', text: 'This is the text for service 5', button: 'Learn More', image: "images/img_container.png", imagePosition: 'end' },
  // Adicione quantos serviços desejar
];

const content = [
  {
    language: "PT",
    headerTitle: "DANTAS SOLUÇÕES",
    headerSubtitle: "Soluções especializadas para o seu negócio",
    personalInfoTitle: "FALE COMIGO!",
    personalInfoSubtitle: "Soluções especializadas para o seu negócio",
    personalInfoButton: "CONTATO",
    portfolioTitle: "PORTIFOLIO",
    blogTitle: "Blog",
    blogSubtitle: "Conteúdos sobre o marketing",
    parceirosTitle: "PARCEIROS",
    buttonPrevious: "Anterior",
    buttonNext: "Proximo",
    personalimage: "images/img_container.png"
  }
];

const Portfolio = [
  {
    title: "implante giovani centro",
    type: "link",
    img: "/images/img_link_396x407.png",
    link: "https://www.implantegiovanicentro.com.br",
  },
  // Adicione mais portfólios conforme necessário
];

const parceiros = [
  {
    link: "https://example.com",
    image: "images/img_link_200x200.png",
    title: "Partner 1"
  }, {
    link: "https://example.com",
    image: "images/img_link_200x200.png",
    title: "Partner 1"
  }
  // Adicione mais parceiros conforme necessário
];

const Blog = [
  {
    id: 1,
    image: "images/img_link_200x200.png",
    title: "Title",
    subtitle: "Como o design de sites afeta a conversão de visitantes?",
    content: "Conteúdo do blog sobre marketing...",
  }, {
    id: 2,
    image: "images/img_link_200x200.png",
    title: "Title",
    subtitle: "Como o design de sites afeta a conversão de visitantes?",
    content: "Conteúdo do blog sobre marketing...",
  }, {
    id: 3,
    image: "images/img_link_200x200.png",
    title: "Title",
    subtitle: "Como o design de sites afeta a conversão de visitantes?",
    content: "Conteúdo do blog sobre marketing...",
  }, {
    id: 4,
    image: "images/img_link_200x200.png",
    title: "Title",
    subtitle: "Como o design de sites afeta a conversão de visitantes?",
    content: "Conteúdo do blog sobre marketing...",
  },
  // Adicione mais posts de blog conforme necessário
];

const animationDelay = 1; // Altere para o valor desejado

export default function DantasPage() {
  const [filter, setFilter] = useState(""); // Estado do filtro
  const [currentPage, setCurrentPage] = useState(1); // Estado da página atual
  const postsPerPage = 3; // Número de posts por página

  // Lógica para filtrar os posts com base no input de texto
  const filteredPosts = Blog.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  // Lógica para calcular o índice inicial e final dos posts a serem exibidos na página atual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Função para mudar para a próxima página
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Função para mudar para a página anterior
  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  // Lógica para verificar se existem posts suficientes para exibir a página anterior
  const hasPrevPage = currentPage > 1;

  // Lógica para verificar se existem posts suficientes para exibir a próxima página
  const hasNextPage = indexOfLastPost < filteredPosts.length;

  return (
    <>
      <Helmet>
        <title>Dantas Soluções</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col gap-5 bg-gray-50 pt-2.5">
        <div className="flex flex-col items-center">
          {/* header section */}
          <Header className="container-xs gap-5 px-7 md:p-5 sm:px-5" style={{ position: 'fixed' }} />

          {/* hero section */}
          <div className="container-xs md:p-5">
            <div className="flex flex-col">
              <div className="h-screen flex items-center justify-center">
                <div className="flex items-center justify-evenly md:flex-col w-full max-w-screen-xl mx-auto">
                  <div className="flex w-full flex-col items-center gap-8 md:w-[67%]">
                    <div className="flex self-start bg-indigo-A700">
                      <Text size="8xl" as="p" className="mt-2 tracking-[1.50px] !text-white">
                        {content[0].headerTitle}
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="w-[87%] leading-[56px]">
                      {content[0].headerSubtitle}
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center gap-8">
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
              </div>

              {/* features section */}
              <div id={"services"}>
                {/* services section */}
                <ServicesComponent services={services} />

                {/* services bar */}
                <div className="mb-[61px] mt-[309px] flex items-center justify-around gap-5 overflow-auto border-b border-t border-solid border-gray-300 py-[13px] md:flex-col">
                  {services.map((service, index) => (

                    <ServiceItem service={service} index={index} animationDelay={animationDelay} />

                  ))}
                  <div className="w-full border-t border-gray-300"></div>
                </div>
              </div>

              {/* personal info section */}
              <div class="container mx-auto px-4">
                <div class="bg-blue-500 flex-col md:flex-row md:max-w-screen-xl md:mx-auto">
                  <div class="h-screen md:h-auto md:relative md:w-full md:max-w-[379px]">
                    <img src={content[0].personalimage} alt="container" class="w-full h-full object-cover md:static md:w-auto md:h-auto md:transform-none md:max-h-screen" />
                  </div>
                  <div class="flex flex-col justify-start md:justify-center items-start md:items-center md:pl-10 md:pr-10 md:w-full">
                    <div>
                      <p class="text-lg tracking-[0.50px] md:text-base">{content[0].personalInfoTitle}</p>
                      <p class="text-8xl mt-2 tracking-[-1.50px] md:text-4xl">{content[0].headerTitle}</p>
                      <p class="text-6xl w-[81%] leading-[56px] md:text-base md:w-full">{content[0].personalInfoSubtitle}</p>
                    </div>
                    <button class="bg-green-700 text-white px-4 py-2 rounded-full border border-solid border-green-400 tracking-[0.50px] md:text-sm self-end mt-4 md:mt-0">{content[0].personalInfoButton}</button>
                  </div>
                </div>
              </div>




              {/* portfolio section */}
              <div className="mt-[19px] flex flex-col items-center px-[574px] md:px-5">
                <Heading as="h3" className="!font-bold uppercase tracking-[2.70px]">
                  {content[0].portfolioTitle}
                </Heading>
              </div>
              <div className="flex rounded-[19px] md:flex-col">
                {Portfolio.map((item, index) => (
                  <Img key={`portfolio-item-${index}`}
                    src={item.img}
                    alt={item.title}
                    className="ml-[9px] h-[396px] w-[32%] object-cover md:ml-0 md:w-full"
                  />
                ))}
              </div>
              {/* blog section */}
              <div className="mt-[18px] flex flex-col gap-5">
                <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
                  <input
                    type="text"
                    placeholder="Filter"
                    className="!font-inter tracking-[0.50px] !text-black-900_60 outline-none border border-solid border-gray-300 p-2 rounded"
                    onChange={e => setFilter(e.target.value)}
                  />
                </div>

                <div className="flex items-start gap-8 md:flex-col">
                  {/* Destaque do primeiro post */}
                  <div className="mt-[18px] flex flex-col gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex items-start gap-2.5 self-stretch rounded-[3px] p-2.5">
                        <Button size="xs" shape="circle" className="ml-[5px] w-[24px] !rounded-[12px]">
                          <Img src="images/img_search.svg" />
                        </Button>
                        <input className="!font-inter tracking-[0.50px] !text-black-900_60" placeholder="Filter" />
                      </div>
                      <Heading as="h4" className="!font-bold uppercase tracking-[2.70px]">
                        Blog
                      </Heading>
                      <Heading size="xl" as="h5" className="mt-[7px] !text-gray-900">
                        Conteúdos sobre o marketing
                      </Heading>
                    </div>
                    {/* Destaque do primeiro post */}
                    <div className="flex flex-1 flex-col gap-8 md:self-stretch">
                      <Img src={Blog[0].image} alt="container" className="h-[453px] object-cover" />
                      <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
                        <Heading as="h6" className="mt-[11px]">
                          @{Blog[0].author}
                        </Heading>
                        <Heading size="md" as="h3" className="w-full leading-10 !text-gray-900">
                          <>
                            {Blog[0].title}
                            <br />
                            {Blog[0].subtitle}
                          </>
                        </Heading>
                      </div>
                    </div>
                  </div>
                  {/* Lista de posts restantes */}
                  <div className="mt-[18px] flex flex-col gap-5">
                    {currentPosts.map((post, index) => (
                      <div key={`blog-post-${index}`} className="flex flex-1 flex-col gap-8 md:self-stretch">
                        <div className="flex flex-col items-start gap-[13px] rounded-[5px] border border-solid border-blue_gray-50 p-8 shadow-sm sm:p-5">
                          <Heading as="h6" className="mt-[11px]">
                            @{post.author}
                          </Heading>
                          <Heading size="md" as="h3" className="w-full leading-10 !text-gray-900">
                            <>
                              {post.title}
                              <br />
                              {post.subtitle}
                            </>
                          </Heading>
                        </div>
                      </div>
                    ))}
                  </div>

                </div><div className="flex justify-between mt-5">
                  <Button onClick={prevPage} disabled={!hasPrevPage} className="!text-gray-900">
                    {content[0].buttonPrevious}

                  </Button>
                  <Button onClick={nextPage} disabled={!hasNextPage} className="!text-gray-900">
                    {content[0].buttonNext}
                  </Button>
                </div>
              </div>
              {/* parceiros section */}
              <div className="mt-[18px] flex flex-col gap-[18px]">
                <div className="flex flex-col items-center px-[580px] md:px-5">
                  <Heading as="h6" className="!font-bold uppercase tracking-[2.70px]">
                    {content[0].parceirosTitle}
                  </Heading>
                </div>
                <PartnerSlider parceiros={parceiros} />

              </div>

            </div>
          </div>

        </div>


        <Footer />
      </div>
    </>
  );
}
