import CONFIG from '../config/config.js';

export const GetDialogByIdFetch = async (dialogId) => {
    try {
        const response = await fetch(`${CONFIG.BASE_URL}/turing/dialogs/${dialogId}/messages`, {
            method: 'GET',
            mode: CONFIG.MODE,
            headers: CONFIG.HEADERS,
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        return response.json()
    } catch (error) {
        console.error('Failed to fetch dialog by ID:', error)
        return null
    }
}
