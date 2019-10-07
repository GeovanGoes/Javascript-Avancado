import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImediateClickModule } from 'src/app/shared/directives/imediate-click/imediate-click.module';


@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [ CommonModule, 
        ReactiveFormsModule, 
        VMessageModule, 
        FormsModule, 
        RouterModule, 
        PhotoModule,
        ImediateClickModule ]
})
export class PhotoFormModule { }