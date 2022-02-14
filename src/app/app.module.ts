import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { profileComponent } from './profile/profile.component'
import { ProfileService } from './profile-service.service';


import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    profileComponent,
    NavBarComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }