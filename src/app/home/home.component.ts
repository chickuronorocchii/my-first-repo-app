import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h2>Welcome to the Pokémon World</h2>
      <p>Explore the history, legendary trainers, and gyms of the classic regions.</p>
      
      <div class="history-card">
        <h3>🏛️ Kanto Region History</h3>
        <p>Kanto is the pioneer region of the Pokémon league circuit. Known for its distinct traditional architecture and bustling cities connected by historic routes, it spans from Pallet Town up to the Indigo Plateau.</p>
      </div>

      <div class="history-card" style="margin-top: 20px;">
        <h3>⛩️ Johto Region History</h3>
        <p>Neighboring Kanto, Johto is steeped in deep cultural folklore, ancient traditions, and sacred landmarks like the Sprout Tower and the Tin Tower. Gym Leaders here test trainers with a balance of modern grit and historical heritage.</p>
      </div>
    </div>
  `,
  styles: [`
    .home-container { padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; }
    .history-card { background: #f4f4f4; padding: 15px; border-radius: 8px; border-left: 4px solid #3f51b5; }
  `]
})
export class HomeComponent {}