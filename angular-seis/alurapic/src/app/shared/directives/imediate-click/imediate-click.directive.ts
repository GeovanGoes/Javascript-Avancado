import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "../../../core/platform/platform-detector.service";




@Directive({
    selector: '[imediateClick]'
})
export class ImediateClickDirective implements OnInit {


    constructor(private element: ElementRef<any>, private platformDetector: PlatformDetectorService) { }
    
    ngOnInit() {
        this.platformDetector.isPlatformBrowser() && this.element.nativeElement.click();
    }
}