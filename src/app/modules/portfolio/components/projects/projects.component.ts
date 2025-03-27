import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/marvel.jpg',
      alt: 'Marvel Api Consume Project',
      title: 'Marvel Project',
      width: '100px',
      height: '50px',
      description: '<p>Porject made to consume marvel api and show the heroes and vilains, some informations about them and their most expensive HQ</p>',
      links: [
        {
          name: 'Know about it on GitHub',
          href: 'https://github.com/VitorAbreu/desafio-angular-vitor-abreu'
        }
      ]
    }
  ])
}
