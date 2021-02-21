/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from "react";
 import {View} from "react-native";
 import Contents from "./Components/Contents";

class App extends React.Component {
  render() {
    return (
      <View>
        <Contents/>
      </View>
    )
  }
}

export default App;