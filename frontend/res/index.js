if (location.pathname === '/') {
    if (getCookie('age')) location.replace('/' + getCookie('age'));
}

function setAge(age) {
    setCookie('age', age, 365);
    location.replace('/' + getCookie('age'));
}