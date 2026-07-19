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
  templateUrl: './abilities.html',
  styleUrl: './abilities.css'
})
export class Abilities {
  // Populated with Timbersaw's full ability set
  abilities: Ability[] = [
    {
      id: 'whirling-death',
      name: 'Whirling Death',
      description: 'Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area of effect.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=WD', // Placeholder
      videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    },
    {
      id: 'timber-chain',
      name: 'Timber Chain',
      description: 'Fires a chain that embeds itself in the first tree it hits, pulling Timbersaw to that location.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=TC', // Placeholder
      videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    },
    {
      id: 'reactive-armor',
      name: 'Reactive Armor',
      description: 'Passively grants bonus armor and health regeneration every time Timbersaw is attacked.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=RA', // Placeholder
      videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    },
    {
      id: 'chakram',
      name: 'Chakram',
      description: 'Fires a massive saw blade that stays at a target area, dealing damage in a radius and slowing enemies.',
      iconUrl: 'https://placehold.co/80x80/232931/white?text=CH', // Placeholder
      videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
    }
  ];

  selectedAbility: Ability = this.abilities[0];

  selectAbility(ability: Ability): void {
    this.selectedAbility = ability;
  }
}
