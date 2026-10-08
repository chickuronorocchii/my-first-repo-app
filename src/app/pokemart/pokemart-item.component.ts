import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pokemart-item',
  standalone: true,
  template: `
    <div style="border: 2px solid #eee; padding: 15px; border-radius: 8px; text-align: center; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <div style="font-size: 2.5rem; margin-bottom: 10px;">{{ product().image }}</div>
      <h3 style="margin: 0 0 5px 0; font-size: 1.1rem; color: #333;">{{ product().name }}</h3>
      <p style="margin: 0 0 15px 0; color: #555; font-weight: bold;">₽{{ product().price }}</p>
      <button (click)="buy.emit(product())" style="background: #2c3e50; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">
        Add to Cart
      </button>
    </div>
  `
})
export class PokemartItemComponent {
  product = input.required<any>(); // Modern input() function
  buy = output<any>();             // Modern output() function
}