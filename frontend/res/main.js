document.addEventListener("DOMContentLoaded", function () {
    let signupCode = document.getElementById('code');
    signupCode.addEventListener('input', function (e) {
        let pos = getCaretPosition(signupCode);
        let code = signupCode.value;
        code = code.toUpperCase();
        code = code.replaceAll('-', '');
        code = code.replaceAll(' ', '');
        let formatedCode = "";
        while (code.length > 4) {
            formatedCode += code.substr(0, 4);
            code = code.substr(4);
            formatedCode += ' - ';
        }
        formatedCode += code;
        signupCode.value = formatedCode;
        if (pos % 7 === 5) pos += 3;
        if (pos % 7 === 0 && pos > 0) pos -= 3;
        setCaretPosition(signupCode, pos);
    });
});