import { Component, inject } from '@angular/core';
import { HoennService } from './hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  template: `
    <div class="container">
      <h1>Hoenn Region Gym Leaders</h1>
      
      @for (leader of hoennService.leaders(); track leader.name) {
        <div class="gym-card" style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px;">
          <h2>{{ leader.name }}</h2>
          <p><strong>Town:</strong> {{ leader.town }}</p>
          <p><strong>Badge:</strong> {{ leader.badge }}</p>
          <p><strong>Specialty:</strong> {{ leader.specialty }}</p>
          
          <h3>Pokémon Team:</h3>
          <ul>
            @for (pokemon of leader.team; track $index) {
              <li>
                <strong>{{ pokemon }}</strong> — 
                <small>Held Item: {{ leader.items[$index] }}</small>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  `
})
export class HoennComponent {
  hoennService = inject(HoennService);
}