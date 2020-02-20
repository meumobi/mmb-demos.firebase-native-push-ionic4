# mmb-demos.firebase-native-push-ionic4
**Tutorial** [Add Push Notification Support on Native Ionic App with Firebase Cloud Messaging and AngularFire 5.2+](http://meumobi.github.io/ionic/2019/05/29/crud-ionic4-angulafire5-app.html)

## Getting started

### Prerequisites
[Download the installer](https://nodejs.org/) for Node.js 6 or greater.
Install both [Ionic].

```terminal
$ npm install ionic typescript @angular/cli -g
...

$ npm ls -g cordova ionic npm typescript @angular/cli --depth 0
/Users/victor.dias/.nvm/versions/node/v12.6.0/lib
├── @angular/cli@8.3.20 
├── cordova@9.0.0 
├── ionic@5.4.15 
├── npm@6.13.6 
├── phonegap@9.0.0
└── typescript@3.7.3  
```

### Usage
If you want to test FCM using this project, you'll need to do the following:
1. Run

- `git clone https://github.com/meumobi/mmb-demos.firebase-native-push-ionic4`.
- `cd mmb-demos.firebase-native-push-ionic4`
- `npm install`

2. Change the package ID in the config.xml with your own.
  - for iOS package ID must be associated with your Apple Developer Team and for which you have set appropriate capabilities (i.e. enabled Push Notifications).
3. [create a Firebase project](https://firebase.google.com/docs/web/setup#create-firebase-project)
4. [Register Android app](https://firebase.google.com/docs/android/setup#register-app) and/or [iOS](https://firebase.google.com/docs/ios/setup).
5. Register a web app and grab SDK Config, update if on `src/environment.ts`
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '...',
    appId: '...',
  }
};
```
6. for iOS only: [create and upload an auth key or APNS certificate](https://firebase.google.com/docs/cloud-messaging/ios/certs) for the package ID to the Firebase project
7. Download resp. `google-services.json` and `GoogleService-info.plist` for Android and iOS apps, save them on root of project.
8. Build and run your project on device (iOS Simulator cannot receive push notifications).
9. Profit. :tada:

## Todo
- [ ] Change [plugin variables](https://github.com/dpa99c/cordova-plugin-firebasex#plugin-variables).
  - You'll need to uninstall the plugin and reinstall it with the new variable values
can be overridden at plugin installation time by specifying plugin variables as command-line arguments, for example:

```bash
$ cordova plugin add cordova-plugin-firebasex --variable ANDROID_FIREBASE_ANALYTICS_VERSION=17.0.0
```

Or you can specify them as plugin variables in your config.xml, for example:

```xml
<plugin name="cordova-plugin-firebasex" spec="latest">
    <variable name="ANDROID_FIREBASE_ANALYTICS_VERSION" value="17.0.0" />
</plugin>
```
- [ ] [Android notification icon](https://github.com/dpa99c/cordova-plugin-firebasex#android-notification-icons)
  - By default the plugin will use the default app icon for notification messages. To define a custom default notification icon, you need to create the images and deploy them to the `<projectroot>/platforms/android/app/src/main/res/<drawable-DPI>` folders.
- [ ] [Android Notification Color](https://github.com/dpa99c/cordova-plugin-firebasex#android-notification-color)
  - You can override this default by specifying a value using the ANDROID_ICON_ACCENT plugin variable during plugin installation, for example:

```bash
$ cordova plugin add cordova-plugin-firebasex --variable ANDROID_ICON_ACCENT=#123456FF
```
You can override the default color accent by specifying the colour key as an RGB value in a notification message.