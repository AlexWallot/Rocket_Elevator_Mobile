import React, {Component} from 'react';
import { createStackNavigator, AppCon } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';   
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ElevatorStatusPage from './pages/ElevatorStatusPage'

const AppNavigator = createStackNavigator(  
  {  
    Login: LoginPage,
    Home: HomePage,
    ElevatorStatus: ElevatorStatusPage

  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  

export default class App extends Component {
  render(){
    return <AppContainer />
  }
  
}