import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  paymentId: string = ''; // You may generate this dynamically or get it from the server
  amount: string = '';
  method: string = 'credit_card';
  date: string = '';
  status: string = 'pending';

  submitPayment() {
    // Example logic to submit the payment
    console.log('Payment Details Submitted:', {
      paymentId: this.paymentId,
      amount: this.amount,
      method: this.method,
      date: this.date,
      status: this.status
    });
    // You can implement the actual payment submission logic here
  }

}

  
