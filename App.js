import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Slider } from 'react-native';

class Greeting extends React.Component {
    render() {
        return (
            <Text style={styles.blueText}>Hi {this.props.name} !</Text> 
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
            <View>
    	        <Slider 
    	            value={5}
    	            step={1} minimumValue={1} maximumValue={10} 
                    onValueChange = {(value) => this.setState({value})}
    	         />
                 <Text style={styles.sliderText}>{this.state.value}</Text>
            </View>
	    );
    }
}

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Greeting name='User Name'/>
        <Text></Text>
        <Text>How relaxed do you feel now?</Text>
        <Text></Text>
        <SliderComponent />
        <Text></Text>
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

  blueText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  sliderText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },

  slider: {
    width: 300,
  }
});
