import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
  orderId: string = ''; // You may generate this dynamically or get it from the server
  customerId: string = '';
  orderDate: string = '';
  numberOfItems: number = 0;
  totalAmount: string = '';
  status: string = 'pending';
  transactionId: string = '';

  gotoPayment() {
    // Example logic to navigate to the payment page
    console.log('Navigating to Payment Page with Order Details:', {
      orderId: this.orderId,
      customerId: this.customerId,
      orderDate: this.orderDate,
      numberOfItems: this.numberOfItems,
      totalAmount: this.totalAmount,
      status: this.status,
      transactionId: this.transactionId
    });
    // You can implement the actual navigation logic here, such as using Angular Router
  }

}








