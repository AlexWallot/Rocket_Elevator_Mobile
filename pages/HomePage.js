import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Pressable , ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';


export default class HomePage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: []
      }
      this.props.navigation.addListener('willFocus', () => {
        this.getData();
      })
    }

    componentDidMount(){
      this.getData();
    }

    async getData(){
      let response = await fetch('https://consolidationrestapi.azurewebsites.net/api/elevators/Offline')
      let repJson = await response.json();
      this.setState({ data: repJson});
    }

    render(){
      return (
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Login' })],
            });
            this.props.navigation.dispatch(resetAction);
          }}>
            <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
          <FlatList 
          data={this.state.data}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('ElevatorStatus', {Elevator: item})
          }}>
            <Text style={styles.item}> Elevator {item.id}</Text>
          </TouchableOpacity>
          }
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 34,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  }
});