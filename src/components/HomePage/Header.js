import React from 'react'

import { Appbar } from 'react-native-paper';

import {connect} from 'react-redux'

import {signOut} from '../../actions/UserActions'

function CustomNavigationBar({ navigation, previous, loggedIn, signOut, id }) {

    const logIcon = loggedIn ? 'logout' : 'login'

    const handleClick = () => {
        if (!loggedIn){
            navigation.navigate('Log In')
        } else {
            signOut(id)
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
        loggedIn: state.loggedIn,
        id: state.id
    })
}

export default connect(mapStateToProps, {signOut})(CustomNavigationBar)
