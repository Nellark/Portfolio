import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('carousel', { static: false }) carousel: ElementRef | undefined;

  ngOnInit(): void {
    // Initialize the IntersectionObserver when the component is initialized
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
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');

  
          const targetElement = entry.target as HTMLElement;

  
          targetElement.style.animationDelay = `${index * 0.1}s`; 
        }
      });
    }, {
      threshold: 0.9, 
    });

    skillCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
