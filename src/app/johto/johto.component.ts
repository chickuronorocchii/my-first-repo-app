import { Component } from '@angular/core';

@Component({
  selector: 'app-johto',
  standalone: true,
  template: `
    <div style="font-family: sans-serif; width: 100%; text-align: center;">
      <h1 style="color: #111; margin-bottom: 25px;">Johto Region Gym Leaders</h1>
      
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; max-width: 1400px; margin: 0 auto;">
        
        <!-- Falkner -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #2980b9; border-radius: 12px; padding: 20px; background: #5dade2; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Falkner (Age: 18)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Violet City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Zephyr Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Pidgey (Lv. 7), Pidgeotto (Lv. 9)</p>
        </div>

        <!-- Bugsy -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #27ae60; border-radius: 12px; padding: 20px; background: #2ecc71; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Bugsy (Age: 14)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Azalea Town</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Hive Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Metapod (Lv. 14), Scyther (Lv. 16)</p>
        </div>

        <!-- Whitney -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #e91e63; border-radius: 12px; padding: 20px; background: #f48fb1; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Whitney (Age: 16)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Goldenrod City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Plain Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Clefairy (Lv. 18), Miltank (Lv. 20)</p>
        </div>

        <!-- Morty -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #673ab7; border-radius: 12px; padding: 20px; background: #9575cd; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Morty (Age: 20)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Ecruteak City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Fog Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Gastly (Lv. 21), Gengar (Lv. 25)</p>
        </div>

        <!-- Chuck -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #d35400; border-radius: 12px; padding: 20px; background: #e67e22; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Chuck (Age: 35)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Cianwood City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Storm Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Primeape (Lv. 27), Poliwrath (Lv. 30)</p>
        </div>

        <!-- Jasmine -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #7f8c8d; border-radius: 12px; padding: 20px; background: #95a5a6; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Jasmine (Age: 22)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Olivine City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Mineral Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Magnemite (Lv. 30), Steelix (Lv. 35)</p>
        </div>

        <!-- Pryce -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #00acc1; border-radius: 12px; padding: 20px; background: #26c6da; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Pryce (Age: 65)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Mahogany Town</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Glacier Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Seel (Lv. 27), Piloswine (Lv. 31)</p>
        </div>

        <!-- Clair -->
        <div style="flex: 1 1 250px; max-width: 280px; border: 2px solid #000080; border-radius: 12px; padding: 20px; background: #1a237e; color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
          <h2 style="margin: 0 0 10px 0; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; font-size: 1.2rem;">Clair (Age: 24)</h2>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>📍 Location:</strong> Blackthorn City</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>🛡️ Badge:</strong> Rising Badge</p>
          <p style="margin: 8px 0; font-size: 0.95rem;"><strong>Team:</strong> Dragonair (Lv. 37), Kingdra (Lv. 40)</p>
        </div>

      </div>
    </div>
  `
})
export class JohtoComponent {}