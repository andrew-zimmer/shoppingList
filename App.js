import React, {useState} from 'react'
import {View, FlatList, StyleSheet, Alert} from 'react-native'

import uuid from 'uuid-random'

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

export default function App() {

  const [items, setItems] = useState([])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return (
        prevItems.filter((item) => item.id != id)
      )
    })
  }

  const addItem = (text) => {
    if (!text){
      Alert.alert('Error', 'Please enter an item')
    }else {
      setItems(prevItems => {
        return (
          [ {text, id: uuid()}, ...prevItems]
        )
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}/>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})
