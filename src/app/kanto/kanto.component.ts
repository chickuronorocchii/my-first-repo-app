import { Component } from '@angular/core';

@Component({
  selector: 'app-kanto',
  standalone: true,
  template: `
    <div style="font-family: sans-serif; text-align: center; width: 100%;">
      <h1 style="color: #111; margin-bottom: 25px;">Kanto Region Gym Leaders</h1>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        
        <!-- Brock Card -->
        <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #7f8c8d; border-radius: 12px; padding: 20px; background: #95a5a6; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Brock (Age: 15)</h2>
          <p style="margin: 8px 0;"><strong>📍 Location:</strong> Pewter City</p>
          <p style="margin: 8px 0;"><strong>🛡️ Badge:</strong> Boulder Badge</p>
          <p style="margin: 8px 0;"><strong>Pokémon Team:</strong> Geodude (Lv. 12), Onix (Lv. 14)</p>
        </div>

        <!-- Misty Card -->
        <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #2980b9; border-radius: 12px; padding: 20px; background: #3498db; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Misty (Age: 13)</h2>
          <p style="margin: 8px 0;"><strong>📍 Location:</strong> Cerulean City</p>
          <p style="margin: 8px 0;"><strong>🛡️ Badge:</strong> Cascade Badge</p>
          <p style="margin: 8px 0;"><strong>Pokémon Team:</strong> Staryu (Lv. 18), Starmie (Lv. 21)</p>
        </div>

      </div>
    </div>
  `
})
export class KantoComponent {}