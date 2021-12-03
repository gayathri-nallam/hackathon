import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAccommodationComponent } from './request-accommodation/request-accommodation.component';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RequestAccommodationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
