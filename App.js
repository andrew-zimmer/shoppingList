import 'react-native-gesture-handler'
import React, {useState} from 'react'

//redux and thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducer
import Users from './src/reducers/Users'

//page navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//app components
import HomePage from './src/containers/HomePage'
import ShoppingList from './src/containers/ShoppingList'
import LogIn from './src/components/LogIn/LogIn'
import SignUp from './src/components/SignUp/SignUp'

import Header from './src/components/HomePage/Header'

const Stack = createStackNavigator()

const store = createStore(Users, applyMiddleware(thunk))

export default function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: (props) => <Header {...props} />}} >
          <Stack.Screen name='Home' component={HomePage}  />
          <Stack.Screen name='Shopping List' component={ShoppingList} />
          <Stack.Screen name='Log In' component={LogIn} />
          <Stack.Screen name='Sign Up' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
