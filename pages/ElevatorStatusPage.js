import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';

export default class ElevatorStatusPage extends React.Component {
  constructor(props){
    super(props);
    const { Elevator } = this.props.navigation.state.params;
    this.state = {
      id: Elevator.id,
      status: Elevator.status,
      color: 'red'
    }
  }
  
  getElevatorStatus = () => {
    fetch('https://consolidationrestapi.azurewebsites.net/api/elevators/' + this.state.id + '/status/')
    .then((response) => response.json())
    .then((json) => {
      this.setState({ status: json.status });
    })
  }

  onPressHandler = () =>{
    fetch('https://consolidationrestapi.azurewebsites.net/api/elevators/update/' + this.state.id + '/online/')
        .then((response) => {
          if (response.status == 200) {
            this.setState({ color: 'green'});
            this.getElevatorStatus();
          }else
            alert(response.status);
        })
  }

  render() {
    return (
      <View style={{backgroundColor: this.state.color,flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'}}>
        <Text style={styles.text1}>Elevator {this.state.id}</Text>
        <Text style={styles.text2}>Status is {this.state.status}</Text>
        <Pressable style={styles.button} onPress={this.onPressHandler}>
            <Text style={styles.text}>Change Status</Text>
        </Pressable>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  text1: {
    padding: 10,
    fontSize: 24,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  text2: {
    padding: 10,
    fontSize: 24,
    marginHorizontal: 10,
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue'
  }
});