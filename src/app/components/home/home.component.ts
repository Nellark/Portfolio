import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FooterComponent, AboutComponent, ProjectsComponent, DashboardComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('carousel', { static: false }) carousel: ElementRef | undefined;

  ngOnInit(): void {
    this.initIntersectionObserver();
  }

  ngAfterViewInit(): void {
    // Initialize the slick carousel after view is initialized
    // @ts-ignore
    $(this.carousel?.nativeElement).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      variableWidth: true,
      speed: 500,
      easing: 'ease',
    });
  }


  initIntersectionObserver(): void {
    const skillIcons = document.querySelectorAll('.skill-icon');  

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const targetElement = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          targetElement.classList.add('fall');
          targetElement.style.animationDelay = `${index * 0.2}s`;
        } else {
          targetElement.classList.remove('fall');
          targetElement.style.animationDelay = '0s'; 
        }
      });
    }, {
      threshold: 0.5, 
    });

    skillIcons.forEach((icon) => {
      observer.observe(icon);
    });
  }
}
