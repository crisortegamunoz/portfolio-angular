import { Category } from "../models/website/caterogry.models";
import { Certificate } from "../models/website/certificate.models";
import { Portfolio } from "../models/website/portfolio.models";

export class WebsiteData {

  static loadCategories(): Category[] {
    return [
      {
        id: 6,
        name: 'Cloud',
        section: 'Certificate'
      },
      {
        id: 5,
        name: 'Frontend',
        section: 'Certificate'
      },
      {
        id: 4,
        name: 'Backend',
        section: 'Certificate'
      },
      {
        id: 3,
        name: 'Profesional',
        section: 'Portfolio'
      },
      {
        id: 2,
        name: 'Laboratorio',
        section: 'Portfolio'
      },
      {
        id: 1,
        name: 'Profesional',
        section: 'Portfolio'
      }
    ]
  }

  static loadCertificate(): Certificate[] {
    return [
      {
        id: 23,
        name: 'Almacenamiento y DataBase AWS',
        image: '/assets/images/certificate/2023-04-04_Computo.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2023-04-04_Computo.png?alt=media&token=d6880102-086b-47a6-8491-d65ce39910e2',
        entity: 'Platzi',
        completed: new Date(2022, 4, 6),
        category: {
          id: 6,
          name: 'Cloud',
          section: 'Certificate'
        }
      },
      {
        id: 22,
        name: 'Curso Fundamentos AWS',
        image: '/assets/images/certificate/2023-03-07_Fundamentos_AWS.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2023-03-07_Fundamentos_AWS.png?alt=media&token=0f158699-0ba8-4028-9ac4-814819fa397c',
        entity: 'Platzi',
        completed: new Date(2022, 4, 6),
        category: {
          id: 6,
          name: 'Cloud',
          section: 'Certificate'
        }
      },
      {
        id: 21,
        name: 'Estructura de Datos JavaScript',
        image: '/assets/images/certificate/2022-05-06_Estructura_datos_javascript.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2022-05-06_Estructura_datos_javascript.png?alt=media&token=22edefc0-3899-4339-941c-2d0ec8fcef05',
        entity: 'Platzi',
        completed: new Date(2022, 4, 6),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 20,
        name: 'Curso Introducción a la terminal',
        image: '/assets/images/certificate/2022-02-10_Introduccion_terminal.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2022-02-10_Introduccion_terminal.png?alt=media&token=0c09c3d8-b9a9-4712-97fb-4cd26e239fff',
        entity: 'Platzi',
        completed: new Date(2022, 1, 10),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 19,
        name: 'Curso JavaScript Engine V8',
        image: '/assets/images/certificate/2021-04-11_Javascript_Engine.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2021-04-11_Javascript_Engine.png?alt=media&token=2c5c7fd7-9423-450f-8054-09fbaffb2f35',
        entity: 'Platzi',
        completed: new Date(2021, 3, 11),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 18,
        name: 'Curso JavaScript Profesional',
        image: '/assets/images/certificate/2020-11-02_JavaScript_Profesional.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-11-02_JavaScript_Profesional.png?alt=media&token=ffe885fd-d0cd-4d8c-82dd-1268b12e9234',
        entity: 'Platzi',
        completed: new Date(2020, 5, 30),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 17,
        name: 'Curso Frontend Developer',
        image: '/assets/images/certificate/2020-07-15_frontend-developer.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-07-15_frontend-developer.png?alt=media&token=f796b5a6-ba7c-405c-b208-3158bb62109b',
        entity: 'Platzi',
        completed: new Date(2020, 6, 15),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 16,
        name: 'Curso de Angular',
        image: '/assets/images/certificate/2020-06-30_Angular.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-06-30_Angular.png?alt=media&token=149a88b7-95fe-4509-9bd9-2cd87f4b4250',
        entity: 'Escalab',
        completed: new Date(2020, 5, 30),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 15,
        name: 'Curso de Asincronismo JavaScript',
        image: '/assets/images/certificate/2020-06-27_Asincronismo-js.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-06-27_Asincronismo-js.png?alt=media&token=a0d45812-cf08-4dd8-bc00-497fca9f756d',
        entity: 'Platzi',
        completed: new Date(2020, 5, 27),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 14,
        name: 'Curso de ECMAScript 6',
        image: '/assets/images/certificate/2020-06-22_Ecmascript-6.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-06-22_Ecmascript-6.png?alt=media&token=964ccdd9-4d2e-4749-a60f-3f322d420cd0',
        entity: 'Platzi',
        completed: new Date(2020, 5, 22),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 13,
        name: 'Curso Fundamentos JavaScript',
        image: '/assets/images/certificate/2020-06-17_Fundamentos-javascript.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-06-17_Fundamentos-javascript.png?alt=media&token=13a52e8d-83fe-4a21-a3e4-9a7a0fcf2295',
        entity: 'Platzi',
        completed: new Date(2020, 5, 17),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 12,
        name: 'Curso Básico JavaScript',
        image: '/assets/images/certificate/2020-05-28-Basico-javascript.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-05-28-Basico-javascript.png?alt=media&token=39832677-8167-43f0-87cc-f4540a163edd',
        entity: 'Platzi',
        completed: new Date(2020, 4, 28),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 11,
        name: 'Curso de Angular',
        image: '/assets/images/certificate/2020-04-13_Angular.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-04-13_Angular.png?alt=media&token=93ec0de2-6542-400f-993c-3659032018b6',
        entity: 'Platzi',
        completed: new Date(2020, 3, 13),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 10,
        name: 'Curso de TypeScript Angular',
        image: '/assets/images/certificate/2020-01-07_Typescript-angular.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2020-01-07_Typescript-angular.png?alt=media&token=d2d45989-e478-4bf2-a4be-ffe8b6d1d559',
        entity: 'Platzi',
        completed: new Date(2020, 0, 7),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 9,
        name: 'Curso de Java Testing',
        image: '/assets/images/certificate/2019-03-14_Java_Testing.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2019-03-14_Java_Testing.png?alt=media&token=aa803c59-fcfd-49ee-94f5-63f19ab6e2ac',
        entity: 'Platzi',
        completed: new Date(2019, 2, 14),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 8,
        name: 'Curso de Java Hibernate y Spring',
        image: '/assets/images/certificate/2019-02-06_Java_Spring.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2019-02-06_Java_Spring.png?alt=media&token=47fbc832-0e5a-44e4-b54a-8db8a50ed513',
        entity: 'Platzi',
        completed: new Date(2019, 1, 6),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 7,
        name: 'Curso Responsive Design',
        image: '/assets/images/certificate/2018-12-26_Responsive_Design.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-12-26_Responsive_Design.png?alt=media&token=65369c53-1cc4-402b-b8cb-d1055bcbb0a8',
        entity: 'Platzi',
        completed: new Date(2018, 11, 26),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 6,
        name: 'Curso CSS Grid Layout',
        image: '/assets/images/certificate/2018-11-26_CSS_Grid_Layout.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-11-26_CSS_Grid_Layout.png?alt=media&token=907be8f4-c801-4b21-be5b-c5ab1610aeef',
        entity: 'Platzi',
        completed: new Date(2018, 10, 26),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 5,
        name: 'Curso de Desarrollo Web',
        image: '/assets/images/certificate/2018-10-15_Desarrollo_Web.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-10-15_Desarrollo_Web.png?alt=media&token=78267dc4-d9e8-4691-855c-b7d69893d606',
        entity: 'Platzi',
        completed: new Date(2018, 9, 15),
        category: {
          id: 5,
          name: 'Frontend',
          section: 'Certificate'
        }
      },
      {
        id: 4,
        name: 'Curso de Java Avanzado SE',
        image: '/assets/images/certificate/2018-06-18_Java-avanzado.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-06-18_Java-avanzado.png?alt=media&token=bbd1d566-4638-4e24-af88-d16abdcb7ecc',
        entity: 'Platzi',
        completed: new Date(2018, 5, 18),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 3,
        name: 'Curso Profesional de Java EE',
        image: '/assets/images/certificate/2018-02-15_Java_Profesional.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-02-15_Java_Profesional.png?alt=media&token=2da8f663-c7aa-45fe-b41b-ae421e490f2e',
        entity: 'Platzi',
        completed: new Date(2018, 1, 15),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 2,
        name: 'Curso Básico de Java SE',
        image: '/assets/images/certificate/2018-01-08_Java_Basico.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2018-01-07_Java_Basico.png?alt=media&token=2f84bbe6-6e42-42ba-8448-9b1c4ff76095',
        entity: 'Platzi',
        completed: new Date(2018, 0, 8),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      },
      {
        id: 1,
        name: 'Curso Profesional Git y Github',
        image: '/assets/images/certificate/2017-12-26_Git_Github.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-crisortega.appspot.com/o/images%2Fcertificate%2F2017-12-26_Git.png?alt=media&token=53ae07bc-2aab-45ff-809d-a5e228d1d709',
        entity: 'Platzi',
        completed: new Date(2017, 11, 26),
        category: {
          id: 4,
          name: 'Backend',
          section: 'Certificate'
        }
      }
    ];
  }

  static loadPortfolio(): Portfolio[] {
    return [
      {
        id: 12,
        projectName: 'Seguros Generales',
        image: '/assets/images/portfolio/profesional/PAC.jpg',
        descriptions: [
          `Módulo de Kinetyc Platform. A diferencia del módulo Líneas Comerciales, "PAC" esta orientado a procesos de auto-atención
           de los clientes y canales en relación a la cotización, propuesta, suscripción, emisión de seguros generales`,
          `Es importante recalcar que los usuarios finales solo pueden realizar este flujo accediendo por medio de una campaña comercial.`
        ],
        workingFrom: new Date(2021, 3, 25),
        workingTo: new Date(2021, 8, 8),
        publish: new Date(2023, 5, 7),
        category: {
          id: 3,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 11,
        projectName: 'Siniestros',
        image: '/assets/images/portfolio/profesional/CLL.jpg',
        descriptions: [
          `Módulo de Kinetyc PAS Life. Orientado a registrar denuncios y siniestros de seguros de vida y salud individual.
           Esto facilita la gestión de datos llevando una bitácora y control de plazos de liquidación.`,
           `Mi participación en este proyecto fue optimizar tiempos de respuesta de la aplicación, mejorando en un 80% los
           tiempos de estos. Además, tuve que implementar el consumo de una API orientada a crear los roles asociados a los
           denuncios y siniestros. El fin de esto era eliminar responsabilidades y fuentes de este proyecto, eliminando la arquitectura
           monolítica.`
        ],
        workingFrom: new Date(2021, 3, 25),
        workingTo: new Date(2021, 8, 8),
        publish: new Date(2023, 5, 7),
        category: {
          id: 3,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 10,
        projectName: 'Kamaleón',
        image: '/assets/images/portfolio/profesional/KML.png',
        descriptions: [
          `Esta aplicación permite la personalización de aplicaciones web, haciendo que un intermediario que posea una
           campaña comercial tenga todo el flujo desde crear la cotización hasta obtener la póliza personalizada con sus
           colores, logos, banners y hasta otros tipos de letra.`,
          `Por ejemplo, si la empresa de seguros “Fantasía” posee el sistema, y se los entrega al intermediario “Seguros Verdes”,
           este podría cambiar la visual de la aplicación web, y al entregarle a sus clientes el enlace para que realicé la cotización,
            este podrá ver la página con la “marca” del intermediario sin tener dudas del por qué esta llegando a algo relacionado
            con “Seguros Fantasía”`,
        ],
        workingFrom: new Date(2021, 0, 15),
        workingTo: new Date(2021, 3, 20),
        publish: new Date(2023, 5, 7),
        category: {
          id: 3,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 9,
        projectName: 'Portafolio API 3.0',
        image: '/assets/images/portfolio/personal/Portfolio-api-v2.jpg',
        descriptions: [
          `Después de realizar un curso de Java Springboot, ya que necesitaba capacitarme para empezar a desarrollar
          nuevos servicios utilizando esta tecnología en proyectos profesionales. Decidí realizar un upgrade a mi portafolio,
          por lo que cambié el uso de Firebase Database no relacional, desarrollando una aplicación backend construida en java
          para manipular la información.`,
          `El stack tecnológico utilizado para este desafío personal fue Gradle, Java 11 (OpenJDK), PostgreSQL para guardar
           la información, algunos proyectos propios de Spring, tales como Spring JPA Repository, Web, Security entre otros.
           El despliegue de la aplicación en la web se hizo en Heroku, con la finalidad de poder consumir los servicios desde
           el frontend.`,
          `Nota: Actualmente no se encuentra disponible, ya que Heroku cambió sus políticas realizando cobros por el uso de
           algunos de sus servicios.`
        ],
        repository: 'https://github.com/crisortegamunoz/first-portfolio-api',
        demo: 'https://portfolio-crisortega.web.app/home',
        workingFrom: new Date(2020, 9, 2),
        workingTo: new Date(2020, 10, 25),
        publish: new Date(2023, 5, 7),
        category: {
          id: 3,
          name: 'Personal',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 8,
        projectName: 'Portafolio 3.0',
        image: '/assets/images/portfolio/personal/portfolio-angular-v1.png',
        descriptions: [
          `Esta fue una versión de mi portafolio en la que invertí mucho tiempo. Apliqué todo el conocimiento adquirido
           en los cursos de Angular (Platzi y Escalab), así como también el que iba adquiriendo mientras desarrollaba aplicaciones web
           profesionales.`,
          `El mayor problema de tener un portafolio estático era el estar constantemente modificando el archivo HTML y/o los JavaScript.
           Por ese motivo nació la idea de desarrollar un sistema de gestión de contenidos (CMS), que me permitierá ir publicando mi
           información e ir mostrandola en mi sitio web.`,
          `Para el desarrollo utilicé Angular Material, Firebase Hosting para tener el sitio publicado en la web,
           Firebase Storage para guardar las imágenes y Firebase Database para guardar la información que se
           mostraría en el sitio.`,
          `Dí de baja este portafolio por diferentes motivos, el principal fue que perdí a mi cuenta de github teniendo que crear una nueva,
           cuando pude recuperar las fuentes ya había pasado mucho tiempo por lo que la versión de angular estaba muy deprecada.`
        ],
        repository: 'https://github.com/crisortegamunoz/fisrt-portoflio-angular',
        demo: 'https://portfolio-crisortega.web.app/home',
        workingFrom: new Date(2020, 5, 10),
        workingTo: new Date(2020, 8, 20),
        publish: new Date(2023, 5, 7),
        category: {
          id: 3,
          name: 'Personal',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 7,
        projectName: 'Seguros Garantía',
        image: '/assets/images/portfolio/profesional/PAS.png',
        descriptions: [
          `Módulo de Kinetyc Platform. A diferencia del módulo Líneas Comerciales, "PAS" esta orientado a procesos de auto-atención
           de los clientes y canales en relación a la cotización, propuesta, suscripción, emisión de seguros de garantía.`,
          `Es importante recalcar que los usuarios finales solo pueden realizar este flujo accediendo por medio de una campaña comercial.`
        ],
        workingFrom: new Date(2020, 3, 15),
        workingTo: new Date(2020, 11, 17),
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 6,
        projectName: 'Campañas Comerciales',
        image: '/assets/images/portfolio/profesional/mkc.jpg',
        descriptions: [
          `Módulo de la plataforma Kinetyc. Permite la creación de campañas comerciales en base a un convenio
           comercial previamente configurado. Esto permite a la misma compañia de seguros disponibilizar una serie
           de productos "en oferta" para ofrecerla a sus clientes, así como también permite a un intermediario
           entregarle un enlance donde los clientes puedan ver y cotizar ciertos productos.`
        ],
        workingFrom: new Date(2020, 2, 10),
        workingTo: new Date(2020, 7, 14),
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 5,
        projectName: 'Rick & Morty',
        image: '/assets/images/portfolio/laboratory/Rick_And_Morty.png',
        descriptions: [
          `Este mini proyecto nace de uno de las tantas tareas dadas en el curso de Angular impartido por Escalab.
           De todos los tuve que desarrollar es mi favorito ya que, había que desarrollar un proyecto de libre pensamiento,
           utilizando Angular y consumiendo la API de “The Rick and Morty”.`,
          `¿Por qué me gustó? Las razones son simples. Una de ellas es que, por fin después de mucho tiempo, pude “jugar”
           con el diseño de un sitio web usando HTML y CSS. Busque y agregue distintos package para mejorar un poco el sitio,
           entre ellos, un paginador para los personajes de la serie y un swipe, que lo utilice como banner dentro de la página web.`,
          `Por último, investigue y aplique Firebase hosting para dejar una demo del sitio, así cualquiera podría verlo sin la necesidad
           de descargar el código fuente desde mi GitHub.`
        ],
        repository: 'https://github.com/crisortegamunoz/CursoAngularLaEscalab/tree/master/Clase%204/rickandmorty',
        demo: 'https://rick-and-morty-api-desafio.web.app/home',
        workingFrom: new Date(2020, 3, 10),
        workingTo: new Date(2020, 3, 24),
        publish: new Date(2023, 5, 7),
        category: {
          id: 2,
          name: 'Laboratorio',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 4,
        projectName: 'Convenios Comerciales',
        image: '/assets/images/portfolio/profesional/PRA.jpg',
        descriptions: [
          `Módulo de la plataforma Kinetyc donde se realizá el registro de las condiciones de comercialización
          con un intermediario. Permite registrar las variables de tarificación y capacidades de venta en diversos
          formatos de relación comercial, en las que participan los roles de asegurador, intermediario, contratante y asegurado.`
        ],
        workingFrom: new Date(2019, 2, 15),
        workingTo: new Date(2019, 5, 13),
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 3,
        projectName: 'Seguros de Vida',
        image: '/assets/images/portfolio/profesional/AGL.jpg',
        descriptions: [
          `Módulo central de Kinetyc PAS Life. Se hace cargo de todo el proceso de manejo de cotización, propuesta,
           suscripción, emisión, plan de pago y endoso. AGL contiene la base de pólizas y clientes asociados a ellos.`,
          `El proceso de emisión se reduce a una secuencia de cuatro pasos: Cotizar → Ingresar datos de propuesta → Ingresar
           datos de pago → Suscribir y emitir.`
        ],
        workingFrom: new Date(2017, 3, 14),
        workingTo: new Date(2018, 11, 20),
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 2,
        projectName: 'Líneas Comerciales',
        image: '/assets/images/portfolio/profesional/AGC.jpg',
        descriptions: [
          `Módulo dentro de Kinetyc Platform orientado a los seguros de garantía, es utilizado por los intermediarios
           internos de una compañia. Se hace cargo de todo el proceso de manejo de cotización, propuesta, suscripción, emisión,
           plan de pago y endoso. AGL contiene la base de pólizas y clientes asociados a ellos.`],
        workingFrom: new Date(2016, 11, 15),
        workingTo: null,
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      },
      {
        id: 1,
        projectName: 'Cobranza',
        image: '/assets/images/portfolio/profesional/COL.jpeg',
        descriptions: [
        `Módulo Kinetyc Platform. Donde se realiza la gestión de procesos de activación de mandatos de cobros de pólizas.
         Teniendo soporte para diferentes medios de pago automáticos como Transbank, entidades bancarias y previred.`,
        `t`,
        `t`
        ],
        workingFrom: new Date(2016, 7, 15),
        workingTo: new Date(2016, 11, 21),
        publish: new Date(2023, 5, 7),
        category: {
          id: 1,
          name: 'Profesional',
          section: 'Portfolio'
        },
        technologies: [],
      }
    ];
  }

}
