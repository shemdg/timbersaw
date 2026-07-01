import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Lore } from './pages/lore/lore';
import { More } from './pages/more/more';
import { Builds } from './pages/builds/builds';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'builds', component: Builds },
  { path: 'lore', component: Lore },
  { path: 'more', component: More }
];