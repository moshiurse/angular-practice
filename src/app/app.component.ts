import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  defaultQues: string = 'pet';
  answer: string = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    gender: '',
    secret: '',
    answer: ''
  }

  submitted = false;

  suggestUserName() {
    const suggestedName = 'moshiurse';
        //setvalue set the whole form value
    this.form.setValue({
      userData: {
        username: suggestedName,
        email: suggestedName + "@mail.com"
      },
      gender: 'male',
      secret: 'pet',
      quesAns: 'aaaaa'
    })

    // patchvalue only set some value
    // this.form.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // })
  }

  // onSubmit(form: NgForm){
  //   console.log('Submitted', form);
  // }

  // access with ViewChild()
  onSubmit(){
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secret = this.form.value.secret;
    this.user.gender = this.form.value.gender;
    this.user.answer = this.form.value.quesAns;

    this.form.reset();
  }
}
