import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-even-num',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenNumberComponent{

  @Input() currentTime: number;
  name: string;

  constructor(){
    this.name = 'Even';
  }


}
