import React from 'react'

import { Appbar } from 'react-native-paper';

import {connect} from 'react-redux'

function CustomNavigationBar({ navigation, previous, loggedIn }) {

    const logIcon = loggedIn ? 'logout' : 'login'

    const handleClick = () => {
        console.log('clicky clack')
        if (!loggedIn){
            navigation.navigate('Log In')
        }
    }

  return (
    <Appbar.Header style={{backgroundColor: 'skyblue'}}>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} color='white' /> : null}
        <Appbar.Content title="Shopping List" titleStyle={{color: 'white'}} />
        <Appbar.Action icon={logIcon} style={{color: 'white'}} color='white' onPress={handleClick} />
    </Appbar.Header>
  );
}

const mapStateToProps = state => {
    return ({
        loggedIn: state.users.loggedIn
    })
}

export default connect(mapStateToProps)(CustomNavigationBar)
