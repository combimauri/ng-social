import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngsocialCollapseText]',
})
export class CollapseTextDirective implements AfterViewInit {
  private readonly THREE_LINES_HEIGHT = 72;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const scrollHeight = this.elementRef.nativeElement.scrollHeight;

    if (scrollHeight > this.THREE_LINES_HEIGHT) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'height',
        `${this.THREE_LINES_HEIGHT}px`,
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'overflow',
        `hidden`,
      );
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'post__text--more-visible',
      );
    }
  }
}
