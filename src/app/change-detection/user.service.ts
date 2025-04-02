import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private subject = new BehaviorSubject<Person>({firstName: 'Sanjid from Observable', id: 21});
  user$: Observable<Person> = this.subject.asObservable();

  loadUser(user: Person): void {
    this.subject.next(user);
  }

}

