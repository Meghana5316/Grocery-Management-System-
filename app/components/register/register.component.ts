import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


  id: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  address: string = '';

  register() {
    // Example registration logic (replace with your actual registration logic)
    console.log('Registration Data:', {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      address: this.address
    });
  }

  save() {
    // Example save logic (replace with your actual save logic)
    console.log('Data Saved:', {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      address: this.address
    });
  }

  }







