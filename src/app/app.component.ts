import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form16=this.fr.group({
    Firstname: ['',[ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    LastName:  ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    EmailID :['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    DOB:['', Validators.required],
    PhoneNumber :['', [Validators.required , Validators.pattern('^[7-9][0-9]{9}$')]]


  });
  constructor(private fr:FormBuilder){}
  
    

idate=new Date().toISOString().slice(0,10)


  
}
