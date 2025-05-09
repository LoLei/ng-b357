import { Routes } from '@angular/router';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

export const flightRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'flight-search',
  },

  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
    title: 'Flight Edit',
  },

  {
    path: 'flight-search',
    component: FlightSearchComponent,
    title: 'Flight Search',
  },
];

export default flightRoutes;
