import { Component, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
   selector: 'app-game-control',
   templateUrl: './game-control.component.html',
   styleUrls: ['./game-control.component.css']
})

export class GameControlComponent {

  @Output() counter = new EventEmitter<{time: number}>();
  time: number;

  constructor(){
    this.time = 0;
  }

  onStartGame(){

    setInterval(() => {

      this.counter.emit({
        time: this.time
      });
      this.time += 1;
      console.log(this.time);

    }, 1000);

  }




}
