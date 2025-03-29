import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interfaces/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
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

  openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
