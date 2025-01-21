import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NotificationService } from './services/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notification-app';
  constructor(
    private notificationService: NotificationService,
     private location: Location,
     private router: Router,
     private route: ActivatedRoute
  ) {
    // Notification service is initialized and will handle notifications
  }
  message: any;

  //constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.currentMessage.subscribe(message => {
      this.message = message;
    });
  }
  // constructor(private location: Location, private router: Router,private route: ActivatedRoute) {

  // }
}
