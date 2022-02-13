import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieDashboardComponent,
    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,  
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
