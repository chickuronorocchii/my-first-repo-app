import { Component, inject } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  template: `
    <div style="font-family: sans-serif; text-align: center; width: 100%;">
      <h1 style="color: #111; margin-bottom: 25px;">My 6 Favorite Pokémon</h1>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
        @for (poke of favService.favorites(); track poke.name) {
          <div style="flex: 1 1 300px; max-width: 320px; border: 2px solid #ccc; border-radius: 12px; padding: 20px; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
            <h2 style="margin: 0 0 10px 0; color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px;">{{ poke.name }}</h2>
            <p style="margin: 5px 0;"><strong>🌍 Region:</strong> {{ poke.region }}</p>
            <p style="margin: 5px 0;"><strong>🧬 Type:</strong> {{ poke.type }}</p>
            <p style="margin: 5px 0;"><strong>🎒 Held Item:</strong> {{ poke.item }}</p>
            <p style="font-style: italic; color: #666; margin-top: 15px; line-height: 1.5;">"{{ poke.description }}"</p>
          </div>
        }
      </div>
    </div>
  `
})
export class FavoritesComponent {
  favService = inject(FavoritesService);
}