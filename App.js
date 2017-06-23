import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, Slider, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Greeting extends React.Component {
    render() {
        return (
            <Text style={styles.blueText}>Hi {this.props.name} !</Text> 
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

class HistoryScreen extends React.Component {
    static navigationOptions = {
        title: 'History of Peace',
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data = {[
                        {key: '2017-06-01 10:30:42', value: 4},
                        {key: '2017-06-01 11:30:42', value: 4},
                        {key: '2017-06-01 12:30:42', value: 4},
                        {key: '2017-06-02 12:30:42', value: 4},
                        {key: '2017-06-03 10:30:42', value: 4},
                    ]}
                    renderItem = {({item}) => <Text style={styles.item}>{item.key}      {item.value}</Text>}
                />
            </View>
        );
    }
}

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    };


  render() {

    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Greeting name='User Name'/>
        <Text></Text>
        <Text>How relaxed do you feel now?</Text>
        <Text></Text>
        <SliderComponent />
        <Text></Text>
        <Button 
            onPress={() => this.props.navigation.navigate('History', {user: 'Lucy'})}
            title = "History of Peace"
        />
      </View>
    );
  }
}

const SimpleAppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    History: { screen: HistoryScreen }
});

const AppNavigation = () => (
    <SimpleAppNavigator />    
);

export default class App extends React.Component {
    render() {
        return(
            <AppNavigation/> 
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c13',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    marginRight: 1,
    alignItems: 'stretch',
  },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'blue',
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
