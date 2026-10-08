import { Component } from '@angular/core';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  template: `
    <div style="font-family: sans-serif; text-align: center; width: 100%;">
      <h1 style="color: #111; margin-bottom: 25px;">Hoenn Region Gym Leaders</h1>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        
        <!-- Roxanne -->
        <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #616a6b; border-radius: 12px; padding: 20px; background: #7f8c8d; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Roxanne</h2>
          <p style="margin: 8px 0;"><strong>📍 Location:</strong> Rustboro City</p>
          <p style="margin: 8px 0;"><strong>🛡️ Badge:</strong> Stone Badge</p>
          <p style="margin: 8px 0;"><strong>Team:</strong> Geodude, Nosepass</p>
        </div>

        <!-- Brawly -->
        <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #b03a2e; border-radius: 12px; padding: 20px; background: #c0392b; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Brawly</h2>
          <p style="margin: 8px 0;"><strong>📍 Location:</strong> Dewford Town</p>
          <p style="margin: 8px 0;"><strong>🛡️ Badge:</strong> Knuckle Badge</p>
          <p style="margin: 8px 0;"><strong>Team:</strong> Machop, Makuhita</p>
        </div>

        <!-- Wattson -->
        <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #d4ac0d; border-radius: 12px; padding: 20px; background: #f1c40f; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Wattson</h2>
          <p style="margin: 8px 0;"><strong>📍 Location:</strong> Mauville City</p>
          <p style="margin: 8px 0;"><strong>🛡️ Badge:</strong> Dynamo Badge</p>
          <p style="margin: 8px 0;"><strong>Team:</strong> Magnemite, Voltorb, Magneton</p>
        </div>

      </div>
    </div>
  `
})
export class HoennComponent {}