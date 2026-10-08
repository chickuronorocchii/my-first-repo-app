import { Injectable, signal, computed } from '@angular/core';

export interface CartItem { name: string; price: number; quantity: number; }

@Injectable({ providedIn: 'root' })
export class PokemartService {
  // 10 Items minimum requirement with Emojis
  inventory = signal([
    { name: 'Poké Ball', price: 200, image: '🔴' },
    { name: 'Great Ball', price: 600, image: '🔵' },
    { name: 'Ultra Ball', price: 1200, image: '🟡' },
    { name: 'Potion', price: 300, image: '🧪' },
    { name: 'Super Potion', price: 700, image: '🧴' },
    { name: 'Hyper Potion', price: 1200, image: '💊' },
    { name: 'Revive', price: 1500, image: '💎' },
    { name: 'Antidote', price: 100, image: '💉' },
    { name: 'Paralyze Heal', price: 200, image: '⚡' },
    { name: 'Awakening', price: 250, image: '⏰' }
  ]);

  cart = signal<CartItem[]>([]);

  // Computed signal to automatically calculate the total price
  totalAmount = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  addToCart(product: any) {
    this.cart.update(items => {
      const existing = items.find(i => i.name === product.name);
      if (existing) {
        return items.map(i => i.name === product.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { name: product.name, price: product.price, quantity: 1 }];
    });
  }

  // Safely empties the cart using Angular Signals
  clearCart() {
    this.cart.set([]); 
  }
}