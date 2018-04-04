import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  user: {email: string, subscription: string, password: string};

  constructor() {
    this.user = {email: '', subscription: '', password: ''};
  }

  onSubmit() {
    this.user.email = this.signupForm.value.mail;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    this.submitted = true;

    this.signupForm.reset();
    this.signupForm.form.patchValue({subscription: 'advanced'});
  }


}
