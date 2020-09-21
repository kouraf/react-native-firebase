import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Home from "./src/Home";
import AddContact from "./src/AddContact";
import EditContact from "./src/EditContact";

export default App = () => (
  <NativeRouter>
    <StatusBar hidden />
    <Route exact path="/" component={Home} />
    <Route path="/add" component={AddContact} />
    <Route path="/edit/:id" component={EditContact} />
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    backgroundColor: "#f0fa23"
  },
  homeLink: {
    marginLeft: 10
  },
  addLink: {
    marginRight: 10,
    backgroundColor: "red",
    borderRadius: 100,
    width: 30,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white"
  }
});
