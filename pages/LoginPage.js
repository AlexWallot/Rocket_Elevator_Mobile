import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, TextInput, Image, Pressable } from 'react-native';
import React, {Component} from 'react';
import { createStackNavigator, AppCon } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';   

class LoginPage extends React.Component{
    constructor(props) {
      super(props);
    }
  
    email = '';
  
    handleEmail = (text) => {
      this.email = text;
    }
  
    onPressHandler = ()=>{
      if(this.email != ''){
        fetch('https://consolidationrestapi.azurewebsites.net/api/employees/'+this.email)
        .then((response) => {
          if (response.status == 200) {
              this.props.navigation.navigate('Home')
          }else{
            alert('enter a valid email');
          }
        })
      }else{
        alert('enter a valid email');
      }
    }
  
    render(){
      return (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/R2-1.png')}
          />
          <Text style={styles.titleText}>
            {"Employee Email"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Employee Email"
            onChangeText={(text) => this.handleEmail(text)}
          />
          <Pressable style={styles.button} onPress={this.onPressHandler}>
            <Text>Connect</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      );
    }
  }

  export default LoginPage;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 300,
      marginTop: 20,
      marginBottom: 50,
      borderWidth: 1,
      padding: 10,
    },
    logo: {
      width: 200, 
      height: 200, 
      borderRadius: 200,
    },
    titleText: {
      marginTop: 50,
      fontSize: 20,
      fontWeight: "bold"
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
  