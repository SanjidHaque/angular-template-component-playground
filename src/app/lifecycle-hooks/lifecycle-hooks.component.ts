import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: false,
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})

export class LifecycleHooksComponent {
  counter = 0;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges() called');
  }

  ngOnInit() {
    console.log('ngOnInit() called');
    setTimeout(() => {
      this.counter++;
    }, 3000);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }


  update() {
    //this.counter++;
  }
}
