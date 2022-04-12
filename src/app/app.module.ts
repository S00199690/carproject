import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PeopleModule } from './people.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './user.service';
import { PeopleService } from './people.service';

const routes = [
  {
    path: 'people',
    component: PeopleListComponent
  },
  { path: 'create-entry', component: CreatePersonComponent },
  { path: '**', redirectTo: 'sign-in' },
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(routes),
  ],
  providers: [PeopleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
