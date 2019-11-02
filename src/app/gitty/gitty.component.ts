import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repository } from '../class/repository';
import { User } from '../class/user';
import { GitService } from '../services/git.service';
@Component({
  selector: 'app-gitty',
  templateUrl: './gitty.component.html',
  styleUrls: ['./gitty.component.css']
})
export class GittyComponent implements OnInit {
  user:User;
  rep:Repository;
  
  @Output() emitSearch = new EventEmitter<any>()
  // service:GitService;
  termSearch:string;
  constructor(public gitService:GitService, public repoService:GitService) { 
    // this.service=gitService;
  }
  
//   search(){
//     this.emitSearch.emit(this.termSearch);
//     this.termSearch = "";
//     this.gitService.searchUser(this.termSearch);
// }

  search(termSearch){
    this.gitService.searchUser(this.termSearch).then(
      (success)=>{
        this.user = this.gitService.userProfile;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getRepository(this.termSearch).then(
      (success)=>{
        this.rep = this.repoService.reposs;
        },      
        (error)=>{
          console.log(error)
        }
    );
  }

  ngOnInit() {
  this.search("bellahOchola");
  }

}

