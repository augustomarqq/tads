function saveToken(token) {
    localStorage.setItem("token", `${token.token_type} ${token.access_token}`);
}

function getToken(token) {
    return localStorage.getItem("token");
}

function rmvToken(token) {
    return localStorage.removeItem("token");
}

export default {saveToken, getToken, rmvToken};