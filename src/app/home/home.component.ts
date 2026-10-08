import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div style="font-family: sans-serif; text-align: center; width: 100%; max-width: 900px; margin: 0 auto;">
      <h1 style="color: #111; margin-bottom: 10px;">Welcome to the Pokémon World</h1>
      <p style="color: #555; margin-bottom: 30px; font-size: 1.1rem;">Explore the history, legendary trainers, and gyms of the classic regions.</p>
      
      <div style="display: flex; flex-direction: column; gap: 20px; text-align: left;">
        <div style="background: #f8f9fa; border: 1px solid #ddd; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h3 style="margin-top: 0; color: #2c3e50;">🏛️ Kanto Region History</h3>
          <p style="color: #441; line-height: 1.6;">Kanto is the pioneer region of the Pokémon league circuit. Known for its distinct traditional architecture and bustling cities connected by historic routes, it spans from Pallet Town up to the Indigo Plateau.</p>
        </div>

        <div style="background: #f8f9fa; border: 1px solid #ddd; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h3 style="margin-top: 0; color: #2c3e50;">⛩️ Johto Region History</h3>
          <p style="color: #444; line-height: 1.6;">Neighboring Kanto, Johto is steeped in deep cultural folklore, ancient traditions, and sacred landmarks like the Sprout Tower and the Tin Tower. Gym Leaders here test trainers with a balance of modern grit and historical heritage.</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}