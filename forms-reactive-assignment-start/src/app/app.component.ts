import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projForm: FormGroup;
  submitted = false;
  project: {name: string, mail: string, status: string};
  forbiddenNames =  ['Test'];

  ngOnInit() {
    this.project = {name: '', mail: '', status: ''};
    this.projForm = new FormGroup({
      'projectName': new FormControl(null,
        Validators.required, this.forbiddenProjName.bind(this)),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });
  }

  onSubmit() {
    this.project.name = this.projForm.value.projectName;
    this.project.mail = this.projForm.value.mail;
    this.project.status = this.projForm.value.projectStatus;
    this.submitted = true;
    this.projForm.reset({projectStatus: 'stable'});
  }

  forbiddenProjName(control: FormControl): Promise<any>| Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(setTimeout(() => {
          if (this.forbiddenNames.indexOf(control.value) !== -1) {
            return resolve({'nameIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1100));
      }
    );
    return promise;
  }
}
