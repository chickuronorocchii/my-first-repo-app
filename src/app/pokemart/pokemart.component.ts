import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="font-family: sans-serif; text-align: center; width: 100%;">
      <h1 style="color: #111; margin-bottom: 10px;">🛍️ PokéMart</h1>
      <p style="color: #666; margin-bottom: 25px;">Stock up on essential items for your journey!</p>

      <!-- Player Wallet & Deposit Control Center -->
      <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; align-items: center;">
        
        <!-- Balance Display -->
        <div style="background: #e8f8f5; border: 2px solid #2ecc71; padding: 12px 24px; border-radius: 8px; color: #27ae60; font-weight: bold; font-size: 1.1rem;">
          💰 Balance: ₽{{ playerMoney }}
        </div>

        <!-- Items Bought -->
        <div style="background: #ebf5fb; border: 2px solid #3498db; padding: 12px 24px; border-radius: 8px; color: #2980b9; font-weight: bold; font-size: 1.1rem;">
          🎒 Items Bought: {{ totalItemsBought }}
        </div>

        <!-- Clear / Reset Button -->
        <button 
          (click)="clearBag()"
          style="background-color: #e74c3c; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: background 0.2s;">
          🗑️ Clear Bag & Reset
        </button>
      </div>

      <!-- Insert Money / Vending Machine Input Panel -->
      <div style="max-width: 450px; margin: 0 auto 25px auto; background: #fdfefe; border: 2px dashed #bdc3c7; padding: 15px; border-radius: 10px; display: flex; gap: 10px; align-items: center; justify-content: center;">
        <label for="depositInput" style="font-weight: bold; color: #2c3e50; font-size: 0.95rem;">Insert Money (₽):</label>
        <input 
          id="depositInput"
          type="number" 
          [(ngModel)]="depositAmount" 
          placeholder="e.g. 5000"
          style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; width: 120px; font-size: 1rem;" />
        <button 
          (click)="addMoney()"
          style="background-color: #2980b9; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">
          Deposit
        </button>
      </div>

      <!-- Purchase Feedback Banner -->
      @if (message) {
        <div style="margin: 0 auto 25px auto; max-width: 500px; padding: 12px; background: #d4edda; color: #155724; border: 1px solid #c3e6cb; border-radius: 8px; font-weight: bold;">
          {{ message }}
        </div>
      }

      <!-- Items Grid -->
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; max-width: 1200px; margin: 0 auto;">
        
        @for (item of items; track item.name) {
          <div style="flex: 1 1 250px; max-width: 260px; border: 2px solid #ddd; border-radius: 12px; padding: 20px; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.05); text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 3rem; margin-bottom: 10px;">{{ item.icon }}</div>
              <h3 style="margin: 0 0 8px 0; color: #2c3e50;">{{ item.name }}</h3>
              <p style="color: #7f8c8d; font-size: 0.9rem; margin-bottom: 15px;">{{ item.description }}</p>
            </div>
            <div>
              <p style="font-weight: bold; color: #e74c3c; font-size: 1.1rem; margin-bottom: 15px;">₽{{ item.price }}</p>
              <button 
                (click)="buyItem(item)"
                [style.background-color]="playerMoney >= item.price ? '#27ae60' : '#bdc3c7'"
                style="color: white; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer; width: 100%; transition: background 0.2s;">
                {{ playerMoney >= item.price ? 'Buy Item' : 'Not Enough ₽' }}
              </button>
            </div>
          </div>
        }

      </div>
    </div>
  `
})
export class PokemartComponent {
  playerMoney: number = 3000;
  totalItemsBought: number = 0;
  depositAmount: number | null = null;
  message: string = '';

  items = [
    { name: 'Poké Ball', price: 200, icon: '🔴', description: 'Standard ball for catching wild Pokémon.' },
    { name: 'Great Ball', price: 600, icon: '🔵', description: 'A good ball with a higher catch rate than a Poké Ball.' },
    { name: 'Ultra Ball', price: 1200, icon: '🟡', description: 'High-performance ball with an even higher catch rate.' },
    { name: 'Potion', price: 300, icon: '🧪', description: 'Restores a Pokémon’s HP by 20 points.' },
    { name: 'Super Potion', price: 700, icon: '💉', description: 'Restores a Pokémon’s HP by 50 points.' },
    { name: 'Revive', price: 1500, icon: '✨', description: 'Revives a fainted Pokémon with half max HP.' }
  ];

  addMoney() {
    if (this.depositAmount && this.depositAmount > 0) {
      this.playerMoney += this.depositAmount;
      this.message = `💵 Successfully deposited ₽${this.depositAmount} into your wallet!`;
      this.depositAmount = null;
    } else {
      this.message = `⚠️ Please enter a valid deposit amount.`;
    }
  }

  buyItem(item: { name: string; price: number; icon: string; description: string }) {
    if (this.playerMoney >= item.price) {
      this.playerMoney -= item.price;
      this.totalItemsBought += 1;
      this.message = `🎉 Success! You bought 1x ${item.name} for ₽${item.price}!`;
    } else {
      this.message = `❌ Not enough PokéDollars to buy ${item.name}! Deposit more funds above.`;
    }
  }

  clearBag() {
    this.playerMoney = 3000;
    this.totalItemsBought = 0;
    this.depositAmount = null;
    this.message = `🗑️ Bag cleared and wallet reset to initial ₽3,000 balance.`;
  }
}