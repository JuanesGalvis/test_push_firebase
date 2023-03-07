importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDYIW8mQVfFFQfJFN5N_k92F5ZwH0Zc9tc",
    authDomain: "pushtest-9ffb7.firebaseapp.com",
    projectId: "pushtest-9ffb7",
    storageBucket: "pushtest-9ffb7.appspot.com",
    messagingSenderId: "388988246112",
    appId: "1:388988246112:web:ebb199c1c724c260b50b05"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Históricas del día';
    const notificationOptions = {
        body: 'Conoce a la histórica el día',
        icon: '/apple-touch-icon-57x57.png',
        click_action : "https://test-push-firebase.vercel.app/"
    };

    // self.registration.showNotification(notificationTitle, notificationOptions);
});
