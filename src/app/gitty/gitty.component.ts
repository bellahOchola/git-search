import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
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
  termSearch:string; 
//   @Output() emitSearch = new EventEmitter<any>()
//   // termSearch:string;
  
 
  constructor(public gitService:GitService, public repoService:GitService) { 
    // this.termSearch= new User;
    // this.gitService=GitService;
  }

//   search(){
//     this.emitSearch.emit(this.termSearch);
//     // this.termSearch = "";
//     this.gitService.searchUser(this.termSearch);
// }
searching(termSearch){
    this.gitService.searchUser(termSearch).then(
      (success)=>{
        this.user = this.gitService.userProfile;
        console.log(this.user);
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getRepository(termSearch).then(
      (success)=>{
        this.rep = this.repoService.reposs;
        console.log(this.rep);
        
        },      
        (error)=>{
          console.log(error)
        }
    );
  }

  ngOnInit() {
  this.searching("bellahOchola");
  }

}

