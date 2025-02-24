import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  host: {

  }
})

export class PipesComponent {
  text = '';
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

  orders = [{id: 1, name: 'Snacks'}, { id: 2, name: 'Drinks'}];
  invoices = ['#ord01'];

  addOrder() {
   this.orders.push({id: Math.random(), name: `Item${Math.random()}`}); // Mutating the array dont update the view as the pipe was pure
    // this.orders = [{id: 1, name: 'Snacks_Replace'}, { id: 2, name: 'Drinks_Replace'}]; // Replacing the array update's the view if the pipe was impure
  }

  getOrderInvoice(customer: string) {
    console.log('getOrderInvoice() triggered!');
    return `${customer} ordered ${this.orders[0]?.name}, invoice ${this.invoices[0]} sent.`;
  }

  updateValue(event: KeyboardEvent) {

  }

  keepSamePropOrder() { return 0; } // For this, angular keyvalue pipe will keep the same order in object property
}
