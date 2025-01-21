import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  //  { path: 'login', component: LoginComponent },
    //  { path: 'notification', component: NotificationComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
