import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Import the RouterLink tool

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // 2. Add it to the imports array!
  templateUrl: './navbar.html',
  styleUrl: './navbar.css' 
})
export class Navbar { }