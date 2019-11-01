import { Component, OnInit } from '@angular/core';
import { Repository } from '../class/repository';
@Component({
  selector: 'app-gitty',
  templateUrl: './gitty.component.html',
  styleUrls: ['./gitty.component.css']
})
export class GittyComponent implements OnInit {
  repository:Repository[]=[
    new Repository('Pizza Deliciosa','This app enables one to order pizza and the order is also delivered on request','Javascript',new Date(2019,9,22)),
    new Repository('Akan Name','This app receives users birthday details and returns their birth day and respective akan mame' ,'HTML',new Date(2019,9,16)),
    new Repository('Portfolio','This app showcases my current works and brief description about what I do','HTML',new Date(2019,9,10)),
    new Repository('Delani Studio','This app showcases the services and description about a photo studio','Javascript',new Date(2019,9,15)),
    new Repository('Quoty-quote','This app enables one to upload new quotes, delete and even view the existing quotes','Angular',new Date(2019,10,19)),
    new Repository('Robinhood','This website enables potential Investors to invest into stocks and bonds of companies of their preference','Javascript',new Date(2019,8,20)),
  ]
  constructor() { }

  ngOnInit() {
  }

}
