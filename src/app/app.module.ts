import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './datepickermaterial';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { ExploreComponent } from './explore/explore.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'explore', component: ExploreComponent },
  {  path: 'review', component: ReviewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    NavigationComponent,
    ReservationsComponent,
    ExploreComponent,
    ReviewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
