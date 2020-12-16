
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
        fetch('/api/v1/users', configObj)
            .then(res => res.json())
            .then(json => {
                if (json.errors) {
                    dispatch({ type: 'ERRORS', payload: json })
                } else {
                    dispatch({ type: 'SIGN_UP', payload: json.data.user })
                }

            })
            .catch(err => console.log(err))
    }
}
