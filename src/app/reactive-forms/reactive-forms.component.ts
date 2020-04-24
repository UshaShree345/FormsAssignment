import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  constructor() { }
  registrationForm: FormGroup;

  ngOnInit(): void {
   this.registrationForm = new FormGroup({
     email: new FormControl(null, [Validators.required, Validators.minLength(6)]),
     password: new FormControl(),
     skills: new FormArray([new FormControl])
   });
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get skills(){
    return this.registrationForm.get('skills') as FormArray;
  }
  addSkill(){
    this.skills.push(new FormControl());
  }
  removeSkill(index:number){
    this.skills.removeAt(index);
  }
  submitForm(){
  //  console.log(this.skills);
   console.log(this.registrationForm.value);
 // console.log(this.email);
  //this.registrationForm.reset();
  }

}
