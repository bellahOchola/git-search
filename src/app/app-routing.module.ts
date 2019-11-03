import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GittyComponent } from './gitty/gitty.component';
import { RepositoriesComponent } from './repositories/repositories.component';


const routes: Routes = [
  { path:'gitty', component:GittyComponent },
  { path:'repositories', component:RepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
