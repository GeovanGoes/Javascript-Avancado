import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {


  photoForm: FormGroup;
  preview: string;
  file: File;



  constructor(private formBuilder: FormBuilder, private photService: PhotoService, private router: Router) { 

  }


  ngOnInit() {

    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(){
    const dados = this.photoForm.getRawValue();
    console.log(dados);
    console.log(this.file);

    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    console.log(description);
    console.log(allowComments);


    this.photService.upload(description, allowComments, this.file).subscribe(() => {
      this.router.navigate(['']);
    }, err => console.log(err));
  }

  handleFile(file: File) {
    this.file = file;
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => this.preview = event.target.result;
    fileReader.readAsDataURL(file);
  }
}
