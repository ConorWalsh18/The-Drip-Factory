
//CONSTANTS

var sizePriority = 0;
var colorPriority = 0;
var soldOut = "sold out";

//URLs
var currentURL = window.location.href;
var supremeItemURL;
var checkoutURL = "https://www.supremenewyork.com/checkout";

//Element Class Names
var itemClassName = "inner-article";
var cartClassName = "has-cart";

//Clickable Fields
var addToCartButton = "//*[@id=\"add-remove-buttons\"]/input";
var processPaymentButton = "//*[@id=\"pay\"]/input";
var agreementCheckbox = "//*[@id=\"cart-cc\"]/fieldset/p[2]/label/div/ins";

//Element IDs
var sizeID = "s";
var fullNameID = "order_billing_name";
var shippingAddressID = "bo";
var apartmentNumberID = "oba3"
var cityID = "order_billing_city";
var stateID = "order_billing_state";
var zipCodeID = "order_billing_zip";
var phoneNumberID = "order_tel";
var emailAddressID = "order_email";
var creditCardNumberID = "nnaerb";
var creditCardMonthID = "credit_card_month";
var creditCardYearID = "credit_card_year";
var securityCodeID = "orcer";

//Time Variables
var startTime;
var endTime;
var totalTime;


function selectSupremeItem(colorPriority) {
	var items = document.getElementsByClassName(itemClassName);

	startTime = new Date();	//Start the timer
	localStorage.setItem("startTime", startTime);

	for (var i = 0; i < items.length; i++) {
		if ((items[i].innerHTML).includes(supremeItemName) && (items[i].innerHTML).includes(supremeColorList[colorPriority])) {
			if (!(items[i].innerHTML).includes(soldOut)) {
				supremeItemURL = items[i].childNodes[0].href;
				localStorage.setItem("supremeItemURL", supremeItemURL);
				return chrome.runtime.sendMessage({redirect: supremeItemURL});
			}
			else {
				selectSupremeItem(colorPriority += 1)
			}
		}
	}

	setTimeout(() => {
		chrome.runtime.sendMessage({redirect: supremeBaseURL + supremeCategory});	//If the item we are looking for isn't found, refresh the page after one second and search for it again
	}, 1000);
}

function selectSupremeSize(sizePriority) {
	var sizes = document.getElementById(sizeID);

	if (sizes && sizes.options) {
		for (var i = 0; i < sizes.options.length; i++) {
			if ((sizes.options[i].innerHTML).includes(supremeSizeList[sizePriority])) {
				sizes.value = sizes.options[i].value;
				return addToSupremeCart();
			}
		}
		selectSupremeSize(sizePriority += 1);
	}
	else {
		addToSupremeCart();
	}
}

function addToSupremeCart() {	
	document.evaluate(addToCartButton, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
	goToSupremeCheckout();
}

function goToSupremeCheckout() {
	var checkoutInterval = setInterval(() => {
		if (document.getElementsByClassName(cartClassName).length > 0) {
			clearInterval(checkoutInterval);
			chrome.runtime.sendMessage({redirect: checkoutURL});
		}
	}, 100);
}

function fillOutShippingAndPaymentInformationForSupreme() {
	document.getElementById(fullNameID).value = fullName;
	document.getElementById(shippingAddressID).value = shippingAddress;
	document.getElementById(apartmentNumberID).value = apartmentNumber;
	document.getElementById(cityID).value = city;
	document.getElementById(stateID).value = state;
	document.getElementById(zipCodeID).value = zipCode;
	document.getElementById(phoneNumberID).value = phoneNumber;
	document.getElementById(emailAddressID).value = emailAddress;
	document.getElementById(creditCardNumberID).value = creditCardNumber;
	document.getElementById(creditCardMonthID).value = creditCardMonth;
	document.getElementById(creditCardYearID).value = creditCardYear;
	document.getElementById(securityCodeID).value = securityCode;
	document.evaluate(agreementCheckbox, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();

	checkOutForSupreme();
}

function checkOutForSupreme() {
	//document.evaluate(processPaymentButton, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();

	endTime = new Date();
	startTime = Date.parse(localStorage.getItem("startTime"));
	totalTime = ((endTime.getTime() - startTime) / 1000);
	console.log("Time taken to checkout: ", totalTime, " seconds");

	localStorage.clear();
}

//The following code determines what action to do depending on what page you're on
switch (currentURL) {
	case (supremeBaseURL + supremeCategory):
		selectSupremeItem(colorPriority); //Select the item once on the correct page
		break;
	case (localStorage.getItem("supremeItemURL")):
		selectSupremeSize(sizePriority);  //Select the size of the item when on the item's page
		break;
	case (checkoutURL):
		fillOutShippingAndPaymentInformationForSupreme();	//Fill out the shipping information once on the shipping page
		break;
}