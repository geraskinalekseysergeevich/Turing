import data from '../../static/fields/data.json'

const BASE_URL = 'http://localhost:8080';

const CONFIG = {
    BASE_URL,
    MODE: 'cors',
    AUTH_HEADERS: {
        'Content-Type': 'application/json'
    },
    HEADERS: {
        'Content-Type': 'application/json',
        'Authorization': data.token
    }
}

export default CONFIG;