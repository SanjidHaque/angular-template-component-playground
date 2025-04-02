import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import {Person} from "./person";
import {Observable} from "rxjs";

@Component({
  selector: 'app-child-one',
  standalone: false,
  template: `
    <h4>Child component</h4>
        <p> Name in child component {{ person?.firstName }}, {{ age }} </p>
        <p>Firstname (object mutation): {{ firstName}}</p>
<!--    <p> Name in child component {{ (person$ | async)?.firstName }}, {{ age }} </p>-->
    <button (click)=" notify()">Toggle Notification</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent {
  @Input() person: Person | null;
  // @Input() person$: Observable<Person> | null;

  @Input() age = 30;
  @Output() toggleNotify = new EventEmitter<string>();

  // person = { firstName: 'Sanjid - static', id: 1 };
  // age = 32;

  firstName? = '';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck() {
    if (this.person?.firstName !== this.firstName) {
      this.changeDetectorRef.markForCheck(); // When you use object mutation
      this.firstName = this.person?.firstName;
    }

    console.log('ngDoCheck() called - ChildOneComponent');
  }

  notify () {
    this.toggleNotify.emit('Update occurs');
  }
}
