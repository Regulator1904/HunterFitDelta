import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';



@NgModule({
  declarations: [HomeComponent, NavigationComponent, ProfileComponent, SearchComponent, WorkoutsComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }