export class CounterService {

  current_trans: number[];

  constructor() {
    this.current_trans = [];
    this.current_trans.push(0);
  }
  updateCount() {
    this.current_trans[0] =  this.current_trans[0] + 1;
  }
}
