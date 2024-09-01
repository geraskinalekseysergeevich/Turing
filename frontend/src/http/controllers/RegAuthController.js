import CONFIG from "../config/config.js";

export const AuthorizationFetch = async (email, password) => {
    const response = await fetch(`${CONFIG.BASE_URL}/auth/login`, {
        method: 'POST',
        mode: CONFIG.MODE,
        headers: CONFIG.AUTH_HEADERS,
        body: JSON.stringify({
            "email": email,
            "password": password
          })
    })
    return response.json()
}

// "example@gmail.com"
// "qwerty"