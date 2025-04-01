import { Component, signal } from '@angular/core';

// interface
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Brq Digital Solutions | Senior Frontend Software Engineer',
        p: 'Sep 2023 - Present'
      },
      text: `<p>Assigned to the client Itaú</p>
        <ul>
          <li>Designed, developed, and maintained micro front-ends for the 360i Digital Platform, utilizing Module Federation tools plugin to create scalable and modular architectures that improve team collaboration and code reusability.</li>
          <li>Created a dynamic Angular-based project integrated with a headless CMS (<strong>ContentStack</strong>), enabling real-time rendering of entire flows for any product. The system dynamically receives and processes CMS-managed data to generate tailored landing pages and interfaces on demand, minimizing manual effort for new product implementations.</li>
          <li>Contributed to the architecture and scalability of the platform through the effective use of micro front-end principles, ensuring seamless integration and maintainability across multiple teams and projects.</li>
          <li>Collaborated with backend teams, designers, and business stakeholders to define and implement solutions aligned with business goals and user needs, ensuring a streamlined development process and seamless user experience.</li>
          <li>Improved performance and accessibility by adopting <strong>W3C</strong> standards and focusing on responsive design and cross-browser compatibility.</li>
          <li>Participated in code reviews and mentored team members, promoting best practices and ensuring high-quality, maintainable code across projects.</li>
        </ul>
        <p><strong>Key Achievements:</strong></p>
        <ul>
          <li>Successfully delivered a scalable dynamic landing page system, reducing the time and effort required to create and deploy new product-specific flows while improving flexibility and maintainability.</li>
          <li>Played a key role in the modularization and scalability of the 360i Digital Platform, enabling faster feature development and deployment.</li>
        </ul>
        <p><strong>Technologies & Tools:</strong> Angular, TypeScript, SCSS, HTML5, Module Federation, ContentStack (Headless CMS), Git, GitLab, Jira</p>
        <p><strong>Methodologies:</strong> Agile (Scrum), Accessibility Standards (W3C), Continuous Integration/Continuous Deployment (CI/CD), Micro Front-End Architecture</p>
      `
    },
    {
      summary: {
        strong: 'Brq Digital Solutions | Mid-level Frontend Software Engineer',
        p: 'April 2021 - Sep 2023'
      },
      text: `<p>Assigned to the client Itaú</p>
        <ul>
          <li>Played a key role in the development, maintenance, and continuous enhancement of front-end projects, collaborating with the business team to define requirements and proposing technical solutions tailored to client needs.</li>
          <li>Redesigned and rebuilt the entire flow for the PIC/Multisorte (Capitalization) project, migrating the application from Angular 11 (using the Voxel Design System) to Angular 15, incorporating the modern and scalable Itaú Design System (IDS).</li>
          <li>Delivered critical features for projects like Card Unlocking, improving user flows, accessibility, and overall functionality.</li>
          <li>Focused on accessibility improvements by adhering to W3C standards, ensuring a more inclusive user experience across platforms.</li>
          <li>Designed and implemented new features, fixed bugs, and performed unit tests using Jest to ensure code quality and reliability.</li>
          <li>Managed deployments in development environments, supporting CI/CD workflows and ensuring smooth delivery.</li>
          <li>Collaborated with UX/UI designers to refine user interfaces, ensuring alignment with best practices in usability and accessibility.</li>
          <li>Regularly participated in sprint planning, daily stand-ups, and retrospectives, contributing to the planning and refinement of new features in an Agile environment.</li>
          <li>Mentored 4 new team members, providing guidance on development best practices, code reviews, and project workflows, fostering their growth and integration into the team.</li>
        </ul>
        <p><strong>Key Achievements:</strong></p>
        <ul>
          <li>Successfully migrated and modernized the PIC/Multisorte project, delivering a scalable and accessible solution aligned with the latest design and development standards.</li>
          <li>Mentored junior developers, helping them quickly adapt to the team's processes and technologies, which improved team productivity and cohesion.</li>
        </ul>
        <p><strong>Technologies, Methodologies & Tools</strong> Angular, TypeScript, Rxjs, NGRX, SCSS, HTML5, Module Federation, ContentStack (Headless CMS), Git, GitLab, Jira, Agile (Scrum), Accessibility Standards (W3C), Continuous Integration/Continuous Deployment (CI/CD), Micro Front-End Architecture</p>
      `
    },
    {
      summary: {
        strong: 'Brq Digital Solutions | Junior Frontend Developer',
        p: 'October 2019 - April 2021'
      },
      text: `<p>Assigned to the client Itaú</p>
        <ul>
          <li>Developed and maintained front-end for mobile SPA applications for Itaú's retail banking app, focusing on accessibility improvements, performance optimization, and evolutionary enhancements.</li>
          <li>Delivered key features for projects such as Life Insurance and Insurance Homebroker, improving user flows, enhancing accessibility, and adding new functionalities.</li>
          <li>Successfully migrated Angular projects from version 6 to version 12, ensuring compatibility, performance, and adherence to modern development standards.</li>
          <li>Wrote and maintained unit tests with Jasmine and Karma, ensuring robust and error-free code.</li>
          <li>Managed deployment processes in development environments to support testing and continuous integration workflows.</li>
          <li>Collaborated closely with UX/UI designers to improve interfaces, ensuring alignment with accessibility standards (W3C) and enhancing user experience.</li>
          <li>Participated in scrum ceremonies (daily stand-ups, sprint planning, retrospectives) and contributed to the refinement of new features in collaboration with the business team.</li>
          <li>Provided constructive feedback during code reviews and shared ideas for improving overall development processes and project workflows.</li>
        </ul>
        <p><strong>Technologies, Methodologies & Tools</strong> Angular (6-12), TypeScript, Rxjs, NGRX, SCSS, HTML5, Karma, Jasmine, Git, GitLab, Jira, Agile (Scrum), Accessibility Standards (W3C), Continuous Integration/Continuous Deployment (CI/CD)</p>
      `
    }
  ])
}
