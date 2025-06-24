import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderTransformation',
  standalone: false,
  pure: true
})

export class OrderTransformationPipe implements PipeTransform {
  transform(customer: string, orders: any[], invoices: string[]): unknown {
    console.log('orderTransformationPipe() triggered!');
    return `${customer} ordered ${orders[orders.length-1]?.name}, invoice ${invoices[0]} sent.`;
  }

  // transform(customer: string, orders: string[], invoices: string[]): unknown {
  //   return orders.join(' ');
  // }
}
