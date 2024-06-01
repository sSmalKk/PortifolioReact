import blogPosts from "../assets/posts.json";
import services from "../assets/orders.json";
import Portfolio from "../assets/portfolio.json";
import parceiros from "../assets/parceiros.json";

const content = [
  {
    language: "PT",
    services: [
      {
        designtype: 1,
        id: 'Service1',
        name: 'Service 1',
        subtitle: 'Subtitle 1',
        text: 'This is the text for service 1',
        button: 'Learn More',
        image: "images/img_container.png",
        popupType: 'Service1Popup' // Adicione o tipo de popup associado ao serviço 1
      },
      {
        designtype: 2,
        id: 'Service2',
        name: 'Service 2',
        subtitle: 'Subtitle 2',
        text: 'This is the text for service 2',
        button: 'Learn More',
        image: "images/img_container.png",
        popupType: 'Service2Popup' // Adicione o tipo de popup associado ao serviço 2
      },
      {
        designtype: 3,
        id: 'Service3',
        name: 'Service 3',
        subtitle: 'Subtitle 3',
        text: 'This is the text for service 3',
        button: 'Learn More',
        image: "images/img_container.png",
        imagePosition: 'center',
        popupType: 'Service3Popup' // Adicione o tipo de popup associado ao serviço 3
      },
      {
        designtype: 3,
        id: 'Service4',
        name: 'Service 4',
        subtitle: 'Subtitle 4',
        text: 'This is the text for service 4',
        button: 'Learn More',
        image: "images/img_container.png",
        imagePosition: 'start',
        popupType: 'Service4Popup' // Adicione o tipo de popup associado ao serviço 4
      },
      {
        designtype: 3,
        id: 'Service5',
        name: 'Service 5',
        subtitle: 'Subtitle 5',
        text: 'This is the text for service 5',
        button: 'Learn More',
        image: "images/img_container.png",
        imagePosition: 'end',
        popupType: 'Service5Popup' // Adicione o tipo de popup associado ao serviço 5
      },
      // Adicione mais serviços conforme necessário
    ],
    changelogsText: "Changelogs",
    changelog: [
      {
        id: 1,
        title: "0.0.1",
        content: "Primeira versão do site, fronent em react, backend em node.js, mongo.db em fase de testes",
      }
    ],

    Portfolio: [
      {
        title: "implante giovani centro",
        type: "link",
        img: "/images/img_link_396x407.png",
        link: "https://www.implantegiovanicentro.com.br",
      },
      // Adicione mais portfólios conforme necessário
    ],
    parceiros: [
      {
        link: "https://example.com",
        image: "images/img_link_200x200.png",
        title: "Partner 1"
      }, {
        link: "https://example.com",
        image: "images/img_link_200x200.png",
        title: "Partner 1"
      }
      // Adicione mais Parceiros conforme necessário
    ],
    falecmg: "entre em contato",
    cookiesa: "Aqui vai o conteúdo explicativo sobre cookies...",
    cookiesmais: "ler mais...",
    cookiesmenos: "ler menos",
    cookiesb: "Conteúdo adicional que aparece quando o botão ''Ler mais'' é clicado.",
    headerTitle: "DANTAS SOLUÇÕES",
    headerSubtitle: "Soluções especializadas para o seu negócio",
    personalInfoTitle: "Me mande uma mensagem!",
    personalInfoSubtitle: "Soluções especializadas para o seu negócio",
    sobre: "SOBRE",
    projetos: "PROJETOS",
    contato: "CONTATO",
    servicos: "SERVIÇOS",
    personalInfoButton: "CONTATO",
    typehere: "digite aqui...",
    portfolioTitle: "PORTFÓLIO",
    blogTitle: "Blog",
    blogSubtitle: "Conteúdos sobre o marketing",
    ParceirosTitle: "PARCEIROS",
    buttonPrevious: "Anterior",
    buttonNext: "Próximo",
    popuptitle: "Site em Construção",
    popsubtitle: "Desculpe-nos pelo transtorno. Estamos trabalhando para melhorar sua experiência.",
    personalimage: "images/img_container.png",
    messageSentSuccess: "Mensagem enviada com sucesso!",
    errorMessage: "Erro ao enviar mensagem.",
    solucoes: "Soluções personalizadas!",

  }
];





const Blog = blogPosts;
export { Blog, parceiros, Portfolio, services, content };
