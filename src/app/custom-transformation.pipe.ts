import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderTransformation',
  standalone: false
})
export class OrderTransformationPipe implements PipeTransform {
  transform(customer: string, orders: string[], invoices: string[]): unknown {
    return `${customer} ordered ${orders[0]}, invoice ${invoices[0]} sent.`;
  }

  // transform(customer: string, orders: string[], invoices: string[]): unknown {
  //   return orders.join(' ');
  // }
}
