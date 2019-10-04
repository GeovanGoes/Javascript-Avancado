import { Directive, ElementRef } from "@angular/core";
import { PlatformDetectorService } from "../../../core/platform/platform-detector.service";




@Directive({
    selector: '[imediateClick]'
})
export class ImediateClickDirective {


    constructor(private element: ElementRef<any>, private platformDetector: PlatformDetectorService) {

    }
}