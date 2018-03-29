import {Component, DoCheck, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  num_transitions: number[] = this.counterService.current_trans;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
