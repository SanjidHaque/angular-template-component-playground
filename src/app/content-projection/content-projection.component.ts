import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {PipesComponent} from "../pipes/pipes.component";
import {timer} from "rxjs";


@Component({
  selector: 'app-content-projection',
  standalone: false,
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})

export class ContentProjectionComponent implements OnInit, AfterViewInit {
  shouldShow = false;
  user = {
    id: 1,
    name: 'Sanjid',
  }

  @ViewChild(PipesComponent, { static: false }) pipesComponent : PipesComponent;
  @ViewChildren(PipesComponent) pipesComponentChildren = null;
  @ViewChild('inputBox', {static: false}) inputBox: ElementRef;

  ngOnInit() {
    console.log('ngOnInit() before timer => ', this.pipesComponentChildren);
    timer(2500).subscribe(x =>
    {
      this.shouldShow = true;
    });

    timer(3000).subscribe(x =>
    {
      console.log('ngOnInit() after 3000ms => ', this.pipesComponentChildren);
    })
    console.log('Logging ChildPipeComponent when ViewChild\'s static property set true at ngOnInit() =>', this.pipesComponent);
    // console.log('ViewChild\'s value at ngOnInit() =>', this.inputBox?.nativeElement.value);
  }

  ngAfterViewInit() {
    console.log('Logging ChildPipeComponent when ViewChild\'s static property set true at ngAfterViewInit() =>', this.pipesComponent);
    // console.log('ViewChild\'s value at ngAfterViewInit() =>', this.inputBox.nativeElement.value);
  }
}
