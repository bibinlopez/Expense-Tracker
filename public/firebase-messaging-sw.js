// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
  apiKey: "AIzaSyBxYbr81yipqqXsifK6H1HLmzaLnwZQoWE",
  projectId: "my-new-project-a465f",
  messagingSenderId: "208334495737",
  appId: "1:208334495737:web:c7a353404edf300b7a2728",
}

firebase.initializeApp(defaultConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
