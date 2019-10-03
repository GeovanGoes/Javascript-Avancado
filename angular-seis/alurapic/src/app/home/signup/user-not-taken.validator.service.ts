import { Injectable } from "@angular/core";
import { SignUpComponent } from "./signup.component";
import { AbstractControl } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class UserNotTakenValidatorService {
    constructor(private signupService: SignUpComponent) {

    }


    checkUserNameTaken() {
        return (control: AbstractControl) => null;
    }
} 