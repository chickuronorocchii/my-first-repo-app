import { Component } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';
import { LeaderInfoComponent } from '../components/leader-info.component';
@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfoComponent], // Add it to imports!
  template: `
    <div class="region-container">
      <h2>Kanto Region Gym Leaders</h2>
      <div class="leader-grid">
        @for (leader of kantoLeaders; track leader.name) {
          <!-- Using the child component and passing data in with [leader] -->
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
export class KantoComponent {
  kantoLeaders: GymLeader[] = [
    { 
      name: 'Brock', age: 15, location: 'Pewter City', badge: 'Boulder Badge', type: 'Rock', color: '#808080', 
      monologue: "The stage is set, and my boulders are ready. Perfection isn't good enough.", 
      team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }] 
    },
    { 
      name: 'Misty', age: 13, location: 'Cerulean City', badge: 'Cascade Badge', type: 'Water', color: '#4682B4', 
      monologue: "Art requires a certain cruelty. My water Pokémon will wash away your illusions.", 
      team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }] 
    }
    // Add the rest of your Kanto leaders here, making sure to include their 'age' and 'monologue' strings!
  ];

  // This function catches the @Output event from the child component
  logInteraction(leaderName: string) {
    console.log(`The audience is listening to ${leaderName}'s performance...`);
  }
}