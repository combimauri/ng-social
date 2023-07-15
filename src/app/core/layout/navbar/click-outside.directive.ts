import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[ngsocialClickOutside]',
})
export class ClickOutsideDirective {
  @HostListener('document:click', ['$event'])
  detectClickOutside(event: PointerEvent): void {
    if (
      this._detectClicks &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.clickOutside.emit();
    }
  }

  @Input() set detectClicks(detectClicks: boolean) {
    timer(500).subscribe(() => (this._detectClicks = detectClicks));
  }

  @Output() private clickOutside = new EventEmitter<void>();

  private _detectClicks = false;

  constructor(private elementRef: ElementRef) {}
}
