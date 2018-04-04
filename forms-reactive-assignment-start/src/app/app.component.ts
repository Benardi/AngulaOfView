import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projForm: FormGroup;

  ngOnInit() {
    this.projForm = new FormGroup({
      'projectName': new FormControl(null),
      'mail': new FormControl(null),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projForm);
  }
}
