import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Person} from "./person";
import {UserService} from "./user.service";

@Component({
  selector: 'app-change-detection',
  standalone: false,
  template: `
    <h3>Change Detection in Action</h3>
<!--    <button (click)="changeUserName()" >Change user</button>-->
    <button (click)="changeName()" >Change Name</button>
<!--    <app-child-one [person]="userService.user$ | async" [age]="age" (toggleNotify)="toggleNotify()"></app-child-one>-->
<!--    <app-child-one [person$]="userService.user$" [age]="age" (toggleNotify)="toggleNotify()"></app-child-one>-->
    <app-child-one [person]="person" [age]="age" (toggleNotify)="toggleNotify()"></app-child-one>
<!--    <app-child-one></app-child-one>-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ChangeDetectionComponent {
  person: Person;
  age = 30;

  constructor(private changeDetectorRef: ChangeDetectorRef, public userService: UserService) {
    this.person = new Person(`Sanjid-${Math.random()}`, Math.random())
  }

  ngDoCheck() {
    console.log('ngDoCheck() called - ChangeDetectionComponent');
  }

  changeName() {
    //this.age = Math.random()
    //this.person = JSON.parse(JSON.stringify({ id: 2, firstName: 'Sanjid - Changed via immutability' }));
    this.person.firstName = 'Sanjid - Changed';
  }

  toggleNotify() {
    console.log('toggleNotify() called');
  }

  changeUserName() {
    this.userService.loadUser({firstName: 'Bob', id: 12 });
  }
}
