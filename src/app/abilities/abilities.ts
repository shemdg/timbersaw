import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ability {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  videoUrl: string;
}

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abilities.html'
})
export class Abilities {
  // Populated with Timbersaw's full ability set
  abilities: Ability[] = [
    {
      id: 'whirling-death',
      name: 'Whirling Death',
      description: 'Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area of effect.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=WD', // Placeholder
      videoUrl: 'assets/abilities/whirling_death.webm'
    },
    {
      id: 'timber-chain',
      name: 'Timber Chain',
      description: 'Fires a chain that embeds itself in the first tree it hits, pulling Timbersaw to that location.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=TC', // Placeholder
      videoUrl: 'assets/abilities/timber_chain.webm'
    },
    {
      id: 'reactive-armor',
      name: 'Reactive Armor',
      description: 'Passively grants bonus armor and health regeneration every time Timbersaw is attacked.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=RA', // Placeholder
      videoUrl: 'assets/abilities/reactive_armor.webm'
    },
    {
      id: 'chakram',
      name: 'Chakram',
      description: 'Fires a massive saw blade that stays at a target area, dealing damage in a radius and slowing enemies.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=CH', // Placeholder
      videoUrl: 'assets/abilities/chakram.webm'
    }
  ];

  selectedAbility: Ability = this.abilities[0];

  selectAbility(ability: Ability): void {
    this.selectedAbility = ability;
  }
}