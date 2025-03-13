import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { name: 'E-Commerce App', tech: 'Angular, Node.js, MySQL' },
    { name: 'Task Manager', tech: 'Angular, PostgreSQL' }
  ];
}
