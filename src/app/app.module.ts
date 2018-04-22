import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {RestangularModule} from 'ngx-restangular';
import {AccountService} from './services/account.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import { KweetdisplayComponent } from './kweetdisplay/kweetdisplay.component';
import {KweetService} from './services/kweet.service';
import { LoginComponent } from './login/login.component';


export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080/Kwetter/api');
}
const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: UserComponent},
  {path: 'displaykweets', component: KweetdisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserprofileComponent,
    RegistrationComponent,
    KweetdisplayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountService, KweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
