import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { UserListService } from './services/service-user-list/user-list.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { GetUserByIdService } from './services/service-get-user-by-id/get-user-by-id.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    UserListComponent,
    UserByIdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    LoginService,
    UserListService,
    GetUserByIdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
