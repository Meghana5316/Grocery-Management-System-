import { AppModule } from '../app.module';
import { GroceryItemService } from '../grocery-items/grocery-item.service';

describe('GroceryItem', () => {
  it('should create an instance', () => {
    expect(new GroceryItemService()).toBeTruthy();
  });
});