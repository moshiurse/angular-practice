import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  form: FormGroup;
  forbiddebUserNames = ['moshiur', 'ela'];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.form);
  }

  getControls() {
    return (<FormArray>this.form.get('hobbies')).controls;
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
    
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddebUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  } 

}
