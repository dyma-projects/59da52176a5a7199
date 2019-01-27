import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[color]'
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) windowClick($event) {
    switch ($event.keyCode) {
      case 37:  // gauche
        this.changeColor('blue');
        break;
      case 38:  // haut
        this.changeColor('green');
        break;
      case 39:  // droite
        this.changeColor('red');
        break;
      case 40:  // bas
        this.changeColor('grey');
        break;
      default:  // autre
        return;
    }
    // console.log($event);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
