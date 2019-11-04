import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { User } from '../class/user';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  gitService:GitService;
  @Output() emitSearch = new EventEmitter<any>()
  termSearch:string;
   
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.emitSearch.emit(this.termSearch);
    // this.termSearch = "";
    this.gitService.searchUser(this.termSearch);
}
}
