import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Slider } from 'react-native';

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

class SliderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 5};
    }

    render() {
	    return (
	        <Slider 
	            value={5}
	            step={1} minimumValue={1} maximumValue={10} 
	        />
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
        <SliderComponent />
        <Text></Text>
        <Text>Value: {5}</Text>
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
    marginLeft: 1,
    marginRight: 1,
    alignItems: 'stretch',
  },

  bluetext: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  slider: {
    width: 300,
  }
});
