import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNumber = 0;
  show = false;
  logs = [];

  revealText(){
    this.show = !this.show;
    this.myNumber += 1;
    this.logs.push(this.myNumber);
  }

}
