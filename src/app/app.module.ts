import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppoinmentService } from './appoinments/appoinment.service';

//must use along with http services
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AppoinmentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppoinmentService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
