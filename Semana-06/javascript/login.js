window.onload = function() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputTextEmail = document.getElementById('input-text-email');
    var paragraphFirstInput = document.getElementById('error-first-paragraph');
    var inputUserPassword = document.getElementById('input-user-password');
    var paragraphSecondInput = document.getElementById('error-second-paragraph');

    // Email
    paragraphFirstInput.classList.add('hidden');

    function removeBorder(color){
        if(inputTextEmail.classList.contains(color)){
            inputTextEmail.classList.remove(color);
        }
        
    }

    inputTextEmail.onblur = function () {
        if (inputTextEmail.value.match(emailExpression)) {
            removeBorder('red-border')
            inputTextEmail.classList.add('green-border');
            paragraphFirstInput.classList.add('hidden');
        } else {
            removeBorder('green-border')
            inputTextEmail.classList.add('red-border');
            paragraphFirstInput.classList.remove('hidden');
        };
    };

    inputTextEmail.onfocus = function () {
        inputTextEmail.classList.remove('green-border'); 
        inputTextEmail.classList.remove('red-border');
        paragraphFirstInput.classList.add('hidden');
    };

    // Password
    var passExp = /^[A-Za-z0-9]*$/;

    paragraphSecondInput.classList.add('hidden');

    function removeBorderTwo(color){
        if (inputUserPassword.classList.contains(color)) {
            inputUserPassword.classList.remove(color);
        };
    };

    inputUserPassword.onblur = function () {
        if (inputUserPassword.value.match(passExp)) {
            inputUserPassword.classList.add('green-border');
        } else if (!inputUserPassword.value.match(passExp)) {
            inputUserPassword.classList.add('red-border');
        } else if (inputUserPassword.value == '') {
            inputUserPassword.classList.add('red-border');
        }
    };
};