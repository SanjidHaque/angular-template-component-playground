import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  amount = 123.1493;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  person = {
    name: "Alice",
    age: 30,
    details: {
      occupation: "Engineer",
      location: "New York",
      yearsOfExperience: 5,
      skills: ["JavaScript", "Python", "React", "Node.js"]
    }
  };

  keepSamePropOrder() { return 0; } // For this, angular keyvalue pipe will keep the same order in object property
}
