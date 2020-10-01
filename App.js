import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure({ webClientId: '532405863926-94v4mgqg18ajc2g7tk6ttghvsnilooee.apps.googleusercontent.com' });
const App: () => React$Node = () => {
  const [user, setUser] = useState();
  const [authErr, setAuthErr] = useState('');
  useEffect(() => auth().onAuthStateChanged((user) => setUser(user)), []);
  onGoogleSignOut = async () => await auth().signOut()
  getAuthErrorSnip = () => authErr ? <Text>{JSON.stringify(authErr)}</Text> : null
  onGoogleSignIn = async () => {
    try {
      const user = await GoogleSignin.signIn();
      await auth().signInWithCredential(auth.GoogleAuthProvider.credential(user.idToken));
    } catch (error) {
      setAuthErr(error);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <GoogleSigninButton onPress={onGoogleSignIn} ></GoogleSigninButton>
            {getAuthErrorSnip()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;