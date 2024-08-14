import CONFIG from "../config/config.js";

export const PostMessageFetch = async (dialogId, messageText) => {
    const response = await fetch(`${CONFIG.BASE_URL}/turing/dialogs/${dialogId}/send`, {
        method: 'POST',
        mode: CONFIG.MODE,
        headers: CONFIG.HEADERS,
        body: JSON.stringify({
            "text": messageText
        })
    })
    return response.json()
}