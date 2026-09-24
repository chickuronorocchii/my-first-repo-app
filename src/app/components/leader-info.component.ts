import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  template: `
    <div class="leader-card" [style.background-color]="leader.color">
      <h3>{{ leader.name }} (Age: {{ leader.age }})</h3>
      <p><strong>Location:</strong> {{ leader.location }}</p>
      <p><strong>Badge:</strong> {{ leader.badge }}</p>
      
      <!-- Formatting the Pokemon team cleanly -->
      <p><strong>Pokemon Team:</strong> 
        @for (pokemon of leader.team; track pokemon.name) {
          {{ pokemon.name }} (Lv. {{ pokemon.level }}){{ $last ? '' : ', ' }}
        }
      </p>
      
      <!-- The Required Button -->
      <button class="motto-btn" (click)="toggleMonologue()">Monologue / Motto</button>
      
      <!-- The Reveal -->
      @if (showMonologue) {
        <div class="monologue-box">
          <p><em>"{{ leader.monologue }}"</em></p>
        </div>
      }
    </div>
  `,
  styles: [`
    .leader-card { border: 1px solid #000; padding: 15px; border-radius: 8px; width: 250px; color: white; text-shadow: 1px 1px 2px black; }
    .motto-btn { margin-top: 10px; padding: 8px; cursor: pointer; background: white; border: none; border-radius: 4px; font-weight: bold; width: 100%; }
    .motto-btn:hover { background: #eee; }
    .monologue-box { margin-top: 12px; font-style: italic; background: rgba(0,0,0,0.6); padding: 10px; border-radius: 5px; border-left: 3px solid white; }
  `]
})
export class LeaderInfoComponent {
  // Receives data down from Kanto/Johto
  @Input() leader!: GymLeader; 
  
  // Emits an event back up to Kanto/Johto when clicked
  @Output() monologueClicked = new EventEmitter<string>(); 

  showMonologue = false;

  toggleMonologue() {
    this.showMonologue = !this.showMonologue;
    // Emitting the leader's name when the button is clicked to satisfy the Output requirement
    this.monologueClicked.emit(this.leader.name);
  }
}