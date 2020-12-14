import React from 'react'

import {View, Text, Button, StyleSheet} from 'react-native'

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
