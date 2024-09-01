import Cookies from 'js-cookie';

export const getTokenFromCookie = () => {
    return Cookies.get('jwt_token');
}