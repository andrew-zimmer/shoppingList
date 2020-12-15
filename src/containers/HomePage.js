import React from 'react'

import {View, Text, Button, StyleSheet} from 'react-native'

import Header from '../components/HomePage/Header'

export default function HomePage({navigation}) {
    return (
        <View>
            <Text>
                Home Page
            </Text>

            <Button title='shopping list' onPress={() => navigation.navigate('Shopping List') } />
        </View>
    )
}

const styles = StyleSheet.create({

})
