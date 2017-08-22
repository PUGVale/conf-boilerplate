module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "3º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "02 de setembro de 2017",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "Faculdade Bilac",
      address: "R. Francisco Paes, 84",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://www.sympla.com.br/3-pugvale---grupo-de-usuarios-de-python-do-vale-do-paraiba__173342"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/PUGVale/pug-abril"
    // },

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
      'speakers',
      'schedule',
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
        name: "Credenciamento e Apresentação",
        time: "9h00",
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
          description: "",
          time: "10h00"
        }
      },
      {
        name: "Coffee Break",
        time: "10h40",
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
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
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "12h30"
        }
      },
      {
        name: "",
        photo: "http://frontinvale.com.br/images/speakers/lightning-talker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A definir",
          description: "",
          time: "12h45"
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
    ],

    // List of Partners
    partners: [
      {
        name: "Necto",
        logo: "themes/yellow-swan/img/necto.png",
        url: "http://znc.com.br/"
      },
      {
        name: "Faculdades Bilac",
        logo: "themes/yellow-swan/img/bilac.jpg",
        url: "http://bilac.com.br/"
      },
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa.png",
        url: "http://designa.com.br"
      },
      {
        name: "Programe em Python",
        logo: "themes/yellow-swan/img/programeempython.png",
        url: "http://programeempython.com.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
