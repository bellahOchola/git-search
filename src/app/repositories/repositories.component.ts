import { Component, OnInit } from '@angular/core';
import { Repository } from '../class/repository';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  rep:Repository;
  constructor(public repoService:GitService) { }

  getRepo(termSearch){
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
    this.getRepo('bellahOchola');
  }

}
