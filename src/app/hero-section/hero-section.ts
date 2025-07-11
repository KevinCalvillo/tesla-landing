import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit, OnDestroy {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  // Variable para guardar y luego destruir el listener
  private interactionListener!: () => void;

  constructor(private renderer: Renderer2) {}

  // Usamos 'async' para poder usar 'await' y manejar la promesa de play()
  async ngAfterViewInit(): Promise<void> {
    try {
      // 1. Intentamos reproducir el video
      await this.videoPlayer.nativeElement.play();
      console.log('✅ Video autoplayed successfully on load.');
    } catch (error) {
      // 2. Si falla, el navegador lo bloqueó. Atrapamos el error.
      console.warn('⚠️ Video autoplay was blocked by the browser. Waiting for user interaction.');

      // 3. Creamos un listener que se activará UNA SOLA VEZ con el primer clic del usuario
      this.interactionListener = this.renderer.listen('document', 'click', () => {
        console.log('✅ User interacted. Playing video now.');
        this.videoPlayer.nativeElement.play();

        // Una vez que se ejecuta, nos deshacemos del listener para no tenerlo activo innecesariamente
        this.interactionListener();
      });
    }
  }

  // Buena práctica: nos aseguramos de destruir el listener si el componente se destruye
  ngOnDestroy(): void {
    if (this.interactionListener) {
      this.interactionListener();
    }
  }
}
