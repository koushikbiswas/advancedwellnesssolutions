import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MetaGuard } from '@ngx-meta/core';


import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes = [
  { path: 'about2', component: AboutusComponent,data: {
      meta: {
          title: 'About US',
          description: 'Have you seen my rubber duckie?'
      }
  } },
    { path: '', component: AboutusComponent,data: {
      meta: {
          title: 'About US',
          description: 'Have you seen my rubber duckie?'
      }
  } },

  { path: 'contact2',      component: ContactusComponent,
      data: {
          meta: {
              title: 'Contact Us',
              description: 'Have you seen my rubber duckie?'
          }
      }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    //console.log('dddd');
}
