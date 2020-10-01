
# Firebase Google Auth

Testing React native with Firebase-auth using Google

```sh
react-native init testAuthGoogleAx && cd testAuthGoogleAx && (cd android; ./gradlew signingReport)

Variant: debugAndroidTest
Config: debug
Store: ~/ws/rn01/testAuthGoogleAx/android/app/debug.keystore
..
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

grep package ./android/app/src/main/AndroidManifest.xml

  package="com.testauthgoogleax">

```

Firebase -> Add App -> Android -> package: com.testauthgoogleax -> Debug signing certificate SHA-1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25 -> Register App

Download google-services.json into ./android/app/

Click Next

Add `classpath("com.google.gms:google-services:4.3.3")` to `./android/build.gradle` line#16
Add `apply plugin: 'com.google.gms.google-services'` to `android/app/build.gradle` line#2

Add `implementation "com.google.firebase:firebase-analytics:17.5.0"` to `android/app/build.gradle` line#184
Add `implementation "com.google.firebase:firebase-auth:19.4.0"` to `android/app/build.gradle` line#185

Click Next -> Continue to Console

```sh
npm install --save @react-native-firebase/app @react-native-firebase/auth @react-native-community/google-signin
```