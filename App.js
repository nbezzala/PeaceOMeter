import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends React.Component {
    render() {
        return (
            <Text>Hi {this.props.name} !</Text> 
        );
    }
}


class Bananas extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='User Name'/>
        <Bananas />
        <Text>How relaxed do you feel now?</Text>
        <Text></Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu. OK?</Text>
        <Text></Text>
        <Text>My test text</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bluetext: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
