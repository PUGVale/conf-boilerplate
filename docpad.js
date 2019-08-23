/**
 * @Author: Henrique Liberato <hliberato>
 * @Date:   02-02-2018
 * @Last modified by:   hliberato
 * @Last modified time: 16-03-2018
 */

module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "5º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "21 de setembro de 2018",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "GYPZ Lab - DMCard",
      address: "Av. Cassiano Ricardo, 521, 1º Andar",
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
        name: "Credenciamento",
        time: "9:40 às 10:00",
      },


      {
        name: "Abertura oficial",
        time: "10:00 às 10:20",
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/diogo.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
         presentation: {
          title: "",
          description: "",
          time: "10:20 às 11:00"
        }
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/nasa.png",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "11:00 às 12:00"
        }
      },


      {
        name: "Intervalo: Almoço",
        time: "12:00 às 13:30",
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/katia.png",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "13:30 às 14:10"
        }
      },


      {
        name: "Pausa para a troca de palestrante",
        time: "14:10 às 14:15",
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/silvana.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "14:15 às 14:55"
        }
      },


      {
        name: "Intervalo: Coffee Break",
        time: "14:55 às 15:15",
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/paulom.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "15:15 às 15:55"
        }
      },


      {
        name: "Pausa para a troca de palestrante",
        time: "15:55 às 16:00",
      },


      {
        name: "",
        photo: "themes/yellow-swan/img/speakers/willian.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
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
    //  {
    //    name: "Django Girls São José dos Campos",
    //    logo: "themes/yellow-swan/img/dgsjc.png",
    //    url: "https://djangogirls.org/saojosedoscampos/"
    //  },
    ],

    // List of Partners
    partners: [
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
