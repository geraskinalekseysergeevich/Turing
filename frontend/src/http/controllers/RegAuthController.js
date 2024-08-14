import CONFIG from "../config/config.js";

export const AuthorizationFetch = async () => {
    const response = await fetch(`${CONFIG.BASE_URL}/auth/login`, {
        method: 'POST',
        mode: CONFIG.MODE,
        headers: CONFIG.AUTH_HEADERS,
        body: JSON.stringify({
            "email": "example@gmail.com",
            "password": "qwerty"
          })
    })
    return response.json()
}