export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  age: number;         // Add this line
  location: string;
  badge: string;
  type: string;
  color: string;
  monologue: string;   // Add this line
  team: Pokemon[];
}