import { Component, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { ModelY } from "./model-y/model-y";
import { ModelX } from "./model-x/model-x";
import { Model3 } from "./model-3/model-3";
import { ModelS } from "./model-s/model-s";
import { Powerwall } from "./powerwall/powerwall";
import { Carga } from "./carga/carga";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, HeroSection, ModelY, ModelX, Model3, ModelS, Powerwall, Carga],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  @ViewChild('landingHeader', { read: ElementRef }) headerRef!: ElementRef;
  @ViewChildren('landingSection', { read: ElementRef }) sectionRefs!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainerRef!: ElementRef;

  ngAfterViewInit(): void {

    const headerEl = this.headerRef.nativeElement.querySelector('#landing-header');
    const sections = this.sectionRefs.map(ref => ref.nativeElement.querySelector('.landing-section'));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const color = entry.target.getAttribute('data-header-color');

          headerEl.classList.remove('text-white', 'text-black');

          if (color) {
            headerEl.classList.add(`text-${color}`);
          }

        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section!));
  }
}
