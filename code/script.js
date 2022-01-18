function plain2cipher() {
    document.getElementById("decrypt").style.backgroundColor = "#08d";
    document.getElementById("encrypt").style.backgroundColor = "#dc2f55";

    // plain is the variable which stores the user input string in plain text format
    var plain = document.getElementById("plain").value;

    // cipher is the variable which stores the encrypted string
    var cipher = "";

    // iterate through the string character-wise
    for (var i = 0; i < plain.length; i++) {
        // lowercase characters are processed as per the algorithm
        if (96 < plain.charCodeAt(i) && plain.charCodeAt(i) < 123) {
            cipher += String.fromCharCode(123 - plain.charCodeAt(i) + 96);
        }

        // uppercase characters are processed as per the algorithm
        else if (64 < plain.charCodeAt(i) && plain.charCodeAt(i) < 91) {
            cipher += String.fromCharCode(91 - plain.charCodeAt(i) + 64);
        }

        // other characters including whitespaces are left unchanged
        else {
            cipher += plain[i];
        }
    }

    // the encrypted string is updated in the UI
    document.getElementById("cipher").value = cipher;
}

function cipher2plain() {
    document.getElementById("encrypt").style.backgroundColor = "#08d";
    document.getElementById("decrypt").style.backgroundColor = "#dc2f55";

    // cipher is the variable which stores the user input string in cipher text format
    var cipher = document.getElementById("cipher").value;

    // plain is the variable which stores the decrypted string
    var plain = "";

    // iterate through the string character-wise
    for (var i = 0; i < cipher.length; i++) {
        // lowercase characters are processed as per the algorithm
        if (96 < cipher.charCodeAt(i) && cipher.charCodeAt(i) < 123) {
            plain += String.fromCharCode(123 - cipher.charCodeAt(i) + 96);
        }

        // uppercase characters are processed as per the algorithm
        else if (64 < cipher.charCodeAt(i) && cipher.charCodeAt(i) < 91) {
            plain += String.fromCharCode(91 - cipher.charCodeAt(i) + 64);
        }

        // other characters including whitespaces are left unchanged
        else {
            plain += cipher[i];
        }
    }

    // the decrypted string is updated in the UI
    document.getElementById("plain").value = plain;
}

function reset() {
    document.getElementById("encrypt").style.backgroundColor = "#08d";
    document.getElementById("decrypt").style.backgroundColor = "#08d";
    document.getElementById("cipher").value = "";
    document.getElementById("plain").value = "";
}
