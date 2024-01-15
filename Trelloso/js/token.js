function saveToken(token) {
    localStorage.setItem("token", `${token.token_type} ${token.access_token}`);
}

function getToken() {
    return localStorage.getItem("token");
}

function rmvToken() {
    return localStorage.removeItem("token");
}

export default {saveToken, getToken, rmvToken};