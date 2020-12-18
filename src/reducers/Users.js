import { ActionSheetIOS } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

const originalState = { loading: false, loggedIn: false, username: '', email: '', id: '', errors: [],  groups: []}

export default function Users(state = originalState, action) {
    const storeData = async(value) => {
        try{
            await AsyncStorage.setItem('@user_jwt', value.user.authentication_token)
            await AsyncStorage.setItem('@user_email', value.user.email)
        }catch (e){
            console.log(e)
        }
    }

    const  deleteData = async() => {
        try{
            await AsyncStorage.multiRemove(['@user_jwt', '@user_email'])
        }catch (e){
            console.log(e)
        }
    }

    switch (action.type) {
        case 'SIGN_IN':
            storeData(action.payload)
            return {...state, loading: false, loggedIn: true, username: action.payload.user.username, email: action.payload.user.email, id: action.payload.user.id, groups: action.payload.user.groups}
        case 'SIGN_UP':
            storeData(action.payload)
            return {...state, loading: false, loggedIn: true, username: action.payload.user.username, email: action.payload.user.email, id: action.payload.user.id, groups: action.payload.user.groups}
        case 'SIGN_OUT':
            deleteData()
            console.log('in sign out switch statement')
            return originalState
        case 'CONFIRM_JWT':
            return state
        case 'NO_JWT':
            return state
        case 'ERRORS':
            console.log(action.payload)
            return {...state, errors: action.payload.errors}
        case 'CREATE_MOOD':
            return state
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state
    }
}
