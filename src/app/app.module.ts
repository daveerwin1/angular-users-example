import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { PrivatepageComponent } from './privatepage/privatepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicpageComponent,
    PrivatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
