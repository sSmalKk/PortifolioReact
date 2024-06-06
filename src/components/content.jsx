import blogPosts from "../assets/posts.json";
import services from "../assets/orders.json";
import Portfolio from "../assets/portfolio.json";
import parceiros from "../assets/parceiros.json";
const info = {
  personalDetails: {
    name: "Gustavo Dantas Guimarães",
    nationality: "Brasileiro",
    age: 25,
    dob: "21/12/1998",
    birthPlace: "Monte Alegre/MG",
    address: "QE 15 CJ N CASA 47 GUARA-DF",
    phone: ["(61)9.8159-4849", "(61)9.8195-5443"],
    email: "dantaswebdesign77@gmail.com",
    github: "https://github.com/sSmalKk",
    portfolio: "https://dantastec.netlify.app"
  },
  education: [
    "Tecnólogo em Análise e Desenvolvimento de Sistema (Unopar-Ead)",
    "Técnico em Computação Gráfica (Escola Técnica do Guara-CEPAG)"
  ],
  professionalProfile: [
    "Busco constantemente sair da zona de conforto",
    "Me sinto mais motivado e produtivo ao trabalhar sob pressão",
    "Sou proativo, empreendedor e encaro desafios com determinação"
  ],
  professionalExperience: [
    {
      role: "Web Designer",
      company: "Espaço Multiplicidades",
      period: "2019/2023"
    },
    {
      role: "Estagiário, secretaria",
      company: "Auto Escola Defensiva",
      period: "2016/2017"
    },
    {
      role: "Design Gráfico e Web Design",
      company: "Implante Giovani Centro",
      period: "2016/2017",
      website: "http://implantegiovanicentro.com.br"
    }
  ],
  methodologies: [
    "Agile Scrum", "Lean", "Design Sprint", "Kanban", "Design Thinking", "Sprint Method", "Kanban Method"
  ],
  certifications: [
    "Informática básica (PRATIK) 2012",
    "Windows, Word, Excel, PowerPoint",
    "Web Design (CEBRAC) 2014",
    "Photoshop CS4 (Prepara cursos) 2013",
    "Montagem e Manutenção de computadores (Senac) 2015",
    "Redes sociais (CEBRAC) 2012",
    "Introdução à Linguagem Python",
    "Direito Internacional",
    "Planejamento Estratégico",
    "Introdução à Análise de Dados com Python",
    "Matemática Financeira para Análise de Riscos",
    "Compliance e Governança Corporativa"
  ],
  knowledge: [
    "CSS 3", "Ajax", "JQuery", "Pandas"
  ],
  programmingLanguages: [
    "Java 8", "Angular JS", "TypeScript", "JavaScript", "JSON", "C++", "PHP", "Python"
  ],
  databases: [
    "SQL", "MongoDB"
  ],
  frameworks: [
    "React.js", "Redux", "Tailwind CSS", "Bootstrap 3 ou superior", "Node.js", "Three.js", "Canon.js", "Fiber"
  ],
  tools: [
    "GIT", "HTML 5", "XML"
  ],
  additionalSkills: [
    "Experiência com Illustrator, Photoshop, Blender, Wordpress e Elementor",
    "Inglês fluente",
    "Noções de Atuaria"
  ]
};

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
    filtrar: "filtra",
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
    headerTitle: "GUSTAVO DANTAS",
    headerSubtitle: "Soluções especializadas para o seu negócio",
    personalInfoTitle: "Me mande uma mensagem!",
    personalInfoSubtitle: "Soluções especializadas para o seu negócio",
    sobre: "SOBRE",
    projetos: "PROJETOS",
    contato: "CONTATO",
    servicos: "SERVIÇOS",
    personalInfoButton: "CONTATO",
    typehere: "digite aqui...",
    portfolioTitle: "PORTFOLIO",
    portifolio: "Portfolio",
    blogTitle: "Blog",
    blogTitleuper: "BLOG",
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
    titulo1: "Deselvolvedor Fullstack",
    titulo2: "UX/UI",
    titulo3: "Web Designer",


  }
];





const Blog = blogPosts;
export { info, Blog, parceiros, Portfolio, services, content };
