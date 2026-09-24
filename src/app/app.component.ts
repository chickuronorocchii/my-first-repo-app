import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <h1>Pokemon Gym Leaders Portal</h1>
      
      <!-- Navigation Bar using routerLink to prevent full page reloads -->
      <nav class="navbar">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/kanto" routerLinkActive="active">Kanto Region</a>
        <a routerLink="/johto" routerLinkActive="active">Johto Region</a>
        <a routerLink="/hoenn" class="nav-btn">Hoenn Region</a>
      </nav>

      <hr style="margin: 20px 0; border: 1px solid #ccc;">

      <!-- The Router Outlet dynamically renders whichever page is selected -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container { padding: 20px; font-family: Arial, sans-serif; }
    .navbar { display: flex; gap: 10px; margin-bottom: 10px; }
    .navbar a { text-decoration: none; padding: 8px 16px; background-color: #e0e0e0; color: #333; border-radius: 4px; font-weight: bold; }
    .navbar a.active { background-color: #3f51b5; color: white; }
  `]
})
export class AppComponent {}