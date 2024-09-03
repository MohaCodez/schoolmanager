import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightNA]'
})
export class HighlightNADirective implements OnInit {
  @Input() appHighlightNA? : string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appHighlightNA === 'N/A') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
}
