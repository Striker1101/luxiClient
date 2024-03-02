import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Trips" component={() => <DummyScreen name={"Your Trips"} />} />
        <Drawer.Screen name="Package" component={() => <DummyScreen name={"Package"} />} />
        <Drawer.Screen name="Food Order" component={() => <DummyScreen name={"Food Order"} />} />
        <Drawer.Screen name="Video call" component={() => <DummyScreen name={"Video call"} />} />
        <Drawer.Screen name="Wallet" component={() => <DummyScreen name={"Wallet"} />} />
        <Drawer.Screen name="Settings" component={() => <DummyScreen name={"Settings"} />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
