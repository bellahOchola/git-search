import { Injectable } from '@angular/core';
import {Repository } from '../class/repository';
import { User } from '../class/user';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
// import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  userProfile:User;
  reposs:Repository;

  constructor(private http:HttpClient) { 
    this.userProfile = new User("","","","",0 ,0, 0, "",new Date);
    this.reposs = new Repository('','','', 0, 0, '',new Date);
  }

  searchUser(termSearch:string){

    interface Received {
      url:string,
      login: string;
      html_url:string;
      location:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }
  let searchEndpoint = "https://api.github.com/users/"+termSearch+"?api_key="+environment.gittyKey;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get<Received>(searchEndpoint).toPromise().then(
          (results)=>{
            // console.log(results);
             this. userProfile= results;
            console.log(this.userProfile);
            resolve()

          },
          (error)=>{
            console.log(error)
            reject()
          })
    })
    return promise;
  }

  getRepository(termSearch){
    interface Repos{
      name:string;  
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+termSearch+"/repos?order=created&sort=asc?access_token="+environment.gittyKey).toPromise().then(
        (results) => {
          this.reposs= results;
          console.log(this.reposs);
          
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

}
