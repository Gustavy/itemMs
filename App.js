import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NewItem from './src/screens/NewItem';

const switchNavigation = createSwitchNavigator({
  authenticationFLow: createStackNavigator({
    signUp: Register,
    signIn: Login
  }),
  mainAppFlow: createBottomTabNavigator({
    homePageFlow: createStackNavigator({
      home: Home,
      
    }),
    addItem: NewItem

  })
})

const App = createAppContainer(switchNavigation);

export default ()=>{
  return(
    <App/>
  )
}
