import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  userid: string = '';
  password: string = '';
  usertype: string = '';

  constructor(private router: Router) { }
  ngOnInit(): void {
      
  }

  login() {
    // Example login logic (replace with your actual authentication logic)
    if (this.userid === 'customer' && this.password === 'customerpass' && this.usertype === 'customer') {
      this.router.navigate(['/customer-dashboard']);
    } else if (this.userid === 'admin' && this.password === 'adminpass' && this.usertype === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }


}



 




