import { CreatePersonComponent } from './create-person/create-person.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PeopleListComponent, CreatePersonComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    exports: [PeopleListComponent, CreatePersonComponent]
})
export class PeopleModule { }
