import blogPosts from "../assets/posts.json";
import services from "../assets/orders.json";
import Portfolio from "../assets/portfolio.json";
import parceiros from "../assets/parceiros.json";

const content = [

  {
    language: "en-US",

    changelogsText: "Changelogs",
    changelog: [
      {
        id: 1,
        title: "0.0.1",
        content: "First version of the site, fronent in react, backend in node.js, mongo.db in test phase",
      }
    ],

    Portfolio: [
      {
        title: "implante giovani centro",
        type: "link",
        img: "/images/img_link_396x407.png",
        link: "https://www.implantegiovanicentro.com.br",
      },{
        title: "WhatsappBot",
        type: "link",
        img: "/images/",
        link: "https://github.com/sSmalKk/whatsappbot",
      }
      // Add more portfolios as needed
    ],
    filter: "filter",
    partners: [
      {
        link: "https://example.com",
        image: "images/img_link_200x200.png",
        title: "Partner 1"
      }, {
        link: "https://example.com",
        image: "images/img_link_200x200.png",
        title: "Partner 1"
      }
      // Add more Partners as needed
    ],
    contact: "contact",
    cookiesa: "Here goes the explanatory content about cookies...",
    cookiesmais: "read more...",
    cookiesmenos: "read less",
    cookiesb: "Additional content that appears when the ''Read more'' button is clicked.",
    headerTitle: "GUSTAVO DANTAS",
    headerSubtitle: "Specialized solutions for your business",
    personalInfoTitle: "Send me a message!",
    personalInfoSubtitle: "Specialized solutions for your business",
    sobre: "ABOUT",
    projetos: "PROJECTS",
    contato: "CONTACT",
    servicos: "SERVICES",
    personalInfoButton: "CONTACT",
    typehere: "type here...",
    portfolioTitle: "PORTFOLIO",
    portifolio: "Portfolio",
    blogTitle: "Blog",
    blogTitleuper: "BLOG",
    blogSubtitle: "Contents about marketing",
    ParceirosTitle: "PARTNERS",
    buttonPrevious: "Previous",
    buttonNext: "Next",
    popuptitle: "Site under Construction",
    popsubtitle: "Sorry for the inconvenience. We're working to improve your experience.",
    personalimage: "images/img_container.png",
    messageSentSuccess: "Message sent successfully!",
    errorMessage: "Error sending message.",
    solucoes: "Custom solutions!",
    titulo1: "Fullstack Developer",
    titulo2: "UX/UI",
    titulo3: "Web Designer",

    personalDetails: {
      name: "Gustavo Dantas Guimarães",
      nationality: "Brazilian",
      age: 25,
      dob: "12/21/1998",
      birthPlace: "Monte Alegre/MG",
      address: "QE 15 CJ N HOUSE 47 GUARA-DF",
      phone: ["(61)9.8159-4849", "(61)9.8195-5443"],
      email: "dantaswebdesign77@gmail.com",
      github: "https://github.com/sSmalKk",
      portfolio: "https://dantastec.netlify.app"
    },
    education: [
      "Technologist in Analysis and System Development (Unopar-Ead)",
      "Technical in Graphic Computing (Technical School of Guara-CEPAG)"
    ],
    professionalProfile: [
      "I constantly seek to leave the comfort zone",
      "I feel more motivated and productive when working under pressure",
      "I am proactive, entrepreneurial and face challenges with determination"
    ],
    professionalExperience: [
      {
        role: "Web Designer",
        company: "Espaço Multiplicidades",
        period: "2019/2023"
      },
      {
        role: "Intern, secretary",
        company: "Auto Escola Defensiva",
        period: "2016/2017"
      },
      {
        role: "Graphic Design and Web Design",
        company: "Implante Giovani Centro",
        period: "2016/2017",
        website: "http://implantegiovanicentro.com.br"
      },{
        role: "Assistente administrativo",
        company: "AlphabeetWeel",
        period: "2024/08",
        
      }
    ],
    methodologies: [
      "Agile Scrum", "Lean", "Design Sprint", "Kanban", "Design Thinking", "Sprint Method", "Kanban Method"
    ],
    certifications: [
      "Basic Computing (PRATIK) 2012",
      "Windows, Word, Excel, PowerPoint",
      "Web Design (CEBRAC) 2014",
      "Photoshop CS4 (Prepara cursos) 2013",
      "Assembly and Maintenance of Computers (Senac) 2015",
      "Social Networks (CEBRAC) 2012",
      "Introduction to Python Language",
      "International Law",
      "Strategic Planning",
      "Introduction to Data Analysis with Python",
      "Financial Mathematics for Risk Analysis",
      "Compliance and Corporate Governance"
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
      "React.js", "Redux", "Tailwind CSS", "Bootstrap 3 or higher", "Node.js", "Three.js", "Canon.js", "Fiber"
    ],

    tools: [
      "GIT", "HTML 5", "XML"
    ],

    additionalSkills: [
      "Experience with Illustrator, Photoshop, Blender, Wordpress, and Elementor",
      "Fluent in English",
      "Notions of Actuarial Science"
    ]

  }, {
    language: "pt-BR",

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
      },{
        title: "WhatsappBot",
        type: "link",
        img: "/images/",
        link: "https://github.com/sSmalKk/whatsappbot",
      }
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
      },{
        role: "Assistente administrativo",
        company: "AlphabeetWeel",
        period: "2024/08",
        
      }
    ],
    methodologies: [
      "Agile Scrum", "Lean", "Design Sprint", "Kanban", "Design Thinking", "Sprint Method", "Kanban Method"
    ],
    certifications: [
      "Basic Computing (PRATIK) 2012",
      "Windows, Word, Excel, PowerPoint",
      "Web Design (CEBRAC) 2014",
      "Photoshop CS4 (Prepara cursos) 2013",
      "Assembly and Maintenance of Computers (Senac) 2015",
      "Social Networks (CEBRAC) 2012",
      "Introduction to Python Language",
      "International Law",
      "Strategic Planning",
      "Introduction to Data Analysis with Python",
      "Financial Mathematics for Risk Analysis",
      "Compliance and Corporate Governance"
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
      "React.js", "Redux", "Tailwind CSS", "Bootstrap 3 or higher", "Node.js", "Three.js", "Canon.js", "Fiber"
    ],

    tools: [
      "GIT", "HTML 5", "XML"
    ],

    additionalSkills: [
      "Experience with Illustrator, Photoshop, Blender, Wordpress, and Elementor",
      "Fluent in English",
      "Notions of Actuarial Science"
    ]

  }
];






const Blog = blogPosts;
export { Blog, parceiros, Portfolio, services, content };
