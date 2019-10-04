import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./NewUser";
import { SignUpService } from "./signup.service";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform/platform-detector.service";
 


@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    @ViewChild('inputEmail')
    inputEmail: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder, 
        private userNotTakeService: UserNotTakenValidatorService, 
        private signupService: SignUpService,
        private router: Router,
        private platformDetectionService: PlatformDetectorService)
    {
        this.signupForm = this.formBuilder.group({
            userName: ['', [
                                Validators.required, 
                                Validators.minLength(2), 
                                Validators.maxLength(30), 
                                lowerCaseValidator
                            ],
                            this.userNotTakeService.checkUserNameTaken()
                        ],
            fullName: ['', [
                                Validators.required, 
                                Validators.minLength(2), 
                                Validators.maxLength(40)
                            ]
                        ],
            password: ['', [
                                Validators.required, 
                                Validators.minLength(8), 
                                Validators.maxLength(14)
                            ]
                        ],
            email: ['', [       
                                Validators.required, 
                                Validators.email
                        ]
                    ]
        });
    }

    ngOnInit(){
        if (this.platformDetectionService.isPlatformBrowser())
            this.inputEmail.nativeElement.focus();
    }


    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser).subscribe(() => {
            console.log('registrado com sucesso!');
            this.router.navigate(['']);
        }, err => console.log(err));
    }
}