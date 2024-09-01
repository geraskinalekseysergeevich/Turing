import CONFIG from "../config/config.js";

export const PostMessageFetch = async (dialogId, messageText, token) => {
    const response = await fetch(`${CONFIG.BASE_URL}/turing/dialogs/${dialogId}/send`, {
        method: 'POST',
        mode: CONFIG.MODE,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            "text": messageText
        })
    })
    return response.json()
}