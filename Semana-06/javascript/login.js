window.onload = function() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputTextEmail = document.getElementById('input-text-email');
    var paragraphFirstInput = document.getElementById('error-first-paragraph');
    var inputUserPassword = document.getElementById('input-user-password');
    var paragraphSecondInput = document.getElementById('error-second-paragraph');

    paragraphFirstInput.classList.add('hidden');

    inputTextEmail.onblur = function () {
        if (inputTextEmail.value.match(emailExpression)) {
            inputTextEmail.classList.add('green-border');
            paragraphFirstInput.classList.add('hidden');
        } else {
            inputTextEmail.classList.add('red-border');
            paragraphFirstInput.classList.remove('hidden');
        };
    };

    inputTextEmail.onfocus = function () {
        inputTextEmail.classList.remove('green-border') || inputTextEmail.classList.remove('red-border');
    };

    inputTextEmail.onfocus = function () {
        paragraphFirstInput.classList.add('hidden');
    };

    paragraphSecondInput.classList.add('hidden');

    // inputUserPassword.onblur = function () {
    //     if (inputUserPassword.value < 8) {
    //         inputUserPassword.classList.add('red-border');
    //         paragraphSecondInput.classList.remove('hidden');
    //     } else {
    //         inputUserPassword.classList.add('green-border');
    //         paragraphSecondInput.classList.add('hidden');
    //     }
    // };

};