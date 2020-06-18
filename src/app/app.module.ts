import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './datepickermaterial';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { ExploreComponent } from './explore/explore.component';



const appRoutes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'explore', component: ExploreComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    NavigationComponent,
    RecommendationComponent,
    FooterComponent,
    ReservationsComponent,
    ExploreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
