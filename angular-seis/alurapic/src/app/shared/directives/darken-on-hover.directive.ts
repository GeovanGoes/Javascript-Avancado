import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness: string = '70%';

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('mouseover')
    darkenOn() {
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness}`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}