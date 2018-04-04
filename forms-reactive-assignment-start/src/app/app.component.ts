import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projForm: FormGroup;
  forbbidenNames =  ['Test'];

  ngOnInit() {
    this.projForm = new FormGroup({
      'projectName': new FormControl(null,
        [Validators.required, this.forbiddenProjName.bind(this)]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projForm);
  }

  forbiddenProjName(control: FormControl): {[s: string]: boolean} {
    if (this.forbbidenNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
