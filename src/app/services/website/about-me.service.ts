import { Injectable } from '@angular/core';
import { AboutBox } from 'src/app/models/website/about-me.models';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor() {

  }

  getAll(): AboutBox[] {
    const boxes: AboutBox[] = [
      {
        id: 1,
        title: `Tecnologías`,
        description: 'Ayudando a la industria tecnológica a desarrollar nuevas plataformas de alto rendimiento con la finaliad de facilitar la vida a las personas.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon1.svg'
      },
      {
        id: 2,
        title: 'Gestión de equipo',
        description: 'Guiando y retroalimentando a los miembros del equipo en pro del cumplimiento de metas, priorizando la eficiencia y prolijidad.',
        class: 'about-box bg-[#fff4f4] dark:bg-transparent',
        image: '/assets/images/icons/icon2.svg'
      },
      {
        id: 3,
        title: 'Desarrollo',
        description: 'Dedicado a la creación, mantención y a mejorar las funcionalides de las aplicaciones para que el usuario tenga una buena experiencia.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon3.svg'
      },
      {
        id: 4,
        title: 'Compartir conocimiento',
        description: 'Guiando a mis compañeros y compañeras de trabajo, compartiendo el conocimiento, ya sea sobre una tecnología en especifico o sobre el negocio.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon4.svg'
      },
      {
        id: 5,
        title: 'Planning',
        description: 'Participación continua con los clientes, revisando la factibilidad técnica de sus requerimientos para implementarlos en los sistemas.',
        class: 'about-box bg-[#fefaf0] dark:bg-transparent',
        image: '/assets/images/icons/icon5.svg'
      },
      {
        id: 6,
        title: 'Aprendiendo',
        description: 'Siempre es bueno ver que hay de nuevo en el mercado, por ese motivo actualizo mi stack constantemente viendo nuevas versiones o framework.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon6.svg'
      }
    ]
    return boxes;
  }
}
