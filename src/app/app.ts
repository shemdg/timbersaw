import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar'; // <-- Make sure this path points to your navbar.ts!
import { Abilities } from './abilities/abilities';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Abilities],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}