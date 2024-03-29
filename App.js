import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  PermissionsAndroid,
  AppRegistry 
} from "react-native";
// import Geolocation from "@react-native-community/geolocation";
import { withAuthenticator } from "aws-amplify-react-native";
import "react-native-gesture-handler";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { name as appName } from "./app.json";

// Amplify.configure(config);

import Router from "./src/navigation/Root";

const App: () => React$Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Luxi App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // IOS
      // Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};


AppRegistry.registerComponent(appName, () => App);
export default withAuthenticator(App);
