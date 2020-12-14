
export default function Users(state = { loading: false, loggedIn: false, username: '', email: '', id: '',  groups: []}, action) {
    switch (action.type) {
        case 'SIGN_IN':
            return state
        case 'SIGN_UP':
            return state
        case 'SIGN_OUT':
            return state
        case 'CONFIRM_JWT':
            return state
        case 'NO_JWT':
            return state
        case 'ERRORS':
            return state
        case 'CREATE_MOOD':
            return state
        case 'LOADING':
            return state
        default:
            return state
    }
}
