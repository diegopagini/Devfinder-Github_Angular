import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit {
  @Input() appTheme: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.setAttribute(this.appTheme, '');
  }
}
