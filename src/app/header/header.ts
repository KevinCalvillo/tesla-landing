import { Component, AfterViewInit, ViewChildren, ViewChild, ElementRef, QueryList } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {

  // Con @ViewChildren, obtenemos todos los <li> que marcamos con #menuItem
  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;

  // Con @ViewChild, obtenemos el div del backdrop que marcamos con #menuBackdrop
  @ViewChild('menuBackdrop') menuBackdrop!: ElementRef;

  // Este método se ejecuta cuando el HTML del componente ya está listo
  ngAfterViewInit(): void {
    const menuBackdropEl = this.menuBackdrop.nativeElement;

    // Recorremos cada uno de los <li> encontrados
    this.menuItems.forEach((itemRef: ElementRef) => {
      const itemEl = itemRef.nativeElement;

      // Añadimos el evento para cuando el ratón entra
      itemEl.addEventListener('mouseenter', () => {
        const { left, top, width, height } = itemEl.getBoundingClientRect();

        menuBackdropEl.style.setProperty('--left', `${left}px`);
        menuBackdropEl.style.setProperty('--top', `${top}px`);
        menuBackdropEl.style.setProperty('--width', `${width}px`);
        menuBackdropEl.style.setProperty('--height', `${height}px`);

        menuBackdropEl.style.opacity = '1';
        menuBackdropEl.style.visibility = 'visible';
      });

      // Añadimos el evento para cuando el ratón sale
      itemEl.addEventListener('mouseleave', () => {
        menuBackdropEl.style.opacity = '0';
        menuBackdropEl.style.visibility = 'hidden';
      });
    });
  }
}
