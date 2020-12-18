
export const signUp = (userData) => {
    let formData = {
        user: {
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.passwordConfirmation,
            username: userData.username
        }
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('http://10.0.2.2:3000/v1/users', configObj)
            .then(res => res.json())
            .then(json => {
                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'SIGN_UP', payload: json.data })
                }

            })
            .catch(err => dispatch({type: 'ERRORS', payload: err}))
    }
}

export const signIn = (userData) => {
    let formData = {
        email: userData.email,
        password: userData.password
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('http://10.0.2.2:3000/v1/sessions', configObj)
            .then(res => res.json())
            .then(json => {

                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'SIGN_IN', payload: json.data })
                }

            })
            .catch(err => dispatch({type: 'ERRORS', payload: err}))
    }
}


export const signOut = (userData) => {
    let formData = {
        id: userData
    };
    let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        fetch('http://10.0.2.2:3000/v1/sessions', configObj)
            .then(res => res.json())
            .then(json => {
                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    console.log('about to dispatch sign out')
                    dispatch({ type: 'SIGN_OUT' })
                }

            })
            .catch(err => dispatch({type: 'ERRORS', payload: err}))
    }
}
