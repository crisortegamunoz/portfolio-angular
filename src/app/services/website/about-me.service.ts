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
        title: `Tech's Companies`,
        description: 'Ayudando a la industria de tecnologica desarrollando plataformas de alto rendimiento, para facilitar la vida a las personas.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon.svg'
      },
      {
        id: 2,
        title: 'Planning',
        description: 'Continua participación en reuniones con los clientes, viendo la factibilidad de sus requerimientos para implementarlos en la plataforma.',
        class: 'about-box bg-[#fefaf0] dark:bg-transparent',
        image: '/assets/images/icons/icon1.svg'
      },
      {
        id: 3,
        title: 'Gestión de equipo',
        description: 'Guiando y retroalimentando a los miembros del equipo en pro del cumplimiento de metas, priorizando la eficiencia y prolijidad.',
        class: 'about-box bg-[#fff4f4] dark:bg-transparent',
        image: '/assets/images/icons/icon3.svg'
      },
      {
        id: 4,
        title: 'Desarrollo',
        description: 'Dedicado a la creación, mantención y a mejorar las funcionalides de las aplicaciones para que el usuario tenga una buena experiencia.',
        class: 'about-box bg-[#fcf4ff] dark:bg-transparent',
        image: '/assets/images/icons/icon2.svg'
      }
    ]
    return boxes;
  }
}
