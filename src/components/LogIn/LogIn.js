import React, {useState, useEffect} from 'react'

import { View, Platform, Text } from 'react-native'

import { connect } from 'react-redux'
import { signIn } from '../../actions/UserActions'

import { TextInput, Subheading, Checkbox, Button } from 'react-native-paper'

function LogIn({navigation, signIn, loggedIn}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)



    const handleEmail = (value) => {
       setEmail(value)
    }

     const handlePassword = (value) => {
        setPassword(value)
     }

     const handleCheckbox = () => {
         setCheckbox(prevValue => {
             return (!prevValue)
         })
     }

     const handlePressNotAMember = () => {
         navigation.navigate('Sign Up')
     }

     const handleLogIn = () => {
        if (email && password){
            const data = {
                email: email,
                password: password
            }

            signIn(data)
        }
     }
     console.log('Is logged in:', loggedIn)
    if (loggedIn){
        navigation.navigate('Home')
    }
        return (
            <View>
                <View>
                    <Subheading>Log In Page</Subheading>
                </View>
                <View>
                    <TextInput
                        label='Email'
                        value={email}
                        mode='outlined'
                        style={{borderColor: 'black'}}
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
                    { Platform.OS === 'ios' ?
                    <Checkbox.Item label='Remember Me' labelStyle={{color: 'black'}} mode='ios' status={checkbox ? 'checked' : 'unchecked'} onPress={handleCheckbox} />
                    :
                    <Checkbox.Item label='Remember Me' labelStyle={{color: 'black'}} mode='android' status={checkbox ? 'checked' : 'unchecked'} onPress={handleCheckbox} />}
                </View>

                <View>
                    <Button icon='login' mode='contained' style={{backgroundColor: 'aqua'}} onPress={handleLogIn}> Log In</Button>
                </View>
                <View>
                    <Text onPress={handlePressNotAMember}>
                        Not a member?
                    </Text>
                </View>

            </View>
        )

}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {signIn})(LogIn)
