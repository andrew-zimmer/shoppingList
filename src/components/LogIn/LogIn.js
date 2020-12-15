import React, {useState} from 'react'

import { View, Platform, Text } from 'react-native'

import { TextInput, Subheading, Checkbox, Button } from 'react-native-paper'

export default function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const handleUsername = (value) => {
       setUsername(value)
    }

     const handlePassword = (value) => {
        setPassword(value)
     }

     const handleCheckbox = () => {
         setCheckbox(prevValue => {
             return (!prevValue)
         })
     }

    return (
        <View>
            <View>
                <Subheading>Log In Page</Subheading>
            </View>
            <View>
                <TextInput
                    label='Username'
                    value={username}
                    mode='outlined'
                    style={{borderColor: 'black'}}
                    onChangeText={handleUsername}
                    theme={{colors: {primary: 'aqua'}}} />
            </View>
            <View>
                <TextInput
                    label='password'
                    value={password}
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={handlePassword}
                    theme={{colors: {primary: 'aqua'}}} />
            </View>
            <View>
                { Platform.OS === 'ios' ?
                <Checkbox.Item label='Remember Me' labelStyle={{color: 'black'}} mode='ios' status={checkbox ? 'checked' : 'unchecked'} onPress={handleCheckbox} />
                :
                <Checkbox.Item label='Remember Me' labelStyle={{color: 'black'}} mode='android' status={checkbox ? 'checked' : 'unchecked'} onPress={handleCheckbox} />}
            </View>

            <View>
                <Button icon='login' mode='contained' style={{backgroundColor: 'aqua'}}> Log In</Button>
            </View>
            <View>
                <Text onPress={() => console.log('clicky clack')}>
                    Not a member?
                </Text>
            </View>

        </View>
    )
}
