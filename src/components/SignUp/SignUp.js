import React, {useState} from 'react'

//React Native Components
import { View, Text, Alert } from 'react-native'

import {connect} from 'react-redux'

//React Native Paper Components
import { TextInput, Subheading, Button } from 'react-native-paper'

//User Actions for state management
import {signUp} from '../../actions/UserActions'

function SignUp({navigation, signUp, loggedIn, errors}) {

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

    const handlePress = () => {
        if ( !email || !username || !password || !passwordConfirmation){
            Alert.alert('All fields must be filed')
        } else if (password !== passwordConfirmation){
            Alert.alert('Password and Password Confirmation must match')
        } else {
            const data = {
                email: email,
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation
            }
            signUp(data)
        }
    }
    console.log(loggedIn)
    if (loggedIn){
        navigation.navigate('Home')
    }else {
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
                    <Button icon='login' mode='contained' onPress={handlePress} style={{backgroundColor: 'aqua'}}> Log In</Button>
                </View>
                <View>
                    <Text onPress={handlePressAlreadyMember}>
                        Already a member?
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors: state.errors,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {signUp})(SignUp)
