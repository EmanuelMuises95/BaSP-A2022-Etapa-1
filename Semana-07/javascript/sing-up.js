window.onload = function () {
    // Name
    var firstNameInput = document.getElementById('first-name');
    var nameError = document.getElementById('name-error-paragraph'); 
    nameError.classList.add('hidden');
    
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

    function lettersNumberSpaces (array) {
        for (var i = 0 ; i < array.length ; i++) {
            if ((array.charCodeAt(i) >= 48 && array.charCodeAt(i) <= 57) || (array.charCodeAt(i) >= 65 &&
            array.charCodeAt(i) <= 90) || (array.charCodeAt(i) >= 97 && array.charCodeAt(i) <= 122) ||
            (array.charCodeAt(i) === 32)) {
            } else {
                return false;
            }
        }
        return true;
    }

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
            removeBorder(firstNameInput, 'green-border');
            addBorder(firstNameInput, 'red-border');
            removeHidden(nameError, 'hidden');
        } else {
            removeBorder(firstNameInput, 'red-border')
            addBorder(firstNameInput, 'green-border');
            addHidden(nameError, 'hidden');
        }
    }

    firstNameInput.onfocus = function () {
        removeBorder(firstNameInput, 'green-border');
        removeBorder(firstNameInput, 'red-border');
        addHidden(nameError, 'hidden');
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
            removeBorder(lastNameInput, 'green-border');
            addBorder(lastNameInput, 'red-border');
            removeHidden(lnameError, 'hidden');
        } else {
            removeBorder(lastNameInput, 'red-border')
            addBorder(lastNameInput, 'green-border');
            addHidden(lnameError, 'hidden');
        }
    }

    lastNameInput.onfocus = function () {
        removeBorder(lastNameInput, 'green-border');
        removeBorder(lastNameInput, 'red-border');
        addHidden(lnameError, 'hidden');
    }

    // DNI
    var dniNumberInput = document.getElementById('dni');
    var dniError = document.getElementById('dni-error-paragraph');
    dniError.classList.add('hidden');

    dniNumberInput.onblur = function () {
        
        if (isNaN(dniNumberInput.value) || dniNumberInput == '' || dniNumberInput.value.length <= 7) {
            removeBorder(dniNumberInput, 'green-border');
            addBorder(dniNumberInput, 'red-border');
            removeHidden(dniError, 'hidden');
        } else {
            removeBorder(dniNumberInput, 'red-border');
            addBorder(dniNumberInput, 'green-border');
            addHidden(dniError, 'hidden');
        }
    }

    dniNumberInput.onfocus = function () {
        removeBorder(dniNumberInput, 'green-border');
        removeBorder(dniNumberInput, 'red-border');
        addHidden(dniError, 'hidden');
    }

    // DateBorn
    var dateBornInput = document.getElementById('date-born');
    var dateError = document.getElementById('born-error-paragraph'); 
    dateError.classList.add('hidden');

    dateBornInput.onblur = function () {
        if (dateBornInput.value == '') {
            removeBorder(dateBornInput, 'green-border');
            addBorder(dateBornInput, 'red-border');
            removeHidden(dateError, 'hidden');
        } else {
            removeBorder(dateBornInput, 'red-border');
            addBorder(dateBornInput, 'green-border');
            addHidden(dateError, 'hidden');
        }
    }

    dateBornInput.onfocus = function () {
        removeBorder(dateBornInput, 'green-border');
        removeBorder(dateBornInput, 'red-border');
        addHidden(dateError, 'hidden');
    }

    // Cellphone
    var cellphoneNumberInput = document.getElementById('cellphone');
    var cellphoneError = document.getElementById('cellphone-error-paragraph');
    cellphoneError.classList.add('hidden');

    cellphoneNumberInput.onblur = function () {
        if (isNaN(cellphoneNumberInput.value) || cellphoneNumberInput.value == 0 || cellphoneNumberInput.value.length
        != 10) {
            removeBorder(cellphoneNumberInput, 'green-border');
            addBorder(cellphoneNumberInput, 'red-border');
            removeHidden(cellphoneError, 'hidden');
        } else {
            removeBorder(cellphoneNumberInput, 'red-border');
            addBorder(cellphoneNumberInput, 'green-border');
            addHidden(cellphoneError, 'hidden');
        }
    }

    cellphoneNumberInput.onfocus = function () {
        removeBorder(cellphoneNumberInput, 'green-border');
        removeBorder(cellphoneNumberInput, 'red-border');
        addHidden(cellphoneError, 'hidden');
    }

    // Direction
    var directionInput = document.getElementById('direction');
    var directionError = document.getElementById('direction-error-paragraph');
    directionError.classList.add('hidden');

    directionInput.onblur = function () {
        if (directionInput.value.length < 5 || !lettersNumberSpaces(directionInput.value.trim())) {
            removeBorder(directionInput, 'green-border');
            addBorder(directionInput, 'red-border');
            removeHidden(directionError, 'hidden');
        } else {
            removeBorder(directionInput, 'red-border');
            addBorder(directionInput, 'green-border');
            addHidden(directionError, 'hidden');
        }
    }

    directionInput.onfocus = function () {
        removeBorder(directionInput, 'green-border');
        removeBorder(directionInput, 'red-border');
        addHidden(directionError, 'hidden');
    }

    // Location
    var locationInput = document.getElementById('location');
    var locationError = document.getElementById('location-error-paragraph');
    locationError.classList.add('hidden');

    locationInput.onblur = function () {
        if (locationInput.value == '' || locationInput.value.length <= 3 || !lettersNumberSpaces(locationInput.value)) {
            removeBorder(locationInput, 'green-border');
            addBorder(locationInput, 'red-border');
            removeHidden(locationError, 'hidden');
        } else {
            removeBorder(locationInput, 'red-border');
            addBorder(locationInput, 'green-border');
            addHidden(locationError, 'hidden');
        }
    }

    locationInput.onfocus = function () {
        removeBorder(locationInput, 'green-border');
        removeBorder(locationInput, 'red-border');
        addHidden(locationError, 'hidden');
    }

    // CP
    var cpInput = document.getElementById('cp');
    var cpError = document.getElementById('cp-error-paragraph');
    cpError.classList.add('hidden');

    cpInput.onblur = function () {
        if (isNaN(cpInput.value) || cpInput.value == 0 || cpInput.value.length
        < 4 || cpInput.value.length > 5) {
            removeBorder(cpInput, 'green-border');
            addBorder(cpInput, 'red-border');
            removeHidden(cpError, 'hidden');
        } else {
            removeBorder(cpInput, 'red-border');
            addBorder(cpInput, 'green-border');
            addHidden(cpError, 'hidden');
        }
    }

    cpInput.onfocus = function () {
        removeBorder(cpInput, 'green-border');
        removeBorder(cpInput, 'red-border');
        addHidden(cpError, 'hidden');
    }

    // Email
    var emailInput = document.getElementById('text-email');
    var emailError = document.getElementById('email-error-paragraph');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    addHidden(emailError, 'hidden');

    emailInput.onblur = function () {
        if (emailInput.value.match(emailExpression)) {
            removeBorder(emailInput, 'red-border');
            addBorder(emailInput, 'green-border');
            addHidden(emailError, 'hidden');
        } else {
            removeBorder(emailInput, 'green-border');
            addBorder(emailInput, 'red-border');
            removeHidden(emailError, 'hidden');
        };
    };

    emailInput.onfocus = function () {
        removeBorder(emailInput, 'green-border');
        removeBorder(emailInput, 'red-border');
        addHidden(emailError, 'hidden');
    };
    

    // Password
    var passwordInput = document.getElementById('input-user-password');
    var passwordError = document.getElementById('password-error-paragraph');
    
    addHidden(passwordError, 'hidden');

    passwordInput.onblur = function () {
        validatePassword(passwordInput, passwordError);
    }

    passwordInput.onfocus = function () {
        removeBorder(passwordInput, 'green-border');
        removeBorder(passwordInput, 'red-border');
        addHidden(passwordError, 'hidden');
    }

    // Repeat Password
    var repeatPasswordInput = document.getElementById('input-repeat-password');
    var repeatError = document.getElementById('repeat-error-paragraph');
    
    addHidden(repeatError, 'hidden');

    repeatPasswordInput.onblur = function () {
        if (repeatPasswordInput.value != passwordInput.value || repeatPasswordInput.value == '') {
            removeBorder(repeatPasswordInput, 'green-border');
            addBorder(repeatPasswordInput, 'red-border');
            removeHidden(repeatError, 'hidden');
        } else {
            removeBorder(repeatPasswordInput, 'red-border');
            addBorder(repeatPasswordInput, 'green-border');
            addHidden(repeatError, 'hidden');
        }
    };

    repeatPasswordInput.onfocus = function () {
        removeBorder(repeatPasswordInput, 'green-border');
        removeBorder(repeatPasswordInput, 'red-border');
        addHidden(repeatError, 'hidden');
    };

    // Button
    var buttonSingUp = document.getElementById('sing-up');

    buttonSingUp.onclick = function (e) {
        var yyyy = dateBornInput.value.substring(0 , dateBornInput.value.indexOf('-'));
        var mm = dateBornInput.value.substring(dateBornInput.value.indexOf('-') + 1, dateBornInput.value.indexOf('-') + 3);
        var dd = dateBornInput.value.substring(dateBornInput.value.indexOf('-')+ 4 , dateBornInput.value.indexOf('-') + dateBornInput.value.length);
        var dateArr = [ mm, dd , yyyy];
        var dateBorn = dateArr.join('/');

        e.preventDefault();

        if(firstNameInput.classList.contains('red-border') 
            || lastNameInput.classList.contains('red-border') 
            || dniNumberInput.classList.contains('red-border') 
            || dateBornInput.classList.contains('red-border') 
            || cellphoneNumberInput.classList.contains('red-border') 
            || directionInput.classList.contains('red-border') 
            || locationInput.classList.contains('red-border') 
            || cpInput.classList.contains('red-border') 
            || emailInput.classList.contains('red-border') 
            || passwordInput.classList.contains('red-border') 
            || repeatPasswordInput.classList.contains('red-border')) {
            alert('One or more inputs are not valids');
        } else if (firstNameInput.value == '' 
                || lastNameInput.value == '' 
                || dniNumberInput.value == '' 
                || dateBornInput.value == ''
                || cellphoneNumberInput.value == '' 
                || directionInput.value == '' 
                || locationInput.value == '' 
                || cpInput.value == '' 
                || emailInput.value == '' 
                || passwordInput.value == ''
                || repeatPasswordInput.value == '') {
            alert('One or more inputs are empty');
        } else {
            var requestUrl = 
                'https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+ firstNameInput.value 
                + '&lastName=' + lastNameInput.value
                + '&dni=' + dniNumberInput.value
                + '&dob=' + dateBorn
                + '&phone=' + cellphoneNumberInput.value
                + '&address=' + directionInput.value
                + '&city=' + locationInput.value
                + '&zip=' + cpInput.value
                + '&email=' + emailInput.value
                + '&password=' + passwordInput.value
                if (repeatPasswordInput.value === passwordInput.value) {
                    
                    fetch(requestUrl)
                        .then(function(response){
                            return response.json();
                        })
                        .then(function(data){
                            console.log(data);
                            if(data.success) {
                                alert(data.msg + '\n' 
                                + 'Your name is: ' + firstNameInput.value + '\n' 
                                + 'Your last name is: ' + lastNameInput.value + '\n'
                                + 'Your dni is: ' + dniNumberInput.value + '\n'
                                + 'Your date of birthday is: ' + dateBornInput.value + '\n'
                                + 'Your phone is: ' + cellphoneNumberInput.value + '\n'
                                + 'Your address is: ' + directionInput.value + '\n'
                                + 'Your city is: ' + locationInput.value + '\n'
                                + 'Your zip is: ' + cpInput.value + '\n'
                                + 'Your email is: ' + emailInput.value + '\n'
                                + 'Your password is: ' + passwordInput.value + '\n'
                                );
                            } else {
                                console.log(data.errors);
                                allErrors = [];
                                for (var i = 0; i < data.errors.length; i++) {
                                    allErrors += '\n' + data.errors[i].msg
                                }
                                throw new Error(allErrors);
                            }
                        })
                        .catch(function(error){
                            alert(error);
                        })
                }
        };
    };
};
