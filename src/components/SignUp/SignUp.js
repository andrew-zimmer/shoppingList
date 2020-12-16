import React, {useState} from 'react'

import { View, Text } from 'react-native'

import { TextInput, Subheading, Button } from 'react-native-paper'

export default function SignUp({navigation}) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleUsername = (value) => {
        setUsername(value)
    }

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handlePasswordConfirmation = (value) => {
        setPasswordConfirmation(value)
    }

    const handlePressAlreadyMember = () => {
        navigation.navigate('Log In')
    }

    return (
        <View>
            <View>
                <Subheading>Sign Up Page</Subheading>
            </View>
            <View>
                <TextInput
                    label='Username'
                    value={username}
                    mode='outlined'
                    onChangeText={handleUsername}
                    textContentType='username'
                    theme={{colors: {primary: 'aqua'}}} />
            </View>
            <View>
                <TextInput
                    label='Email'
                    value={email}
                    mode='outlined'
                    onChangeText={handleEmail}
                    textContentType='emailAddress'
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
                <TextInput
                    label='passwordConfirmation'
                    value={passwordConfirmation}
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={handlePasswordConfirmation}
                    theme={{colors: {primary: 'aqua'}}} />
            </View>

            <View>
                <Button icon='login' mode='contained' style={{backgroundColor: 'aqua'}}> Log In</Button>
            </View>
            <View>
                <Text onPress={handlePressAlreadyMember}>
                    Already a member?
                </Text>
            </View>
        </View>
    )
}
