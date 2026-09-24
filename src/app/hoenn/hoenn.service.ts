import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennService {
  private hoennRegistry = signal([
    { 
      name: 'Roxanne', 
      town: 'Rustboro City', 
      badge: 'Stone Badge', 
      specialty: 'Rock', 
      team: ['Geodude', 'Nosepass'],
      items: ['Hard Stone', 'Oran Berry'] 
    },
    { 
      name: 'Brawly', 
      town: 'Dewford Town', 
      badge: 'Knuckle Badge', 
      specialty: 'Fighting', 
      team: ['Machop', 'Makuhita'],
      items: ['Black Belt', 'Sitrus Berry'] 
    },
    { 
      name: 'Wattson', 
      town: 'Mauville City', 
      badge: 'Dynamo Badge', 
      specialty: 'Electric', 
      team: ['Magnemite', 'Voltorb', 'Magneton'],
      items: ['Magnet', 'Paralyze Heal', 'Sitrus Berry'] 
    }
  ]);

  leaders = this.hoennRegistry.asReadonly();
}