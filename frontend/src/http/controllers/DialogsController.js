import CONFIG from "../config/config.js";

export const CreateNewDialogFetch = async () => {
    const response = await fetch(`${CONFIG.BASE_URL}/turing/dialogs/new`, {
        method: 'POST',
        mode: CONFIG.MODE,
        headers: CONFIG.HEADERS,
    })
    return response.json()
}

export const GetAllUserDialogsFetch = async () => {
    try {
        const response = await fetch(`${CONFIG.BASE_URL}/turing/dialogs`, {
            method: 'GET',
            mode: CONFIG.MODE,
            headers: CONFIG.HEADERS,
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
