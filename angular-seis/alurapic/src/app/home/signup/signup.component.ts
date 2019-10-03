import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
 


@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.signupForm = this.formBuilder.group({
            userName: ['', [
                                Validators.required, 
                                Validators.minLength(2), 
                                Validators.maxLength(30), 
                                lowerCaseValidator
                            ]
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

    ngOnInit(){}
}