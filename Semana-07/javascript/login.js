window.onload = function() {
    
    // Email
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputTextEmail = document.getElementById('input-text-email');
    var paragraphFirstInput = document.getElementById('error-first-paragraph');
    
    var addBorder = function (input, color) {
        input.classList.add(color);
    }

    var addHidden = function (paragraph, display) {
        paragraph.classList.add(display);
    }

    var removeHidden = function (paragraph, display) {
        paragraph.classList.remove(display);
    }

    var removeBorder = function (input, color) {
        if(input.classList.contains(color)){
            input.classList.remove(color);
        }
    }

    var validateEmail = function (input, email, paragraph, color) {
        if (input.value.match(email)) {
            addBorder(input, color);
            addHidden(paragraph, display);
        } else if (!input.value.match(email)) {
            input.classList.add('red-border');
            paragraph.classList.remove('hidden');
        } else if (input.value == '' || input.value == ' ' || input.value == null) {
            input.classList.add('red-border');
            paragraph.classList.remove('hidden');
        }
    };

    inputTextEmail.onblur = function () {
        if (validateEmail(inputTextEmail, emailExpression, paragraphFirstInput)) {
            removeBorder(inputTextEmail, 'red-border')
            addBorder(inputTextEmail, 'green-border');
            addHidden(paragraphFirstInput ,'hidden');
        } else {
            removeBorder(inputTextEmail, 'green-border')
            addBorder(inputTextEmail, 'red-border');
            removeHidden(paragraphFirstInput, 'hidden');
        };
    };

    inputTextEmail.onfocus = function () {
        removeBorder(inputTextEmail, 'green-border'); 
        removeBorder(inputTextEmail, 'red-border');
        addHidden(paragraphFirstInput ,'hidden');
    };

    // // Password
    // var inputUserPassword = document.getElementById('input-user-password');
    // var paragraphSecondInput = document.getElementById('error-second-paragraph');

    // var letters = 'abcdefghijklmnñopqrstuvwxyz';
    // var numbers = '0123456789';
    
    // paragraphSecondInput.classList.add('hidden');

    // function removeBordertwo(color){
    //     if(inputUserPassword.classList.contains(color)){
    //         inputUserPassword.classList.remove(color);
    //     }
    // }

    // function validatePassword() {
    //     var findLetter = 0;
    //     var findNumber = 0;
    //     var stringLowerCase = inputUserPassword.value.toLowerCase();

    //     for (var i = 0; i < stringLowerCase.length; i++) {
    //         for (var j = 0; j < letters.length; j++) {
    //             if (stringLowerCase.charAt(i) === letters.charAt(j)) {
    //                 findLetter++
    //             }
    //         }
    //         for (var k = 0; k < numbers.length; k++) {
    //             if (stringLowerCase.charAt(i) === numbers.charAt(k)) {
    //                 findNumber++
    //             }
    //         }
    //     }
        
    //     if (stringLowerCase.length == findLetter + findNumber && findLetter > 0 && findNumber > 0) {
    //         removeBordertwo('red-border');
    //         inputUserPassword.classList.add('green-border');
    //         paragraphSecondInput.classList.add('hidden');
    //     } else {
    //         removeBordertwo('green-border');
    //         inputUserPassword.classList.add('red-border');
    //         paragraphSecondInput.classList.remove('hidden');
    //     }
    // }

    // inputUserPassword.onblur = function () {
    //     validatePassword();
    // }

    // inputUserPassword.onfocus = function () {
    //     inputUserPassword.classList.remove('green-border');
    //     inputUserPassword.classList.remove('red-border');
    //     paragraphSecondInput.classList.add('hidden');
    // }

    // // Button
    // var buttonLogin = document.getElementById('login');
    // var errorsAll = document.querySelectorAll('form.login-form > p');
    // var countCheck = 0;
    // var arrayError = [];

    // buttonLogin.onclick = function () {
    //     countCheck = 0;
    //     arrayError.pop()
    //     for ( var i = 0 ; i < errorsAll.length ; i++ ) {
    //         if (errorsAll[i].classList.contains('hidden')) {
    //             countCheck++
    //             arrayError.pop()
    //         } else if (!errorsAll[i].classList.contains('hidden')) {
    //             countCheck--
    //             arrayError.push('\n' + errorsAll[i].textContent + ' -> Invalid or empty Input');
    //         } else {
    //             countCheck--
    //             arrayError.push('\n' + errorsAll[i].textContent + ' -> Invalid or empty Input');
    //         }
    //     }
    //     console.log(countCheck);
    //     console.log(arrayError);

    //     if (countCheck == 2) {
    //         alert ('Email: ' + inputTextEmail.value + '\n' +
    //             'Password: ' + inputUserPassword.value + '\n');
    //     } else {
    //         alert (arrayError);
    //     }
    // };

};