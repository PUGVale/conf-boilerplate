/**
 * @Author: Henrique Liberato <hliberato>
 * @Date:   02-02-2018
 * @Last modified by:   hliberato
 * @Last modified time: 13-03-2018
 */

module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "4º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "17 de março de 2018",
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
        text: "Inscreva-se",
        link: "https://www.sympla.com.br/4-python-vale__253423"
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
        time: "9:40 às 10:00",
      },
      {
        name: "Abertura oficial",
        time: "10:00 às 10:20",
      },
      {
        name: "Palestra #1",
        photo: "",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
         presentation: {
          title: "Palestra #1",
          description: "-",
          time: "10:20 às 11:00"
        }
      },
      {
        name: "Intervalo: Palestra Nasa",
        photo: "themes/yellow-swan/img/nasa.jpeg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Intervalo: Palestra Nasa",
          description: "STEM: Science, technology, engineering and mathematics. Para jovens, crianças e toda a família!",
          time: "11:00 às 12:00"
        }
      },
      {
        name: "Intervalo: Almoço",
        time: "12:00 às 13:30",
      },
      {
        name: "Palestra #2",
        photo: "",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra #2",
          description: "-",
          time: "13:30 às 14:10"
        }
      },
      {
        name: "Pausa para a troca de palestrante",
        time: "14:10 às 14:15",
      },
      {
        name: "Palestra #3",
        photo: "",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra #3",
          description: "-",
          time: "14:15 às 14:55"
        }
      },
      {
        name: "Intervalo: Coffee Break",
        time: "14:55 às 15:15",
      },
      {
        name: "Palestra #4",
        photo: "",
        bio: " ",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra #4",
          description: "-",
          time: "15:15 às 15:55"
        }
      },
      {
        name: "Pausa para a troca de palestrante",
        time: "15:55 às 16:00",
      },
      {
        name: "Palestra #5",
        photo: "",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Palestra #5",
          description: "-",
          time: "16:00 às 16:40"
        }
      },
      {
        name: "Sorteios",
        time: "16:40 às 17:00",
      },
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
        name: "Alpha Lumen",
        logo: "themes/yellow-swan/img/alpha.png",
        url: "https://www.alphalumen.org.br/"
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
