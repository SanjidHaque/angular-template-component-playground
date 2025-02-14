import { Component } from '@angular/core';
import {PipesComponent} from "../pipes/pipes.component";

@Component({
  selector: 'app-content-projection',
  standalone: false,
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {
  protected readonly PipesComponent = PipesComponent;
  user = {
    id: 1,
    name: 'Sanjid',
  }
}
