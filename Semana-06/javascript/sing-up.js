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
        
        if (isNaN(dniNumberInput.value) || dniNumberInput == 0 || dniNumberInput.value.length <= 7) {
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

    // Email
    var emailInput = document.getElementById('text-email');
    var emailError = document.getElementById('email-error-paragraph');
    emailError.classList.add('hidden');

    // Password
    var passwordInput = document.getElementById('input-user-password');
    var passwordError = document.getElementById('password-error-paragraph');
    passwordError.classList.add('hidden');

    // Repeat Password
    var repeatPasswordInput = document.getElementById('input-repeat-password');
    var repeatError = document.getElementById('repeat-error-paragraph');
    repeatError.classList.add('hidden');

    // Button
};
