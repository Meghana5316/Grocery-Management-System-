// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-home',
//   templateUrl: './admin-home.component.html',
//   styleUrls: ['./admin-home.component.css']
// })
// export class AdminHomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// admin-home.component.ts
import { Component } from '@angular/core';
// import { GroceryItem } from './grocery-item.model';
// import { GroceryItemService } from './grocery-item.service/';
import { GroceryItem } from 'src/app/grocery-items/grocery-item.model';
import { GroceryItemService } from 'src/app/grocery-items/grocery-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  groceryItems: GroceryItem[];

  constructor(private groceryItemService: GroceryItemService) {
    this.groceryItems = groceryItemService.getGroceryItems();
  }

  // Implement CRUD operations here using the groceryItemService
}

