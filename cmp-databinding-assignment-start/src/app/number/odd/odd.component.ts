import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd-num',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddNumberComponent{
  @Input() currentTime: {time: number};
  name: string;

  constructor(){
    this.name = 'Odd';
  }


}
