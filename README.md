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
1. Run

- `git clone https://github.com/meumobi/mmb-demos.firebase-native-push-ionic4`.
- `cd mmb-demos.firebase-native-push-ionic4`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/project-config.PNG?alt=media&token=5eabb205-7ba2-4fc3-905f-e9547055e754)

3.  Add the config to your Angular environment

#### src/environments/

Update the `environment.prod.ts` and `environment.ts` files. 

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

4. Run `ionic serve`
5. Profit. :tada: