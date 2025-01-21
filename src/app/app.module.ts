import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { environment } from '../environments/environment';
import { NavComponent } from "./nav/nav.component";
//import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './services/notification.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    //NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    NavComponent,
    ToastrModule.forRoot(), // ToastrModule added

],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"angular-notificationpsh","appId":"1:953681304280:web:896b00554d3623ae1455ad","storageBucket":"angular-notificationpsh.firebasestorage.app","apiKey":"AIzaSyCQt3Lf-9SWLtCG9jS72ySI9-1CQIX8E0g","authDomain":"angular-notificationpsh.firebaseapp.com","messagingSenderId":"953681304280"})),
    provideMessaging(() => getMessaging()),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
