import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

  { path: '',      component: HomeComponent,
      data: {
          meta: {
              title: 'Home',
              description: 'Advance Wellness Solutions'
          }
    }},
    { path: ':repid',      component: HomeComponent,
    data: {
        meta: {
            title: 'Home',
            description: 'Advance Wellness Solutions'
        }
  }},
     { path: 'home/:repid',      component: HomeComponent,
    data: {
        meta: {
            title: 'Home',
            description: 'Advance Wellness Solutions'
        }
  }}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
