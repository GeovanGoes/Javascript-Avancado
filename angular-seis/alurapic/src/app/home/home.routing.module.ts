import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
        { path: 'signup', component: SignUpComponent },
        { path: '', component: SignInComponent },
    ]}
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

