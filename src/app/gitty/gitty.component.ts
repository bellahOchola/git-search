import { Component, OnInit } from '@angular/core';
import { Repository } from '../class/repository';
@Component({
  selector: 'app-gitty',
  templateUrl: './gitty.component.html',
  styleUrls: ['./gitty.component.css']
})
export class GittyComponent implements OnInit {
  repository:Repository[]=[
    new Repository('Pizza Deliciosa','This app enables one to order pizza and the order is also delivered on request','Javascript',new Date(2019,9,16)),
  ]
  constructor() { }

  ngOnInit() {
  }

}
