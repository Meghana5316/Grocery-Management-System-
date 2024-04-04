// grocery-item.service.ts
import { Injectable } from '@angular/core';
// import { GroceryItem } from './grocery-item.model';
import { GroceryItem } from '../grocery-items/grocery-item.model';

@Injectable({
  providedIn: 'root',
})
export class GroceryItemService {
  private groceryItems: GroceryItem[] = [
    { id: 1, name: 'Apple', price: 2.5, unit: 'kg' },
    { id: 2, name: 'Milk', price: 1.5, unit: 'litre' },
    // Add more items as needed
  ];

  getGroceryItems(): GroceryItem[] {
    return this.groceryItems;
  }

  getGroceryItemById(id: number): GroceryItem | undefined {
    return this.groceryItems.find((item) => item.id === id);
  }

  addGroceryItem(item: GroceryItem): void {
    this.groceryItems.push(item);
  }

  updateGroceryItem(updatedItem: GroceryItem): void {
    const index = this.groceryItems.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.groceryItems[index] = updatedItem;
    }
  }

  deleteGroceryItem(id: number): void {
    this.groceryItems = this.groceryItems.filter((item) => item.id !== id);
  }
}
