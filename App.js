import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Greeting extends React.Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text> 
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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu. OK?</Text>
        <Text>My test text</Text>
        <Text>My text text</Text>
        <Greeting name='Manthan'/>
        <Greeting name='Harshi' />
      </View>
    );
  }
}

function tick() {
    const element = (
        <Text>{new Date.toLocaleTimeString()}</Text>    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
