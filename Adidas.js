
//Constants
var currentURL = window.location.href;
var adidasItemURL;
var shippingURL = "https://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/COShipping-Show";

var itemElementClassName = "gl-product-card__media";
var sizeElementClassName = "gl-menu__element";
var dropdownOptionElementClassName = "materialize-select-option"

var addToAdidasCartButton = "gl-cta gl-cta--primary gl-cta--full-width btn-bag";
var adidasLabelButton = "materialize-element-label";
var goToPaymentButton = "gl-cta gl-cta--primary";
var placeOrderForAdidasButton = "co-btn_primary btn_showcart button-full-width button-ctn button-brd adi-gradient-blue button-forward";

var firstNameID = "dwfrm_shipping_shiptoaddress_shippingAddress_firstName";
var lastNameID = "dwfrm_shipping_shiptoaddress_shippingAddress_lastName";
var shippingAddressID = "dwfrm_shipping_shiptoaddress_shippingAddress_address1";
var cityID = "dwfrm_shipping_shiptoaddress_shippingAddress_city";
var postalCodeID = "dwfrm_shipping_shiptoaddress_shippingAddress_postalCode";
var phoneNumberID = "dwfrm_shipping_shiptoaddress_shippingAddress_phone";
var emailAddressID = "dwfrm_shipping_email_emailAddress";
var cardNumberID = "dwfrm_payment_creditCard_number";
var securityCodeID = "dwfrm_payment_creditCard_cvn";


function selectAdidasItem() {
	var items = document.getElementsByClassName(itemElementClassName);

	for (var i = 0; i < items.length; i++) {
		if ((items[i].innerHTML).includes(adidasItemName)) {
			adidasItemURL = items[i].childNodes[0].href;
			localStorage.setItem("adidasItemURL", adidasItemURL);
			chrome.runtime.sendMessage({redirect: items[i].childNodes[0].href});
			break;
		}
	}
}

function selectAdidasSize() {
	var selectAdidasSizeIntervalID = setInterval(() => {
		var sizes = document.getElementsByClassName(sizeElementClassName);
		for (var i = 0; i < sizes.length; i++) {
			if (sizes[i].title == adidasSize) {
				sizes[i].click();
				clearInterval(selectAdidasSizeIntervalID);
				addToAdidasCart();
				break;
			}
		}
	}, 100);
}

function addToAdidasCart() {
	document.getElementsByClassName(addToAdidasCartButton)[0].click();
	goToAdidasShipping();	
}

function goToAdidasShipping() {
	setTimeout(() =>{
		chrome.runtime.sendMessage({redirect: shippingURL});
	}, 1000);
}

function fillOutShippingInformationForAdidas() {
	setTimeout(() => {
		document.getElementById(firstNameID).value = firstName;	
		document.getElementsByClassName(adidasLabelButton)[0].click();	//For the Adidas site you have to click the text box, to simulate human behavior

		document.getElementById(lastNameID).value = lastName;
		document.getElementsByClassName(adidasLabelButton)[1].click();

		document.getElementById(shippingAddressID).value = shippingAddress;
		document.getElementsByClassName(adidasLabelButton)[2].click();

		document.getElementById(cityID).value = city;
		document.getElementsByClassName(adidasLabelButton)[4].click();

		document.getElementById(postalCodeID).value = zipCode;
		document.getElementsByClassName(adidasLabelButton)[6].click();

		document.getElementById(phoneNumberID).value = phoneNumber;
		document.getElementsByClassName(adidasLabelButton)[7].click();

		document.getElementById(emailAddressID).value = emailAddress;
		document.getElementsByClassName(adidasLabelButton)[8].click();

		var dropdownOptions = document.getElementsByClassName(dropdownOptionElementClassName);
		for (var i = 0; i < dropdownOptions.length; i++) {
			if (dropdownOptions[i].innerHTML.includes(fullStateName)) {
				dropdownOptions[i].click();
				break;
			}
		}

		goToPaymentInformationForAdidas();
	}, 100);
}

function goToPaymentInformationForAdidas() {
	document.getElementsByClassName(goToPaymentButton)[0].click();
}

function fillOutPaymentInformationForAdidas() {
	var monthSelected;
	var yearSelected;

	document.getElementById(cardNumberID).value = creditCardNumber;
	document.getElementsByClassName(adidasLabelButton)[1].click();

	document.getElementById(securityCodeID).value = securityCode;
	document.getElementsByClassName(adidasLabelButton)[4].click();

	var dropdownOptions = document.getElementsByClassName(dropdownOptionElementClassName);
	for (var i = 0; i < dropdownOptions.length; i++) {
		if (dropdownOptions[i].innerHTML.includes(creditCardMonth)) {
			dropdownOptions[i].click();
			monthSelected = true;
		}
		if (dropdownOptions[i].innerHTML.includes(creditCardYear)) {
			dropdownOptions[i].click();
			yearSelected = true;
		}
		if (monthSelected && yearSelected) {
			break;
		}
	}

	placeOrderForAdidas();
}

function placeOrderForAdidas() {
	document.getElementsByClassName(placeOrderForAdidasButton)[2].click();
	localStorage.clear();
}

//Select the item once on the correct page
if (currentURL == adidasBaseURL + adidasCategory) {
	selectAdidasItem();
}

//Select the size of the item when on the item's page
else if (currentURL == localStorage.getItem("adidasItemURL")) {
	selectAdidasSize();
}

//Fill out the shipping information once on the shipping page
else if (currentURL.includes("COShipping-Show")) {
	fillOutShippingInformationForAdidas();
}

//Fill out the payment information on the payment method page
else if (currentURL.includes("COSummary")) {
	fillOutPaymentInformationForAdidas();
}