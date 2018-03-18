import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('scrollbox') scroll_box: ElementRef;
  numberElements = [];

  onTimePassed(timeInfo:{currentTime: number}){
    this.scroll_box.nativeElement.scrollTop = this.scroll_box.nativeElement.scrollHeight;
    this.numberElements.push(timeInfo.currentTime);
  }
}
