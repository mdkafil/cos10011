/**
 * Author: Adam Jarzebak
 * Target: enquire.html
 * Purpose: Load data from session storage and submit to server
 * Created:25/04/2017
 * Last updated: 25/04/2017
 */
"use strict";

function updateCruisePrice() {

    var cruise = document.getElementById("productService").value;

    if (cruise == "op1") {
        document.getElementById("info").innerHTML = "<p>You selected: <strong>Awesome Cruise</strong> from our product range</p>";
        document.getElementById("info1").innerHTML = "<p>Price: $2323 p.p.  &nbsp;<sup>Childer 20% off</sup></p>";
    } else if (cruise == "op2") {
        document.getElementById("info").innerHTML = "<p>You selected: <strong>Princess Cruises</strong> from our product range</p>";
        document.getElementById("info1").innerHTML = "<p>Price: $435 p.p.&nbsp;<sup>Childer 20% off</sup></p>";
    } else if (cruise == "op3") {
        document.getElementById("info").innerHTML = "<p>You selected: <strong>Cruise Direct </strong> from our product range</p>";
        document.getElementById("info1").innerHTML = "<p>Price: $2324 p.p.&nbsp;<sup>Childer 20% off</sup></p>";
    } else if (cruise == "op4") {
        document.getElementById("info").innerHTML = "<p>You selected: <strong>Fred Olsen</strong> from our product range</p>";
        document.getElementById("info1").innerHTML = "<p>Price: $1224 p.p.&nbsp;<sup>Childer 20% off</sup></p>";
    } else {
        document.getElementById("info").innerHTML = "<p>Please select a cruise</p>";
    }

}

function validatePostcode(state, postcode) {
    var errorMsg = "";
    var result = true;

    function postcodeMatch(n1, n2) {
        if (!n2) {
            var argRegEx = new RegExp("^[" + n1 + "]\\d{3}");
            if (!postcode.match(argRegEx)) {
                errorMsg = errorMsg + "Your postcode is incorrect\n";
                result = false;
            }
        } else {
            var argRegEx = new RegExp("^[" + n1 + "|" + n2 + "]\\d{3}");
            if (!postcode.match(argRegEx)) {
                errorMsg = errorMsg + "Your postcode is incorrect\n";
                result = false;
            }
        }
    }

    switch (state) {
        case "VIC":
            postcodeMatch(3, 8);
            break;
        case "NSW":
            postcodeMatch(1, 2);
            break;
        case "QLD":
            postcodeMatch(4, 9);
            break;
        case "NT":
            postcodeMatch(0);
            break;
        case "WA":
            postcodeMatch(6);
            break;
        case "SA":
            postcodeMatch(5);
            break;
        case  "TAS":
            postcodeMatch(7);
            break;
        case  "ACT":
            postcodeMatch(0);
            break;
        default:
            errorMsg = errorMsg + "Your postcode is incorrect\n";
    }

    if (errorMsg != "") {
        alert(errorMsg);
    }

    return result;

}

function getPreferredContact() {

    var preferredContact = "none";

    var pContactArray = document.getElementById("preferredContact").getElementsByTagName("input");
    var i;

    for (i = 0; i < pContactArray.length; i++) {
        if (pContactArray[i].checked)
            preferredContact = pContactArray[i].value;
    }

    return preferredContact;

}

function totalCost(noPeople, noPeople1, cruise, extras) {

    var price = 0;
    var total = 0;

    switch (cruise) {
        case "op1":
            price = 2323;
            break;
        case "op2":
            price = 435;
            break;
        case "op3":
            price = 2324;
            break;
        case "op4":
            price = 1224;
            break;
        default:
            price = 0;
    }

    var priceAdults = price * noPeople;
    var priceChildren = price * noPeople1;
    priceChildren = (priceChildren - (priceChildren * 0.1));

    total = priceAdults + priceChildren;

    // var i;
    // for(i = 0; i < extras.length; i++){
    //     if (extras[0] == true){
    //
    // }
    // 10%
    //                         <td>add 300$ to price</td>
    //                         <td>add 10% to price</td>


    return total;
}

function validate() {

    var errorMsg = '';
    var prefContact = '';
    var result = true;
    var totalPrice = 0;

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('email1').value;
    var street = document.getElementById('saddress').value;
    var suburb = document.getElementById('suburb').value;
    var state = document.getElementById('state').value;
    var postcode = document.getElementById('postcode').value;
    var number = document.getElementById('phoneNumber').value;
    var cruise = document.getElementById('productService').value;
    var noPeople = document.getElementById('noPeople').value;
    var noPeople1 = document.getElementById('noPeople1').value;

    var ex1 = document.getElementById("extra1").checked;
    var ex2 = document.getElementById("extra2").checked;
    var ex3 = document.getElementById("extra3").checked;
    var ex4 = document.getElementById("extra4").checked;

    var extras = [ex1, ex2, ex3, ex4];

    if (!firstname.match(/^[a-zA-Z]+$/)) {
        errorMsg = errorMsg + "Your first name is incorrect\n";
        result = false;
    }
    if (!lastname.match(/^[a-zA-Z]+$/)) {
        errorMsg = errorMsg + "Your lastname name is incorrect\n";
        result = false;
    }
    if (!email.match(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/)) {
        errorMsg = errorMsg + "Your email is incorrect\n";
        result = false;
    }
    if (!street.match(/^[a-zA-Z]+$/)) {
        errorMsg = errorMsg + "Your address street is incorrect\n";
        result = false;
    }

    if (!suburb.match(/^[a-zA-Z]+$/)) {
        errorMsg = errorMsg + "Your suburb is incorrect\n";
        result = false;
    }

    if (state == 'none') {
        errorMsg += "Please select the state\n";
        result = false;
    }

    if (postcode == '') {
        errorMsg += "Please enter the postcode\n";
        result = false;
    }

    if (!number.match(/^\d{1,10}$/)) {
        errorMsg = errorMsg + "Your number is incorrect\n";
        result = false;
    }

    if (cruise == "none") {
        errorMsg += "Please select at least one cruise\n";
        result = false;
    }

    if (noPeople == 0) {
        errorMsg = errorMsg + "Minimum is one person\n";
        result = false;
    }

    if (errorMsg != '') {
        alert(errorMsg);
    }

    if (errorMsg == '') {
        result = validatePostcode(state, postcode);
    }

    totalPrice = totalCost(noPeople, noPeople1, cruise, extras);
    prefContact = getPreferredContact();

    if (errorMsg == '') {
        storeData(firstname, lastname, email, street, suburb, state, postcode, cruise, noPeople, noPeople1, number, prefContact, totalPrice)
    }

    return result;
}

function validate_pay() {
    var errorMsg = "";
    var result = true;

    var cardNumber = document.getElementById('cardNumber').value;
    var cname = document.getElementById('cname').value;
    var expires = document.getElementById('expires').value;

    if (!cardNumber.match(/^\d[4]+$/)) {
        errorMsg = errorMsg + "Your card number is incorrect\n";
        result = false;
    }
    if (!cname.match(/^[a-zA-Z]+$/)) {
        errorMsg = errorMsg + "Your name is incorrect\n";
        result = false;
    }


    return result;
}



    function cancelBooking() {

        window.location = "enquire.html";

    }

    function storeData(firstname, lastname, email, street, suburb, state, postcode, cruise, noPeople, noPeople1, number, preferredContact, totalPrice) {

        var totalPeople = Number(noPeople) + Number(noPeople1);

        sessionStorage.firstname = firstname;
        sessionStorage.lastname = lastname;
        sessionStorage.email = email;
        sessionStorage.street = street;
        sessionStorage.suburb = suburb;
        sessionStorage.state = state;
        sessionStorage.postcode = postcode;
        sessionStorage.cruise = cruise;
        sessionStorage.totalPeople = totalPeople;
        sessionStorage.number = number;
        sessionStorage.preferredContact = preferredContact;
        sessionStorage.totalPrice = totalPrice;

    }


    function getBooking() {

        if (sessionStorage.firstname != undefined) {
            var cruise_full = "";
            switch (sessionStorage.cruise) {
                case "op1":
                    cruise_full = "Norway";
                    break;
                case "op2":
                    cruise_full = "Greece";
                    break;
                case "op3":
                    cruise_full = "Africa";
                    break;
                case "op4":
                    cruise_full = "Antarctica";
                    break;
                default:
                    cruise_full = "Poland";
            }
            document.getElementById("confirm_name").textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
            document.getElementById("cname").value = sessionStorage.firstname + " " + sessionStorage.lastname;
            document.getElementById("c_email").textContent = sessionStorage.email;
            document.getElementById("c_number").textContent = sessionStorage.number;
            document.getElementById("c_postcode").textContent = sessionStorage.postcode;
            document.getElementById("c_cruise").textContent = cruise_full;
            document.getElementById("c_noPeople").textContent = sessionStorage.totalPeople;
            document.getElementById("c_confirm_cost").textContent = sessionStorage.totalPrice;


            // cost = calcCost(sessionStorage.trip, sessionStorage.partySize);
            // document.getElementById("confirm_cost").textContent = cost;

            /*
             Write lastname, age, species, age, food, and partySize from seesionStorage to the hidden inputs
             */

            // document.getElementById("cost").value = cost;

        }
    }


    function prefill_form() {
        if (sessionStorage.firstname != undefined) {
            document.getElementById("firstname").value = sessionStorage.firstname;
            document.getElementById("lastname").value = sessionStorage.lastname;
            document.getElementById("c_number").value = sessionStorage.number;
            document.getElementById("c_postcode").value = sessionStorage.postcode;
            document.getElementById("c_cruise").value = sessionStorage.cruise;
            document.getElementById("total_cost").value = sessionStorage.totalPrice;
        }
    }


    function init() {

        if (window.location.pathname == '/cos10011/assign2/enquire.html') {
            var regForm = document.getElementById("enquire_form");
            regForm.onsubmit = validate;
        }

        if (window.location.pathname == '/cos10011/assign2/payment.html') {
            getBooking();

            document.getElementById("cancelButton").addEventListener("click", cancelBooking);


            document.getElementById("confirmBooking").addEventListener("click", validate_pay);


        }

    }

    window.onload = init;