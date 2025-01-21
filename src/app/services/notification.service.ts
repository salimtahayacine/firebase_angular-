import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
//import { google } from 'googleapis';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  currentMessage = new BehaviorSubject<any>(null);

  constructor(private afMessaging: AngularFireMessaging) {
    this.requestPermission();
    this.receiveMessage();
  }



  // Request permission for notifications
  requestPermission() {
    this.afMessaging.requestToken.subscribe({
      next: (token) => {
        console.log('Permission accordée!Enregistrer sur serveur!');
        console.log(token);
        // Send this token to your server
      },
      error: (error) => {
        console.error("Impossible d'obtenir la permission", error);
      }
    });
  }

  // Receive messages
  receiveMessage() {
    this.afMessaging.messages.subscribe({
      next: (payload) => {
        console.log('New message received:', payload);
        this.currentMessage.next(payload);
      },
      error: (error) => {
        console.error('Error receiving message:', error);
      }
    });
  }

  // Delete token
  // deleteToken() {
  //   this.afMessaging.deleteToken();
  // }
}
