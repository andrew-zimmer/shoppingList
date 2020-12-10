import React, {useState} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

import uuid from 'uuid-random'

import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return (
        prevItems.filter((item) => item.id != id)
      )
    })
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
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
