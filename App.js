import 'react-native-gesture-handler'
import React, {useState} from 'react'

//redux and thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducer
import Reducers from './src/reducers/index'

//page navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//app components
import HomePage from './src/containers/HomePage'
import ShoppingList from './src/containers/ShoppingList'

import Header from './src/components/HomePage/Header'

const Stack = createStackNavigator()

export default function App() {

  const store = createStore(Reducers, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: (props) => <Header {...props} />}} >
          <Stack.Screen name='Home' component={HomePage}  />
          <Stack.Screen name='Shopping List' component={ShoppingList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
