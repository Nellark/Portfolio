import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isSidebarOpen = false;
  isMenuOpen = false;

  sidebarItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeSidebarAndNavigate(sectionId: string) {
    this.isSidebarOpen = false;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sidebarItems.forEach(item => {
      if (this.isSectionInView(item.id)) {
        document.querySelector(`a[href="#${item.id}"]`)?.classList.add('active');
      } else {
        document.querySelector(`a[href="#${item.id}"]`)?.classList.remove('active');
      }
    });
  }

  isSectionInView(sectionId: string): boolean {
    const section = document.getElementById(sectionId);
    if (!section) return false;
    
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
