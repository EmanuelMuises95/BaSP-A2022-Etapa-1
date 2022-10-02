window.onload = function() {
    
    // Email
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputTextEmail = document.getElementById('input-text-email');
    var paragraphFirstInput = document.getElementById('error-first-paragraph');

    var addHidden = function (paragraph, display) {
        paragraph.classList.add(display);
    }

    var removeHidden = function (paragraph, display) {
        paragraph.classList.remove(display);
    }

    var addBorder = function (input, color) {
        input.classList.add(color);
    }

    var removeBorder = function (input, color) {
        input.classList.remove(color);
    }

    addHidden(paragraphFirstInput, 'hidden');

    inputTextEmail.onblur = function () {
        if (inputTextEmail.value.match(emailExpression)) {
            removeBorder(inputTextEmail, 'red-border')
            addBorder(inputTextEmail, 'green-border');
            addHidden(paragraphFirstInput, 'hidden');
        } else {
            removeBorder(inputTextEmail, 'green-border')
            addBorder(inputTextEmail, 'red-border');
            removeHidden(paragraphFirstInput, 'hidden');
        };
    };

    inputTextEmail.onfocus = function () {
        removeBorder(inputTextEmail, 'red-border');
        removeBorder(inputTextEmail, 'green-border');
        addHidden(paragraphFirstInput, 'hidden');
    };

    // Password
    var inputUserPassword = document.getElementById('input-user-password');
    var paragraphSecondInput = document.getElementById('error-second-paragraph');
    
    addHidden(paragraphSecondInput, 'hidden');

    var validatePassword = function (input, paragraph) {
        var findLetter = 0;
        var findNumber = 0;
        var stringLowerCase = input.value.toLowerCase();
        var letters = 'abcdefghijklmnñopqrstuvwxyz';
        var numbers = '0123456789';
    
        for (var i = 0; i < stringLowerCase.length; i++) {
            for (var j = 0; j < letters.length; j++) {
                if (stringLowerCase.charAt(i) === letters.charAt(j)) {
                    findLetter++
                }
            }
            for (var k = 0; k < numbers.length; k++) {
                if (stringLowerCase.charAt(i) === numbers.charAt(k)) {
                    findNumber++
                }
            }
            
            
        }
    
        if (stringLowerCase.length == findLetter + findNumber && findLetter >= 4 && findNumber >= 4) {
            removeBorder(input, 'red-border');
            addBorder(input, 'green-border');
            addHidden(paragraph, 'hidden');
        } else {
            removeBorder(input, 'green-border');
            addBorder(input, 'red-border');
            removeHidden(paragraph, 'hidden');
        }
    }

    inputUserPassword.onblur = function () {
        validatePassword(inputUserPassword, paragraphSecondInput);
    }

    inputUserPassword.onfocus = function () {
        removeBorder(inputUserPassword, 'red-border');
        removeBorder(inputUserPassword, 'green-border');
        addHidden(paragraphSecondInput, 'hidden');
    }

    // Button
    var buttonLogin = document.getElementById('login');

    buttonLogin.onclick = function (e) {
        e.preventDefault();
        if (inputTextEmail.classList.contains('red-border') && inputUserPassword.classList.contains('red-border')) {
            alert('Your email and password are not valids');
        } else if (inputTextEmail.classList.contains('red-border')){
            alert('Your email is invalid, please check again');
        } else if (inputUserPassword.classList.contains('red-border')) {
            alert('Your password is invalid, please check again');
        } else if (inputTextEmail.value == '' && inputUserPassword.value == '') {
            alert('Your email and password are empty');
        } else if (inputTextEmail.value == '') {
            alert('Your email is empty');
        } else if (inputUserPassword.value == '') {
            alert('Your password is empty');
        } else {
            alert('Your email is: ' + inputTextEmail.value + '\n' + 'Your password is: ' + inputUserPassword.value);
        } 
    };
};