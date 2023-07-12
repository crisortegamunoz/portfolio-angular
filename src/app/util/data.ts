import { Category } from "../models/website/caterogy.models";
import { Certificate } from "../models/website/certificate.models";
import { Experience } from "../models/website/experience.models";
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
        name: 'Personal',
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
        id: 46,
        name: "Curso Spring Security",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-07-08_Spring_Security.pdf?alt=media&token=24ffbc59-67e9-4a6f-82f1-c3a1ecccb191",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-07-08_Spring_Security.png?alt=media&token=9d376f12-66d7-477e-abff-301406567c89",
        entityName: "Platzi",
        completed: new Date("2023-06-08T10:30:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 37,
        name: "Curso Spring Data JPA",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-29_Spring%20Data%20JPA.pdf?alt=media&token=669ea584-5154-487e-b942-b88925c5faaa",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-29_Spring%20Data%20JPA.png?alt=media&token=5beef6f8-9e64-4425-a57a-99deafad307d",
        entityName: "Platzi",
        completed: new Date("2023-06-29T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 36,
        name: "Angular CDK y TailwindCSS",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-11_Angular_TailwindCSS.pdf?alt=media&token=c5f016cc-75d0-41f3-aa67-a23ce39ca658",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-11_Angular_TailwindCSS.png?alt=media&token=e9a64a97-da2f-418a-874d-bbace935a618",
        entityName: "Platzi",
        completed: new Date("2023-06-11T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 35,
        name: "Angular Router y Modular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-01_Angular_Router_Modular.pdf?alt=media&token=54f025e9-870a-4623-907a-791b21fb047e",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-06-01_Angular_Router_Modular.png?alt=media&token=1614f53f-cd20-492b-89c3-33bfdcfc484e",
        entityName: "Platzi",
        completed: new Date("2023-06-01T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 34,
        name: "Consumo de APIS Rest con Angular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-29_Consumo_Api_Rest.pdf?alt=media&token=5265a738-e246-471e-ac36-d3bd5cc95b3e",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-29_Consumo_Api_Rest.png?alt=media&token=20fe9997-fc00-4aa9-a4a8-fdb77a5fd4c6",
        entityName: "Platzi",
        completed: new Date("2023-05-29T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 33,
        name: "Angular Componentes y Servicios",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-25_Componentes_y_servicios.pdf?alt=media&token=4c5a9de8-bee4-4ed4-b4f2-7e2069cb5971",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-25_Componentes_y_servicios.png?alt=media&token=cdca4274-31da-4f0e-8927-57a743a1c04e",
        entityName: "Platzi",
        completed: new Date("2023-05-25T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 32,
        name: "Fundamentos de Angular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-24_Fundamentos_de_angular.pdf?alt=media&token=b2c5bf23-424f-4ce1-a82c-362fa9e3b264",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-05-24_Fundamentos_de_angular.png?alt=media&token=d8fc50cf-c6e7-48dc-b5c7-cdd74e32a930",
        entityName: "Platzi",
        completed: new Date("2023-05-24T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 31,
        name: "Almacenamiento y DataBase AWS",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-04-04_Computo.pdf?alt=media&token=0b337722-4081-44d8-b607-8ce4b1d0314c",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-04-04_Computo.png?alt=media&token=4bfdc040-c7c4-4cdf-a6b0-3f58e375feef",
        entityName: "Platzi",
        completed: new Date("2023-04-04T04:00:00"),
        category: {
            id: 6,
            name: "Cloud",
            section: "CERTIFICATE"
        }
    },
    {
        id: 30,
        name: "Curso Fundamentos AWS",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-03-07_Fundamentos_AWS.pdf?alt=media&token=a74bfc45-be83-4740-826a-ab0099799c09",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2023-03-07_Fundamentos_AWS.png?alt=media&token=07808a8f-2111-40bf-be0f-cc328f1534cd",
        entityName: "Platzi",
        completed: new Date("2023-03-07T03:00:00"),
        category: {
            id: 6,
            name: "Cloud",
            section: "CERTIFICATE"
        }
    },
    {
        id: 29,
        name: "Estructura de Datos JavaScript",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-05-06_Estructura_datos_javascript.pdf?alt=media&token=7d7d0064-c7d5-4cc5-8ede-aa2bc0c106aa",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-05-06_Estructura_datos_javascript.png?alt=media&token=30e6bb1e-999b-41fc-8cd1-b4efe689acb6",
        entityName: "Platzi",
        completed: new Date("2022-05-06T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 28,
        name: "Curso Gestión Dependencias NPM",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-03-13_Gestion_Dependencias_NPM.pdf?alt=media&token=b858773e-a9bb-4704-9b78-52b3a4801bbb",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-03-13_Gestion_Dependencias_NPM.png?alt=media&token=4f6c815f-7c03-440d-97b8-1b3733123ae3",
        entityName: "Platzi",
        completed: new Date("2022-03-13T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 27,
        name: "Curso Introducción a la terminal",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-02-10_Introduccion_terminal.pdf?alt=media&token=fcca6e4e-008e-46bd-ac49-0d54f8932cb3",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-02-10_Introduccion_terminal.png?alt=media&token=0693ecc1-ef86-4ca1-a0f5-1fe4ff889525",
        entityName: "Platzi",
        completed: new Date("2022-02-10T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 26,
        name: "Curso Configuración Entorno Windows",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-01-24_Configuracion_Entorno_Windows.pdf?alt=media&token=f020ec16-4d9c-465c-a892-f11c97082b6e",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2022-01-24_Configuracion_Entorno_Windows.png?alt=media&token=c0239850-d6f8-4610-b067-87d340fbb36c",
        entityName: "Platzi",
        completed: new Date("2022-01-24T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 25,
        name: "Curso Closured y Scope JavaScript",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-07-27_Closured%20y%20Scope%20en%20JavaScript.pdf?alt=media&token=39be450c-a2c5-41c1-8d6b-07eaa34bda80",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-07-27_Closured%20y%20Scope%20en%20JavaScript.png?alt=media&token=0e845590-ec97-4f73-8eed-0c1bdc3f3cff",
        entityName: "Platzi",
        completed: new Date("2021-07-27T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 24,
        name: "Curso JavaScript Engine V8",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-04-11_Javascript_Engine.pdf?alt=media&token=d1fa6da5-b2bd-4567-a86e-1aedb7b61eeb",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-04-11_Javascript_Engine.png?alt=media&token=21646943-9ba4-4d68-b8b9-e45a9586b187",
        entityName: "Platzi",
        completed: new Date("2021-04-11T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 23,
        name: "Curso de Java SE OOP",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-04-05_Java_SE_OOP.pdf?alt=media&token=4c052613-8ad2-447c-a627-b4cd504d1424",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2021-04-05_Java_SE_OOP.png?alt=media&token=625b6c33-af20-4b90-b139-490bb58c2d2e",
        entityName: "Platzi",
        completed: new Date("2021-04-05T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 22,
        name: "Curso Java Spring",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-12-04_Java-Spring.pdf?alt=media&token=1f822fa4-085e-4c29-8e2b-c991bbdb980f",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-12-04_Java-Spring.png?alt=media&token=6b96895c-a27d-4823-ba20-3b259193ef32",
        entityName: "Platzi",
        completed: new Date("2020-12-04T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 21,
        name: "Curso Java Persistencia SE",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-11-12_Java_Persistencia.pdf?alt=media&token=fdc48c57-5908-4c61-bc6e-f99617520a48",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-11-12_Java_Persistencia.png?alt=media&token=86504b3a-31e1-4cea-95ca-0501412572c4",
        entityName: "Platzi",
        completed: new Date("2020-11-12T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 20,
        name: "Curso JavaScript Profesional",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-11-02_JavaScript_Profesional.pdf?alt=media&token=1f20b0ee-c604-4ee1-a92b-a60c534cef05",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-11-02_JavaScript_Profesional.png?alt=media&token=64e6c280-2f51-4216-8e98-f12a79022ea7",
        entityName: "Platzi",
        completed: new Date("2020-11-02T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 19,
        name: "Curso Frontend Developer",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-07-15_frontend-developer.pdf?alt=media&token=8978d6de-9b03-4675-ab85-86e691d4a4d2",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-07-15_frontend-developer.png?alt=media&token=31e0c4a3-30a0-4ed7-9ef3-185946751ebe",
        entityName: "Platzi",
        completed: new Date("2020-07-15T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 18,
        name: "Curso de Angular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-30_Angular_Escalab.pdf?alt=media&token=542bc9f1-7fbf-4ac1-ac11-032202a39996",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-30_Angular_Escalab.png?alt=media&token=b66ab6ef-2839-4204-aa16-3209579eae94",
        entityName: "Escalab",
        completed: new Date("2020-06-30T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 17,
        name: "Curso de Asincronismo JavaScript",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-27_Asincronismo-js.pdf?alt=media&token=aedbdab0-e557-4bed-b8e9-0ec399c8cbaa",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-27_Asincronismo-js.png?alt=media&token=ede7fce0-5520-4efb-888c-e75b1981766b",
        entityName: "Platzi",
        completed: new Date("2020-06-27T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 16,
        name: "Curso de ECMAScript 6",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-22_Ecmascript-6.pdf?alt=media&token=66ed2385-d1bd-4382-8dad-9e3615a0b993",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-22_Ecmascript-6.png?alt=media&token=178bf651-0f77-4542-9e4e-53eab63f9887",
        entityName: "Platzi",
        completed: new Date("2020-06-22T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 15,
        name: "Curso Fundamentos JavaScript",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-17_Fundamentos_JavaScript.pdf?alt=media&token=ff43191c-9b10-4001-a9fa-b3f68dd65a2a",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-06-17_Fundamentos_JavaScript.png?alt=media&token=d781b1a0-caf7-40f7-b7f7-f121e62a9179",
        entityName: "Platzi",
        completed: new Date("2020-06-17T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 14,
        name: "Curso Básico JavaScript",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-05-28_Basico-javascript.pdf?alt=media&token=91fb8be2-743e-4e6e-8c11-e3057a7df2e7",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-05-28_Basico-javascript.png?alt=media&token=35cdfa94-29aa-4a2f-9433-87eebdbdf2ce",
        entityName: "Platzi",
        completed: new Date("2020-05-28T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 13,
        name: "Curso de Angular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-04-13_Angular.pdf?alt=media&token=0c920a21-f8f3-482a-9cda-9473b2abe22e",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-04-13_Angular.png?alt=media&token=619d6887-ba4b-4840-b19a-f7fdceeb4b02",
        entityName: "Platzi",
        completed: new Date("2020-04-13T04:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 12,
        name: "Curso de Prework en Windows",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-02-06_Prework.pdf?alt=media&token=a024ee96-3b90-49bb-a309-2c3cfda070bd",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-02-06_Prework.png?alt=media&token=46a187a1-8a8a-4e86-a063-4245fd94bc79",
        entityName: "Platzi",
        completed: new Date("2020-02-06T03:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 11,
        name: "Curso de TypeScript Angular",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-01-07_Typescript-angular.pdf?alt=media&token=25055b25-a131-4ad3-8fad-bac45326e042",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2020-01-07_Typescript-angular.png?alt=media&token=31295194-a95a-4791-a59d-7eb0898c2632",
        entityName: "Platzi",
        completed: new Date("2020-01-07T03:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 10,
        name: "Curso de Java Testing",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2019-03-14_Java_Testing.pdf?alt=media&token=47d545fe-bab1-4969-8ded-f14e44aee2bd",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2019-03-14_Java_Testing.png?alt=media&token=30b51891-1a8f-4a62-a7c0-adaf9cf5efba",
        entityName: "Platzi",
        completed: new Date("2019-03-14T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 9,
        name: "Curso de Java Hibernate y Spring",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2019-02-06_HIbernate%20y%20Java%20Spring.pdf?alt=media&token=185471ac-975b-40d8-8505-27a6bbe0de87",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2019-02-06_HIbernate%20y%20Java%20Spring.png?alt=media&token=8e21fed0-6137-44d9-be29-27666f330ec9",
        entityName: "Platzi",
        completed: new Date("2019-02-06T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 8,
        name: "Curso Responsive Design",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-12-26_Responsive_Design.pdf?alt=media&token=da4a6d79-2da9-4766-8371-9df9e90baa33",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-12-26_Responsive_Design.png?alt=media&token=0af1a0e2-2514-45ca-9366-e1cfceaa7a36",
        entityName: "Platzi",
        completed: new Date("2018-12-26T03:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 7,
        name: "Curso CSS Grid Layout",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-11-26_CSS_Grid_Layout.pdf?alt=media&token=1ff6191e-c636-443b-b396-e45865027682",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-11-26_CSS_Grid_Layout.png?alt=media&token=b0a469da-3210-4484-8a43-b0a2911e5ff8",
        entityName: "Platzi",
        completed: new Date("2018-11-26T03:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 6,
        name: "Curso de Desarrollo Web",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-10-15_Desarrollo_Web_Online.pdf?alt=media&token=0f1ce0d6-229b-477d-a8a8-260c3e573412",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-10-15_Desarrollo_Web_Online.png?alt=media&token=2805d7a0-ddd0-4fa3-b134-9ab6dc5ae207",
        entityName: "Platzi",
        completed: new Date("2018-10-15T03:00:00"),
        category: {
            id: 5,
            name: "Frontend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 5,
        name: "Curso de Java Avanzado SE",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-06-18_Curso_Java_SE.pdf?alt=media&token=a4d65e36-0410-47f3-9f12-bb8538a5f0cb",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-06-18_Curso_Java_SE.png?alt=media&token=43617b02-659e-4a4c-9df4-6a191992b011",
        entityName: "Platzi",
        completed: new Date("2018-06-18T04:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 4,
        name: "Curso Profesional de Java EE",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-02-15_Java_Profesional.pdf?alt=media&token=ebdb81e9-a973-4012-b77c-8c9083b604b1",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-02-15_Java_Profesional.png?alt=media&token=bf04a368-8caf-45d8-b952-5de8b1b3c60a",
        entityName: "Platzi",
        completed: new Date("2018-02-15T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 3,
        name: "Curso Básico de Java SE",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-01-07_Java_Basico.pdf?alt=media&token=c25337af-bbc1-4c6a-91e8-1d753655c80f",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2018-01-07_Java_Basico.png?alt=media&token=25ea457a-94af-4c0d-92ee-2d1e7ec1576e",
        entityName: "Platzi",
        completed: new Date("2018-02-07T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    },
    {
        id: 2,
        name: "Curso Profesional Git y Github",
        pdfUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2017-12-27_Git_y_Github.pdf?alt=media&token=29e028d6-93d8-41d7-a034-99d312d9884a",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2F2017-12-27_Git_y_Github.png?alt=media&token=5cbba132-d114-476d-8600-7d3b1261e0be",
        entityName: "Platzi",
        completed: new Date("2017-11-26T03:00:00"),
        category: {
            id: 4,
            name: "Backend",
            section: "CERTIFICATE"
        }
    }
    ];
  }

  static loadExperience(): Experience[] {
    return [
      {
        id: 2,
        role: 'Líder Técnico / Senior Full Stack Developer',
        roleDescription: '',
        entity: 'Clave Tecnologías, Santiago.',
        entityDescription: 'Es una compañía especializada en el desarrollo de software para la industria aseguradora, brindando soluciones innovadoras que ayudan a sus clientes a mejorar sus procesos y aumentar su eficiencia.',
        responsabilities: [
          'Organizar el tiempo y calidad del equipo mediante la metodología Scrum.',
          'Trabajar con los clientes para evaluar si un requisito de negocio específico es viable y realizable desde una perspectiva técnica.',
          'Traducir los requisitos de negocio en tareas técnicas específicas que el equipo de desarrollo pueda entender y llevar a cabo.',
          'Buscar opciones de mejora en la aplicación para mejorar el rendimiento y la eficiencia de esta.'
        ],
        technologies: [

        ],
        startDate: new Date(2022, 8, 27),
        endDate: new Date(2023, 4, 31),
        projects: []
      },
      {
        id: 1,
        role: 'FullStack Developer',
        roleDescription: '',
        entity: 'Clave Tecnologías, Santiago.',
        entityDescription: '',
        responsabilities: [
          'Participación diaria en reuniones lideras por nuestro Scrum Master.',
          'Desarrollar nuevas funcionaliades, mantener y mejorar el CORE de la plataforma.',
          'Implementación de nuevas tecnologías.',
          'Capacitar a nuevos integrantes en las tecnologías utilizadas en el desarrollo del software.',
          'Identificar problemas, analizar información y solucionar bug o errores con la finalidad el sistema.',
          'Resolver incidencias en producción para cumplir con los SLA de los clientes-'
        ],
        technologies: [

        ],
        startDate: new Date(2016, 3, 16),
        endDate: new Date(2022, 8, 28),
        projects: []
      }
    ]
  }

}
