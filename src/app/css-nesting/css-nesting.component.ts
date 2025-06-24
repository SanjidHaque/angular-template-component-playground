import { Component } from '@angular/core';

@Component({
  selector: 'app-css-nesting',
  standalone: false,
  templateUrl: './css-nesting.component.html',
  styles: `
    ul {
      li {
        p {
          border: 5px solid red;
        }
      }
    }
  `,
  // styleUrls: ['./css-nesting.component.scss']
})

export class CssNestingComponent {

}
