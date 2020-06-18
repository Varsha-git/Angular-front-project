import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }