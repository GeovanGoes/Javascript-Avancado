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
        console.log(this.el);
        console.log(this.el.nativeElement);
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness}`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        console.log(this.el);
        console.log(this.el.nativeElement);
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
        console.log('darken off');
    }
}