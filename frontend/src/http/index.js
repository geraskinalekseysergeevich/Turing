import data from '../static/fields/data.json'

export const authorization = async () => {
    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": "example@gmail.com",
            "password": "qwerty"
          })
    })
    return response.json()
}

export const getAllUserDialogs = async () => {
    try {
        const response = await fetch('http://localhost:8080/turing/dialogs', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': data.token
            }
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json()
        return result

    } catch (error) {
        console.error('Error:', error)
    }
}

export const getDialogById = async (dialogId) => {
    const response = await fetch(`http://localhost:8080/turing/dialogs/${dialogId}/messages`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': data.token
        }
    })
    return response.json()
}

export const createNewDialog = async () => {
    const response = await fetch('http://localhost:8080/turing/dialogs/new', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': data.token
        }
    })
    return response.json()
}

export const sendMessage = async (dialogId, messageText) => {
    const response = await fetch(`http://localhost:8080/turing/dialogs/${dialogId}/send`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': data.token
        },
        body: JSON.stringify({
            "text": messageText
        })
    })
    return response.json()
}