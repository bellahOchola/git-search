import { Component, OnInit } from '@angular/core';
import { Repository } from '../class/repository';
@Component({
  selector: 'app-gitty',
  templateUrl: './gitty.component.html',
  styleUrls: ['./gitty.component.css']
})
export class GittyComponent implements OnInit {
  repository:Repository[]=[

  ]
  constructor() { }

  ngOnInit() {
  }

}
