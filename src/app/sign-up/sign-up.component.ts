import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.cognitoService.getUser()
      .then((user: any) => {
        this.user = user.attributes;
      });
  }


  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      }).catch(() => {
        this.loading = false;
      });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/signIn']);
      }).catch(() => {
        this.loading = false;
      });
  }


  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
      .then(() => {
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
  }
}
