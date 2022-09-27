window.onload = function () {
    // Name
    var firstNameInput = document.getElementById('first-name');
    var nameError = document.getElementById('name-error-paragraph'); 
    nameError.classList.add('hidden');
    
    var letters = 'abcdefghijklmnñopqrstuvwxyz';

    firstNameInput.onblur = function () {
        var findLetter = 0;
        var stringLowerCase = firstNameInput.value.toLowerCase();
        
        for (var i = 0; i < firstNameInput.length; i++) {
            for (var j = 0; j < letters.length; i++) {
                if (stringLowerCase.charAt(i) === letters.charAt(j)) {
                    findLetter++
                }
            }
        }
        if (!isNaN(firstNameInput.value) || firstNameInput == '' || firstNameInput.value.length <= 3) {
            firstNameInput.classList.remove('green-border')
            firstNameInput.classList.add('red-border');
            nameError.classList.remove('hidden');
        } else {
            firstNameInput.classList.add('green-border');
            firstNameInput.classList.add('green-border');
            nameError.classList.add('hidden');
        }
    }

    firstNameInput.onfocus = function () {
        firstNameInput.classList.remove('green-border');
        firstNameInput.classList.remove('red-border');
        nameError.classList.add('hidden');
    }

    // Last Name
    var lastNameInput = document.getElementById('last-name');
    var lnameError = document.getElementById('lname-error-paragraph');
    lnameError.classList.add('hidden');

    lastNameInput.onblur = function () {
        var findLetter = 0;
        var stringLowerCase = lastNameInput.value.toLowerCase();
        
        for (var i = 0; i < lastNameInput.length; i++) {
            for (var j = 0; j < letters.length; i++) {
                if (stringLowerCase.charAt(i) === letters.charAt(j)) {
                    findLetter++
                }
            }
        }
        if (!isNaN(lastNameInput.value) || lastNameInput == '' || lastNameInput.value.length <= 3) {
            lastNameInput.classList.remove('green-border')
            lastNameInput.classList.add('red-border');
            lnameError.classList.remove('hidden');
        } else {
            lastNameInput.classList.add('green-border');
            lastNameInput.classList.add('green-border');
            lnameError.classList.add('hidden');
        }
    }

    lastNameInput.onfocus = function () {
        lastNameInput.classList.remove('green-border');
        lastNameInput.classList.remove('red-border');
        nameError.classList.add('hidden');
    }

    // DNI
    var dniNumberInput = document.getElementById('dni');
    var dniError = document.getElementById('dni-error-paragraph');
    dniError.classList.add('hidden');

    dniNumberInput.onblur = function () {
        
        if (isNaN(dniNumberInput.value) || dniNumberInput == '' || dniNumberInput.value.length <= 7) {
            dniNumberInput.classList.remove('green-border')
            dniNumberInput.classList.add('red-border');
            dniError.classList.remove('hidden');
        } else {
            dniNumberInput.classList.add('green-border');
            dniNumberInput.classList.add('green-border');
            dniError.classList.add('hidden');
        }
    }

    dniNumberInput.onfocus = function () {
        dniNumberInput.classList.remove('green-border');
        dniNumberInput.classList.remove('red-border');
        dniError.classList.add('hidden');
    }

    // DateBorn
    var dateBornInput = document.getElementById('date-born');
    var dateError = document.getElementById('born-error-paragraph'); 
    dateError.classList.add('hidden');

    dateBornInput.onblur = function () {
        if (dateBornInput.value == '') {
            dateBornInput.classList.remove('green-border')
            dateBornInput.classList.add('red-border');
            dateError.classList.remove('hidden');
        } else {
            dateBornInput.classList.add('green-border');
            dateBornInput.classList.add('green-border');
            dateError.classList.add('hidden');
        }
    }

    dateBornInput.onfocus = function () {
        dateBornInput.classList.remove('green-border');
        dateBornInput.classList.remove('red-border');
        dateError.classList.add('hidden');
    }

    // Cellphone
    var cellphoneNumberInput = document.getElementById('cellphone');
    var cellphoneError = document.getElementById('cellphone-error-paragraph');
    cellphoneError.classList.add('hidden');

    cellphoneNumberInput.onblur = function () {
        if (isNaN(cellphoneNumberInput.value) || cellphoneNumberInput.value == 0 || cellphoneNumberInput.value.length
        != 10) {
            cellphoneNumberInput.classList.remove('green-border')
            cellphoneNumberInput.classList.add('red-border');
            cellphoneError.classList.remove('hidden');
        } else {
            cellphoneNumberInput.classList.add('green-border');
            cellphoneNumberInput.classList.add('green-border');
            cellphoneError.classList.add('hidden');
        }
    }

    cellphoneNumberInput.onfocus = function () {
        cellphoneNumberInput.classList.remove('green-border');
        cellphoneNumberInput.classList.remove('red-border');
        cellphoneError.classList.add('hidden');
    }

    // Direction
    var directionInput = document.getElementById('direction');
    var directionError = document.getElementById('direction-error-paragraph');
    directionError.classList.add('hidden');

    // Location
    var locationInput = document.getElementById('location');
    var locationError = document.getElementById('location-error-paragraph');
    locationError.classList.add('hidden');

    // CP
    var cpInput = document.getElementById('cp');
    var cpError = document.getElementById('cp-error-paragraph');
    cpError.classList.add('hidden');

    cpInput.onblur = function () {
        if (isNaN(cpInput.value) || cpInput.value == 0 || cpInput.value.length
        < 4 || cpInput.value.length > 5) {
            cpInput.classList.remove('green-border')
            cpInput.classList.add('red-border');
            cpError.classList.remove('hidden');
        } else {
            cpInput.classList.add('green-border');
            cpInput.classList.add('green-border');
            cpError.classList.add('hidden');
        }
    }

    cpInput.onfocus = function () {
        cpInput.classList.remove('green-border');
        cpInput.classList.remove('red-border');
        cpError.classList.add('hidden');
    }

    // Email
    var emailInput = document.getElementById('text-email');
    var emailError = document.getElementById('email-error-paragraph');
    emailError.classList.add('hidden');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function removeBorder(color){
        if(emailInput.classList.contains(color)){
            emailInput.classList.remove(color);
        }
    }

    emailInput.onblur = function () {
        if (emailInput.value.match(emailExpression)) {
            removeBorder('red-border')
            emailInput.classList.add('green-border');
            emailError.classList.add('hidden');
        } else {
            removeBorder('green-border')
            emailInput.classList.add('red-border');
            emailError.classList.remove('hidden');
        };
    };

    emailInput.onfocus = function () {
        emailInput.classList.remove('green-border'); 
        emailInput.classList.remove('red-border');
        emailError.classList.add('hidden');
    };
    

    // Password
    var passwordInput = document.getElementById('input-user-password');
    var passwordError = document.getElementById('password-error-paragraph');
    passwordError.classList.add('hidden');

    var letters = 'abcdefghijklmnñopqrstuvwxyz';
    var numbers = '0123456789';

    function removeBordertwo(color){
        if(passwordInput.classList.contains(color)){
            passwordInput.classList.remove(color);
        }
    }

    function validatePassword() {
        var findLetter = 0;
        var findNumber = 0;
        var stringLowerCase = passwordInput.value.toLowerCase();

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
            removeBordertwo('red-border');
            passwordInput.classList.add('green-border');
            passwordError.classList.add('hidden');
        } else {
            removeBordertwo('green-border');
            passwordInput.classList.add('red-border');
            passwordError.classList.remove('hidden');
        }
    }

    passwordInput.onblur = function () {
        validatePassword();
    }

    passwordInput.onfocus = function () {
        passwordInput.classList.remove('green-border');
        passwordInput.classList.remove('red-border');
        passwordError.classList.add('hidden')
    }

    // Repeat Password
    var repeatPasswordInput = document.getElementById('input-repeat-password');
    var repeatError = document.getElementById('repeat-error-paragraph');
    repeatError.classList.add('hidden');

    repeatPasswordInput.onblur = function () {
        if (repeatPasswordInput.value != passwordInput.value || repeatPasswordInput.value == '') {
            removeBordertwo('green-border');
            repeatPasswordInput.classList.add('red-border');
            repeatError.classList.remove('hidden');
        } else {
            removeBordertwo('red-border');
            repeatPasswordInput.classList.add('green-border');
            repeatError.classList.add('hidden');
        }
    };

    repeatPasswordInput.onfocus = function () {
        repeatPasswordInput.classList.remove('green-border'); 
        repeatPasswordInput.classList.remove('red-border');
        repeatError.classList.add('hidden');
    };

    // Button
    var buttonLogin = document.getElementById('sing-up');
    var errorsAll = document.querySelectorAll('form.login-form > p');
    console.log(errorsAll);
    var countCheck = 0;

    buttonLogin.onclick = function () {
        
        for (var i = 0; i < errorsAll.length; i++) {
            if (errorsAll[i].classList.contains('hidden')) {
                countCheck++;
            } 
        }

        if (countCheck == 11) {
            alert(firstNameInput.value + '\n' 
                + lastNameInput.value + '\n'
                + dniNumberInput.value + '\n'
                + dateBornInput.value + '\n'
                + cellphoneNumberInput.value + '\n'
                + directionInput.value + '\n'
                + locationInput.value + '\n'
                + cpInput.value + '\n'
                + emailInput.value + '\n'
                + passwordInput.value + '\n'
                + repeatPasswordInput.value);
        } else {
            alert('Corrobore los campos');
        }
    }



};
