import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.form.setValue({
      userData: {
        username: 'Moshiur',
        email: 'moshiur' + "@mail.com"
      },
      gender: 'male',
      hobbies: []
    });

    this.form.patchValue({
      userData: {
        username: 'Ela',
      }
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

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'rmoshiur705@gmail.com'){
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    })

    return promise;
  }

}
