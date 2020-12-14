import React, {useState} from 'react'
import {View, FlatList, StyleSheet, Alert} from 'react-native'

import uuid from 'uuid-random'

import Header from '../components/ShoppingList/Header'
import ListItem from '../components/ShoppingList/ListItem'
import AddItem from '../components/ShoppingList/AddItem'

export default function ShoppingList() {

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
      setItems((prevItems) => {
        return (
          [ {text, id: uuid()}, ...prevItems].map((d, index) => {return ({text: d.text,  id: d.id, key: index })})
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
        renderItem={({item}) => <ListItem item={item}  deleteItem={deleteItem}/>} />
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})
