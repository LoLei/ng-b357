import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { PricingComponent } from './pricing/pricing.component';

import flightRoutes from './flights/flights.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },

  {
    path: 'flights',
    children: flightRoutes,
    // loadChildren: () => import('./flights/flights.routes').then((f) => f.flightRoutes),
    title: 'Flights',
  },

  {
    path: 'charts',
    component: ChartsComponent,
    title: 'Charts',
  },

  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing',
  },
];
