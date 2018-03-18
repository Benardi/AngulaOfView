import { Component, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
   selector: 'app-game-control',
   templateUrl: './game-control.component.html',
   styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {

  @Output() timePassed = new EventEmitter<{currentTime: number}>();
  time: number;
  ref: any;

  constructor(){
    this.time = 0;
  }

  onStartGame(){

    this.ref = setInterval(() => {

      this.timePassed.emit({
        currentTime: this.time
      });
      this.time += 1;

    }, 1000);

  }

  onStopGame(){
    clearInterval(this.ref);
  }


}
