importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCQt3Lf-9SWLtCG9jS72ySI9-1CQIX8E0g",
    authDomain: "angular-notificationpsh.firebaseapp.com",
    projectId: "angular-notificationpsh",
    storageBucket: "angular-notificationpsh.firebasestorage.app",
    messagingSenderId: "953681304280",
    appId: "1:953681304280:web:896b00554d3623ae1455ad",
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-128x128.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
