import React from 'react';
import { StatusBar } from 'react-native';
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

