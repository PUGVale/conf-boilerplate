module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "4º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "17 de março de 2017",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "CEFE (Centro de Formação do Educador)",
      address: "Av Olivio Gomes, 250",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Call 4 Papers",
        link: "https://speakerfight.com/events/4o-python-vale/"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/PUGVale/site-evento-python-vale/"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://pythonvale.com.br/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      // 'speakers',
      // 'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Realização",
      partners: "Patrocinadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "9h40",
      },
      {
        name: "Abertura oficial",
        time: "10h00",
      },
      {
        name: "Mateus Vieira",
        photo: "themes/yellow-swan/img/speakers/mateus.jpg",
        bio: "Recifense, apaixonado por macaxeira com carne de sol e queijo, Bacharel em Ciências da Computação na Universidade Católica de Pernambuco, membro do PUG-PE, Programador autodidata e anos de Python.",
        company: "",
        link: {
          href: "br.linkedin.com/in/mateusvieira",
          text: ""
        },
        presentation: {
          title: "Django - Ridiculamente Rápido",
          description: "Por que Django? Django torna o desenvolvimento de excelentes aplicações WEB mais rápido, fácil e com menos códigos sem perder a qualidade, confiabilidade e robustez.",
          time: "09h20"
        }
      },
      {
        name: "Paulo Luan",
        photo: "themes/yellow-swan/img/speakers/paulo.jpg",
        bio: "Mais de 7 anos de xp em desenvolvimento, trabalhou nas maiores consultorias de software do país em projetos de grande relevância como o backend do internet banking de um dos maiores bancos da américa latina e um ecommerce global de vendas da Motorola. Apaixonado por software livre, hacker-ativista e aspirante a empreendedor.",
        company: "",
        link: {
          href: "https://www.github.com/pauloluan/",
          text: ""
        },
        presentation: {
          title: "12 passos para melhoria de projetos de software",
          description: "Desenvolver um projeto de software não é uma tarefa simples, principalmente quando se faz necessário cumprir prazos e manter a qualidade. O Joel test sao 12 passos simples criados pelo fundador do Stack overflow para melhorar a qualidade do produto final apontando temas recorrentes de projetos de software. A palestra abordará os 12 passos fazendo um paralelo com exemplos de ferramentas e projetos reais.",
          time: "10h00"
        }
      },
      {
        name: "Coffee Break",
        time: "10h40",
      },
      {
        name: "Aditya Tantravahi",
        photo: "themes/yellow-swan/img/speakers/aditya.jpg",
        bio: "Mestrado em Computação Aplicada pelo INPE , entusiasta do mundo de dados a analytics, além de alguns anos brincando em empresas e startups com ciência de dados, machine learning e outras coisas mais!",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Python e Deep Learning, feito um para o outro!",
          description: "Deep Learning é a onda do momento e Python uma linguagem de programação fantástica. As redes neurais haviam sido esquecidas por um tempo mas com o poder computacional que temos hoje eles estão de volta, tendo se tornado um dos principais e mais usados métodos de Machine Learning ( Aprendizagem Automática). Embora a matemática por trás dela seja dificil, hoje temos inúmeros pacotes que facilitam o uso de maneira que com conhecimentos básicos de Estatística , Cálculo Diferencial e Algebra Linear um iniciante consegue fazer coisa incríveis com redes neurais!",
          time: "11h10"
        }
      },
      {
        name: "Bianca Berdugo",
        photo: "themes/yellow-swan/img/speakers/bianca.jpg",
        bio: " Joseense, formada em engenharia da computação, full stack na empresa Brasil317 e futura cientista de dados (fé no pai).",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Raspadinha de dados",
          description: "Tanta informação preciosa disponível publicamente..como fazer a raspagem destes dados? E o mais importante, como fazer a indexação e pesquisas relevantes destes dados? Entenda como utilizamos Python, Selenium e ElasticSearch para fazer esta raspadinha de dados sem gelar a cabeça.",
          time: "11h50"
        }
      },
      {
        name: "Paulo Giovani",
        photo: "themes/yellow-swan/img/speakers/paulog.jpg",
        bio: "Meu nome é Paulo Giovani e sou natural de Campos do Jordão, SP. Atualmente trabalho como professor de programação e banco de dados no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, no Câmpus da cidade de Campos do Jordão. Sou graduado em Computação Científica pela Universidade de Taubaté (UNITAU) e tenho mestrado em Computação Aplicada pelo Instituto Nacional de Pesquisas Espaciais (INPE). Minhas áreas de interesse incluem a programação em Python, banco de dados, mineração de dados, computação gráfica e desenvolvimento de games, dentre outros.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Física divertida com VPython!",
          description: "O VPython é um módulo para a criação de gráficos 3D que atua em conjunto com a linguagem Python. Ele pode ser utilizado para criar diversos tipos de animações, tanto para diversão quanto como para uso educacional. Nessa palestra veremos como essa ferramenta pode ser empregada para auxiliar no estudo e aprendizagem de conceitos que envolvem leis simples da Física.",
          time: "12h30"
        }
      }
    ],

    //List of Sponsors
    sponsors: [
      {
        name: "Brasil 317",
        logo: "themes/yellow-swan/img/brasil317.png",
        url: "http://brasil317.com.br"
      },
      {
        name: "Django Girls São José dos Campos",
        logo: "themes/yellow-swan/img/dgsjc.png",
        url: "https://djangogirls.org/saojosedoscampos/"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "Necto",
        logo: "themes/yellow-swan/img/necto.png",
        url: "http://znc.com.br/"
      },
      {
        name: "Necto",
        logo: "themes/yellow-swan/img/alpha.png",
        url: "http://znc.com.br/"
      },
      // {
      //   name: "Casa do Código",
      //   logo: "themes/yellow-swan/img/casadocodigo.png",
      //   url: "http://www.casadocodigo.com.br"
      // },
      // {
      //   name: "Faculdades Bilac",
      //   logo: "themes/yellow-swan/img/bilac.jpg",
      //   url: "http://bilac.com.br/"
      // },
      // {
      //   name: "Allgoo",
      //   logo: "themes/yellow-swan/img/allgoo.jpg",
      //   url: "https://www.allgoo.com.br/"
      // },
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa.png",
        url: "http://designa.com.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
