import { Component, inject } from '@angular/core';
import { HoennService } from './hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  template: `
    <div class="container" style="padding: 20px; font-family: sans-serif;">
      <h1 style="font-weight: bold; margin-bottom: 25px; color: #111;">Hoenn Region Gym Leaders</h1>
      
      <!-- Responsive Flex Grid -->
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start;">
        
        @for (leader of hoennService.leaders(); track leader.name) {
          <!-- Theme Card with Specialty-Specific Color Backgrounds -->
          <div [style.background-color]="getCardBgColor(leader.specialty)"
               style="flex: 1 1 300px; max-width: 350px; min-width: 290px; border: 2px solid #333; border-radius: 12px; padding: 25px; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display: flex; flex-direction: column; justify-content: space-between; min-height: 480px;">
            
            <div>
              <h2 style="margin: 0 0 15px 0; font-size: 1.6rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 10px;">
                {{ leader.name }} <span style="font-size: 1rem; opacity: 0.9; display: block; margin-top: 5px;">(Specialty: {{ leader.specialty }})</span>
              </h2>
              
              <ul style="list-style-type: none; padding: 0; margin: 0 0 20px 0; line-height: 1.8;">
                <li style="margin-bottom: 8px;">
                  <strong style="display: inline-block; width: 85px;">📍 Location:</strong> {{ leader.town }}
                </li>
                <li style="margin-bottom: 8px;">
                  <strong style="display: inline-block; width: 85px;">🛡️ Badge:</strong> {{ leader.badge }}
                </li>
              </ul>
              
              <h3 style="margin: 20px 0 10px 0; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.5px;">Pokémon Team:</h3>
              <ul style="padding-left: 20px; margin: 0; line-height: 1.6;">
                @for (pokemon of leader.team; track $index) {
                  <li style="margin-bottom: 12px;">
                    <strong style="font-size: 1.05rem;">{{ pokemon }}</strong>
                    <div style="font-size: 0.85rem; opacity: 0.85; margin-top: 2px;">
                      Held Item: {{ leader.items[$index] }}
                    </div>
                  </li>
                }
              </ul>
            </div>
            
            <!-- Standard interactive button consistent with Kanto's buttons -->
            <button style="width: 100%; border: none; background: white; color: #111; font-weight: bold; border-radius: 8px; padding: 10px; margin-top: 20px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: background 0.2s;">
              Gym Battle Details
            </button>
            
          </div>
        }
        
      </div>
    </div>
  `
})
export class HoennComponent {
  hoennService = inject(HoennService);

  // Generates customized, vibrant type colors for each specific badge
  getCardBgColor(specialty: string): string {
    switch(specialty) {
      case 'Rock':
        return '#5d5854'; // Earthy rock grey
      case 'Fighting':
        return '#b03a2e'; // Energetic fighter scarlet-red
      case 'Electric':
        return '#b7950b'; // Vivid electric dark-gold (easily readable with white text)
      default:
        return '#2c3e50'; // Fallback midnight blue
    }
  }
}