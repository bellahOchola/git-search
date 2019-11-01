import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:User[]=[
    new User('bellahOchola', 23, 20, new Date(2019,8,20))
  ]

  constructor() { }

  ngOnInit() {
  }

}
