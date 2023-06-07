import { Injectable } from '@angular/core';
import { Experience } from '../../models/website/experience.models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {

  }

  getWorks(): Experience[] {
    const works: Experience[] = [
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
    ];
    return works;
  }

  getStudies(){
    const studies: Experience[] = [
      {
        id: 1,
        role: 'Instituto Profesional DuocUC, Ingeniería En Informática. - Santiago, Chile',
        roleDescription: '',
        entity: null,
        entityDescription: null,
        responsabilities: [
          'Miembro del Centro de Innovación y Transferencia Tecnológica'
        ],
        technologies: [],
        startDate: new Date(2012, 2, 10),
        endDate: new Date(2015, 11, 21),
        projects: []
      }
    ];
    return studies;
  }


}