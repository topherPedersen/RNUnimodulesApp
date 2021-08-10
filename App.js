import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { Constants } from 'react-native-unimodules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  testInstallation() {
    alert(Constants.systemFonts);
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>React-Native Unimodules App</Text>
        <Button title="Test Installation" onPress={ () => this.testInstallation() } />
      </SafeAreaView>
    );
  }
}



export default App;