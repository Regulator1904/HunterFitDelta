import { Routes } from '@angular/router';
import { ClubsComponent } from './navigation/clubs/clubs.component';


import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';

export const routes: Routes = [
  { path: "", redirectTo: "navigation", pathMatch: "full" },
  { path: "navigation", component: NavigationComponent,
    children: [
      { path: "", component: HomeComponent, outlet: 'home' },
      { path: "", component: SearchComponent, outlet: 'search' },
      { path: "", component: ClubsComponent, outlet: 'clubs' },
      { path: "", component: WorkoutsComponent,outlet: 'workouts' },
      { path: "", component: ProfileComponent, outlet: 'profile' },
    ]
  },

  { path: "startWorkout", component: StartWorkoutComponent},
  // { path: "tracking", component: trackingComponent}
];
