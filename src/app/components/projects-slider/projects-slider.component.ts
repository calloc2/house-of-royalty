import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss']
})
export class ProjectsSliderComponent {
  images = [
    { src: '/assets/project1.jpg', alt: 'Project 1' },
    { src: '/assets/project2.jpg', alt: 'Project 2' },
    { src: '/assets/project3.jpg', alt: 'Project 3' },
    { src: '/assets/project4.webp', alt: 'Project 4' },
    { src: '/assets/project5.webp', alt: 'Project 5' },
    { src: '/assets/project6.webp', alt: 'Project 6' },
    { src: '/assets/project7.webp', alt: 'Project 7' },
    { src: '/assets/project8.webp', alt: 'Project 8' },
    { src: '/assets/project9.webp', alt: 'Project 9' },
    { src: '/assets/project10.webp', alt: 'Project 10' },
    { src: '/assets/project11.webp', alt: 'Project 11' },
    { src: '/assets/project12.webp', alt: 'Project 12' },
    { src: '/assets/project13.webp', alt: 'Project 13' },
    { src: '/assets/project14.webp', alt: 'Project 14' },
    { src: '/assets/project15.webp', alt: 'Project 15' },
    { src: '/assets/project16.webp', alt: 'Project 16' },
    { src: '/assets/project17.webp', alt: 'Project 17' },
    { src: '/assets/project18.webp', alt: 'Project 18' },
    { src: '/assets/project19.webp', alt: 'Project 19' },
    { src: '/assets/project20.webp', alt: 'Project 20' }
  ];

  focusedImage: { src: string, alt: string } | null = null;

  openImage(img: { src: string, alt: string }) {
    this.focusedImage = img;
  }

  closeImage() {
    this.focusedImage = null;
  }
}
