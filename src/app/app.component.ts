import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [`
    .navbar {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      padding: 18px 20px;
      background-color: #cc0000; /* Classic Pokédex Red */
      border-bottom: 4px solid #990000;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .nav-btn {
      padding: 10px 20px;
      background-color: #ffffff;
      color: #2c3e50;
      text-decoration: none;
      border-radius: 25px; /* Pill-shaped buttons */
      font-family: sans-serif;
      font-weight: bold;
      font-size: 0.95rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.2s ease;
    }
    .nav-btn:hover {
      background-color: #f0f0f0;
      transform: translateY(-1px);
    }
    .nav-btn.active-link {
      background-color: #1a1a1a;
      color: #ffffff;
      border: 2px solid #ffcb05; 
    }
  `],
  template: `
    <nav class="navbar">
      <a [routerLink]="['/home']" routerLinkActive="active-link" class="nav-btn">Home</a>
      <a [routerLink]="['/kanto']" routerLinkActive="active-link" class="nav-btn">Kanto Region</a>
      <a [routerLink]="['/johto']" routerLinkActive="active-link" class="nav-btn">Johto Region</a>
      <a [routerLink]="['/hoenn']" routerLinkActive="active-link" class="nav-btn">Hoenn Region</a>
      <a [routerLink]="['/favorites']" routerLinkActive="active-link" class="nav-btn">My Favorites</a>
      <a [routerLink]="['/pokemart']" routerLinkActive="active-link" class="nav-btn">PokéMart</a>
    </nav>

    <!-- Outer page background (Clean Light Gray) -->
    <div style="background-color: #f0f2f5; min-height: calc(100vh - 80px); padding: 40px 20px;">
      
      <!-- Pokédex Device Container Wrapper -->
      <div style="max-width: 1400px; margin: 0 auto; background-color: #ff3b3b; border-radius: 16px; border: 4px solid #b30000; box-shadow: 0 10px 25px rgba(0,0,0,0.25); padding: 30px; overflow: hidden;">
        
        <!-- Inner Screen Area -->
        <div style="background-color: #ffffff; border-radius: 12px; padding: 30px; min-height: 70vh; box-shadow: inset 0 2px 6px rgba(0,0,0,0.1);">
          <router-outlet></router-outlet>
        </div>

      </div>
    </div>
  `
})
export class AppComponent {
  title = 'pokemon-gym-app';
}