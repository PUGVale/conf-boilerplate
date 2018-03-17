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
        name: "Diogo Felix",
        photo: "themes/yellow-swan/img/speakers/diogo.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
         presentation: {
          title: "Hydrogen - Live programing com Python",
          description: "Esta palestra tem como objetivo mostrar uma nova ferramenta que talvez mude tua forma de atacar e explorar pequenos problemas: o Hydrogen. O Hydrogen é uma integração do Jupyter/IPython dentro do Atom, mas não se engane, ele foi baseado nas ídeias de programação interativa da palestra 'Inventing on Principle' do Bret Victor, possui ótimo suporte a diversas bibliotecas como Pandas, Matplotlib, Plotly entre outras. Ele também não é limitado apenas a linguagem Python, inclusive você pode rodar diversas linguagens no mesmo arquivo, além de outras funcionalidades. Será um live-code aonde irei implementar um crawler(usando splinter/selenium, requests e beautifulsoup), mexer com Pandas e usar algumas bibliotecas para demonstrar o potencial do Hydrogen.",
          time: "10:20 às 11:00"
        }
      },


      {
        name: "Intervalo: Palestra Nasa - George Francis",
        photo: "themes/yellow-swan/img/speakers/nasa.png",
        bio: "Diretor e engenheiro na Kennedey Space Center (KSC) da NASA. Engenheiro e diretor de engenharia para o Comando de Operações Especiais da Força Aérea dos EUA.",
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
        name: "Kátia Nakamura",
        photo: "themes/yellow-swan/img/speakers/katia.png",
        bio: "Kátia é bacharel e mestre em Ciência da Computação pelo Instituto de Ciência e Tecnologia da Universidade Federal de São Paulo e trabalhou por quase 5 anos como Dev Java antes de conhecer o Python. Ama viajar e conhecer pessoas, culturas e lugares pelo mundo! Também adora fotografia e faz do Instagram o seu diário fotográfico.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Minha jornada após o 1º Django Girls SJC",
          description: "O 1º Django Girls São José dos Campos aconteceu junto com a Python Brasil [11] em Novembro de 2015. Foi nesse final de semana que conheci pessoas incríveis e um framework que mudaria o rumo da minha vida. Gostaria de compartilhar a minha jornada até aqui, as experiências e os grandes desafios. :)",
          time: "13:30 às 14:10"
        }
      },


      {
        name: "Pausa para a troca de palestrante",
        time: "14:10 às 14:15",
      },


      {
        name: "Silvana Elisabete",
        photo: "themes/yellow-swan/img/speakers/silvana.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "A Lente de Aumento do Medo",
          description: "-",
          time: "14:15 às 14:55"
        }
      },


      {
        name: "Intervalo: Coffee Break",
        time: "14:55 às 15:15",
      },


      {
        name: "Paulo Moura",
        photo: "themes/yellow-swan/img/speakers/paulom.jpg",
        bio: "Formado em Sistemas de Informação e pós graduado em Gerenciamento de projetos pela FIAP, 16 anos no mercado de tecnologia atuou nas maiores consultorias como Deloitte, IBM, Accenture entre outras em mais de 30 projetos globais e de grande expressão no território nacional.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Fico ou não fico no Brasil? Quais são as minhas chances por aqui?",
          description: "Vamos voltar um pouco ao passado e dar uma olhada na evolução tecnologica passando por cases de sucesso que hoje ultrapassam bilhões de dólares. Entenda como o Brasil esta posicionado ao mercado mundial e como esta a nossa economia nesse exato momento. Responda as seguintes perguntas: - Será que pego minhas coisas e vou embora do país? - Será que é o momento exato para investir por aqui? - Como me posicionar no mercado?",
          time: "15:15 às 15:55"
        }
      },


      {
        name: "Pausa para a troca de palestrante",
        time: "15:55 às 16:00",
      },


      {
        name: "Willian Justen",
        photo: "themes/yellow-swan/img/speakers/willian.jpg",
        bio: "Desenvolvedor Front-end na Toptal, escritor de blog nas horas vagas e instrutor de cursos na Udemy com mais de 30 mil alunos. Apaixonado por tecnologia e compartilhamento de conhecimento, nos últimos tempos se dedicou a criação de cursos, discussões sobre trabalho remoto e fotografia, onde acabei ganhando prêmio de fotógrafo de 2017 pelo Unsplash.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Git, Github e Open Source: por que são tão importantes na vida de um dev?",
          description: "Nessa palestra eu pretendo falar um pouco sobre o que são essas palavrinhas, como funcionam e um pequeno guia sobre esse mundo maravilhoso.",
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
        url: "https://www.nectosystems.com.br/"
      },
      {
        name: "Alpha Lumen",
        logo: "themes/yellow-swan/img/alpha.png",
        url: "https://www.alphalumen.org.br/"
      },
      {
        name: "Science Days 2018",
        logo: "themes/yellow-swan/img/sd.jpg",
        url: "https://www.alphalumen.org.br/science-days-brazil-2018"
      },
      {
        name: "Dunluce Irish Pub",
        logo: "themes/yellow-swan/img/pub.jpg",
        url: "http://www.dunlucepub.com.br/"
      },
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
