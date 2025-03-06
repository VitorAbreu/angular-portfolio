import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'html5 icon'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'angular icon'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'css3 icon'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'javascript icon'
    },
    {
      src: 'assets/icons/knowledge/ngrx.svg',
      alt: 'ngrx icon'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'sass icon'
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'typescript icon'
    }
  ])
}
