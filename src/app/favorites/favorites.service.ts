import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  // Contains 6 favorite Pokémon across the 3 regions
  private favoritesRegistry = signal([
    { region: 'Kanto', name: 'Charizard', type: 'Fire/Flying', item: 'Charcoal', description: 'Spits fire that is hot enough to melt boulders.' },
    { region: 'Kanto', name: 'Gengar', type: 'Ghost/Poison', item: 'Spell Tag', description: 'Hides in shadows. It is said that if Gengar is hiding in the shadows, your room will drop by 10 degrees.' },
    { region: 'Johto', name: 'Tyranitar', type: 'Rock/Dark', item: 'Hard Stone', description: 'Its body cannot be harmed by any sort of attack, so it is very eager to make challenges against enemies.' },
    { region: 'Johto', name: 'Scizor', type: 'Bug/Steel', item: 'Metal Coat', description: 'Has pincers that contain steel. They can crush any hard object it gets a hold of into bits.' },
    { region: 'Hoenn', name: 'Blaziken', type: 'Fire/Fighting', item: 'Black Belt', description: 'In battle, Blaziken blows out intense flames from its wrists and leaps courageously at the foe.' },
    { region: 'Hoenn', name: 'Salamence', type: 'Dragon/Flying', item: 'Dragon Fang', description: 'As a result of its long-held dream of flying, its cellular structure changed, and wings grew out.' }
  ]);

  favorites = this.favoritesRegistry.asReadonly();
}