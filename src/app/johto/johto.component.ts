import { Component } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';
import { LeaderInfoComponent } from '../components/leader-info.component';
@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfoComponent], // Register it here so the template can use it
  template: `
    <div class="region-container">
      <h2>Johto Region Gym Leaders</h2>
      <div class="leader-grid">
        @for (leader of johtoLeaders; track leader.name) {
          <!-- Passing data DOWN via [leader] and listening for button clicks UP via (monologueClicked) -->
          <app-leader-info 
            [leader]="leader" 
            (monologueClicked)="logInteraction($event)">
          </app-leader-info>
        }
      </div>
    </div>
  `,
  styles: [`
    .region-container { padding: 20px; font-family: Arial, sans-serif; }
    .leader-grid { display: flex; flex-wrap: wrap; gap: 20px; }
  `]
})
export class JohtoComponent {
  johtoLeaders: GymLeader[] = [
    { 
      name: 'Falkner', age: 18, location: 'Violet City', badge: 'Zephyr Badge', type: 'Flying', color: '#87CEEB', 
      monologue: "The wind sings a silent requiem for those who cannot fly.", 
      team: [{ name: 'Pidgey', level: 7 }, { name: 'Pidgeotto', level: 9 }] 
    },
    { 
      name: 'Bugsy', age: 14, location: 'Azalea Town', badge: 'Hive Badge', type: 'Bug', color: '#9ACD32', 
      monologue: "Even the smallest insect weaves a masterpiece in the grand tapestry of nature.", 
      team: [{ name: 'Metapod', level: 14 }, { name: 'Scyther', level: 16 }] 
    },
    { 
      name: 'Whitney', age: 16, location: 'Goldenrod City', badge: 'Plain Badge', type: 'Normal', color: '#FFB6C1', 
      monologue: "Innocence is a fragile thing. Let's see how well your team handles my Miltank!", 
      team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }] 
    },
    { 
      name: 'Morty', age: 20, location: 'Ecruteak City', badge: 'Fog Badge', type: 'Ghost', color: '#8A2BE2', 
      monologue: "The shadows hold memories that the living choose to forget.", 
      team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 23 }, { name: 'Gengar', level: 25 }] 
    },
    { 
      name: 'Chuck', age: 35, location: 'Cianwood City', badge: 'Storm Badge', type: 'Fighting', color: '#A0522D', 
      monologue: "True strength is forged under crushing pressure. Are you unbreakable?", 
      team: [{ name: 'Primeape', level: 27 }, { name: 'Poliwrath', level: 30 }] 
    },
    { 
      name: 'Jasmine', age: 22, location: 'Olivine City', badge: 'Mineral Badge', type: 'Steel', color: '#A9A9A9', 
      monologue: "Steel is unyielding, eternal, and perfectly composed.", 
      team: [{ name: 'Magnemite', level: 30 }, { name: 'Steelix', level: 35 }] 
    },
    { 
      name: 'Pryce', age: 65, location: 'Mahogany Town', badge: 'Glacier Badge', type: 'Ice', color: '#00CED1', 
      monologue: "Winter whispers wisdom to those patient enough to listen.", 
      team: [{ name: 'Seel', level: 27 }, { name: 'Piloswine', level: 31 }] 
    },
    { 
      name: 'Clair', age: 24, location: 'Blackthorn City', badge: 'Rising Badge', type: 'Dragon', color: '#00008B', 
      monologue: "Bow before true majesty. Dragons do not entertain failures.", 
      team: [{ name: 'Dragonair', level: 37 }, { name: 'Kingdra', level: 40 }] 
    }
  ];

  logInteraction(leaderName: string) {
    console.log(`Johto Region: ${leaderName} has spoken their monologue.`);
  }
}