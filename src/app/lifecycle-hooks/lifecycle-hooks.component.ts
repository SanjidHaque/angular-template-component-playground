import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DoCheck,
  inject,
  OnChanges,
  OnInit,
  NgZone,
  SimpleChanges
} from '@angular/core';
import {from} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: false,
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css',
})

export class LifecycleHooksComponent {
  counter = 0;
  destroyRef = inject(DestroyRef);
  person = [
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'Brave', email: 'john@gmail.com'},
  ]

  ngZone = inject(NgZone);

  constructor() {
    console.log('Constructor called');
    //const id = setInterval(() => this.counter++, 1000);

    // Stop the timer when the component is destroyed.
    this.destroyRef.onDestroy(() => clearInterval(1));

    //from([1,2,3,4,5,6,7,8,9]).pipe(takeUntilDestroyed()).subscribe(console.log);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called');
  }

  ngOnInit() {
    console.log('ngOnInit() called');

    // This won't work here, because no injection context is available
    // from([1,2,3,4,5,6,7,8,9]).pipe(takeUntilDestroyed()).subscribe(console.log);

  }

  ngDoCheck() {
    console.log('ngDoCheck() called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }


  getEmail(id: number) {
    console.log('getEmail() called');

    //setTimeout(() => {this.counter = this.counter + 1;},0) //For Avoiding expression has been changed error
    //Promise.resolve().then(() => {this.counter = this.counter + 1;}) //For Avoiding expression has been changed error

    return this.person.find(x => x.id === id)?.email;
  }

  mouseOverDiv() {
    console.log('mouseOverDiv() called');
  }

  clickButton() {
    console.log('clickButton() called');
  }

}
