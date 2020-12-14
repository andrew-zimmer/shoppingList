import React, {useState} from 'react'

import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome'


export default function AddItem({addItem}) {

    const [text, setText] = useState('')

    const onChange = (value) => setText(value)

    const handlePress = () => {
        addItem(text)
        setText('')
    }

    return (
        <View>
            <TextInput placeholder="Add Item..." value={text} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} onPress={handlePress} >
                    <Icon name='plus' size={20} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})
