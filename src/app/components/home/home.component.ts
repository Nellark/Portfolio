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

  // Method to initialize IntersectionObserver
  initIntersectionObserver(): void {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const targetElement = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // Add the animate class when the card is in view
          targetElement.classList.add('animate');
          // Apply staggered delay using animationDelay
          targetElement.style.animationDelay = `${index * 0.1}s`;
        } else {
          // Remove the animate class when the card leaves the view, resetting the animation
          targetElement.classList.remove('animate');
          targetElement.style.animationDelay = '0s'; // Reset the delay
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    skillCards.forEach((card) => {
      observer.observe(card);
    });
  }
}
