import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit, OnDestroy {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  private interactionListener!: () => void;

  constructor(private renderer: Renderer2) {}


  async ngAfterViewInit(): Promise<void> {
    try {

      await this.videoPlayer.nativeElement.play();
    } catch (error) {

      console.warn('Video autoplay was blocked by the browser. Waiting for user interaction.');


      this.interactionListener = this.renderer.listen('document', 'click', () => {
        this.videoPlayer.nativeElement.play();


        this.interactionListener();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.interactionListener) {
      this.interactionListener();
    }
  }
}
