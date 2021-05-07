import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
import { WorkoutHistoryComponent } from '@src/app/navigation/workouts/workout-history/workout-history.component';
import { CardioDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/cardio-details/cardio-details.component';
import { WeightliftingDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/weightlifting-details/weightlifting-details.component';
import { ProfileWorkoutDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/profile-workout-details.component';


@NgModule({
  declarations: [HomeComponent, NavigationComponent, ProfileComponent, SearchComponent, WorkoutsComponent, WorkoutHistoryComponent, CardioDetailsComponent, WeightliftingDetailsComponent, ProfileWorkoutDetailsComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NavigationModule { }
