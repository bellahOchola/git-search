import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GittyComponent } from './gitty/gitty.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { DateCountPipe } from './pipes/date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GittyComponent,
    UserDetailsComponent,
    FormSearchComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
