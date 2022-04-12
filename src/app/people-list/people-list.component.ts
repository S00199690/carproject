import { PeopleService } from '../people.service';
import { CognitoService } from '../cognito.service';

import { tap, switchMap, filter } from 'rxjs/operators';
import { People } from '../people.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  personToBeUpdated: People | any;
  isUpdateActivated = false;


 addressBook:People[];

  constructor(private PeopleService: PeopleService, private cognitoService:CognitoService, public userService:UserService) {
  }

  ngOnInit() {
    this.getPeople();
  }


  public isAdmin():boolean {
    return this.userService.isAdmin();
  }


  getPeople() {
    this.PeopleService.getAllPeople().subscribe(
      people => {
        this.addressBook=people;
        }
    )
  }

  deletePerson(personId: string) {
    this.PeopleService.deletePerson(personId).subscribe(result => {
      this.getPeople();
    });

  }

  showUpdateForm(person: People) {
    this.isUpdateActivated = true;
    this.personToBeUpdated = {...person};
  }


  updatePerson(updateForm: { value: People; }) {
    this.PeopleService.updatePerson(
      this.personToBeUpdated.id, updateForm.value).subscribe(result => console.log(result)

    );
    this.isUpdateActivated = false;
    this.personToBeUpdated = null;
  }


  public isAuthenticated(): boolean {
    return this.cognitoService.isAuthenticated();
  }

}
