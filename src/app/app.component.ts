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
    console.log('Submitted', this.form);
  }
}
