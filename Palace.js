
//CONSTANTS

var sizePriority = 0;
var colorPriority = 0;
var soldOut = "SOLD OUT";

//URLs
var currentURL = window.location.href;
var palaceItemURL;
var cartURL = "https://shop-usa.palaceskateboards.com/cart";

//URL Includes
var customerInformationPage = "checkouts";
var shippingMethodPage = "shipping_method";

//Element Class Names
var itemClassName = "product-info";

//Clickable Fields
var addToCartButton = "add cart-btn clearfix";
var completeOrderButton = "//*[@id=\"content\"]/div/div[1]/div[2]/div/form/div[3]/div[1]/button";
var goToPaymentMethodButton = "step__footer__continue-btn btn ";

//Element IDs
var sizeID = "product-select";
var checkoutID = "checkout";
var firstNameID = "checkout_shipping_address_first_name";
var lastNameID = "checkout_shipping_address_last_name";
var shippingAddressID = "checkout_shipping_address_address1";
var apartmentNumberID = "checkout_shipping_address_address2"
var cityID = "checkout_shipping_address_city";
var zipCodeID = "checkout_shipping_address_zip";
var phoneNumberID = "checkout_shipping_address_phone";
var emailAddressID = "checkout_email";
var creditCardNumberID = "number";
var creditCardNumberNameID = "name";
var creditCardExpirateDateID = "expiry";
var securityCodeID = "verification_value";


function startPalaceBot() {
	var body = document.body;
    var html = document.documentElement;
	var height;

	var scrollTime = setInterval(() => {
		window.scrollTo(0,document.body.scrollHeight);

		height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );

		if (height > 6000) {	
			clearInterval(scrollTime);
			selectPalaceItem(colorPriority);
		}
	}, 1);
}

function selectPalaceItem(colorPriority) {
	var items = document.getElementsByClassName(itemClassName);

	for (var i = 0; i < items.length; i++) {
		if ((items[i].innerHTML).includes(palaceItemName) && (items[i].innerHTML).includes(palaceColorList[colorPriority])) {
			if (!(items[i].childNodes[3].innerHTML).includes(soldOut)) {
				palaceItemURL = items[i].childNodes[1].href;
				localStorage.setItem("palaceItemURL", palaceItemURL);
				return chrome.runtime.sendMessage({redirect: palaceItemURL});
			}
			else {
				selectPalaceItem(colorPriority += 1);
			}
		}
	}
}

function selectPalaceSize(sizePriority) {
	var sizes = document.getElementById(sizeID);

	if (sizes && sizes.options) {
		for (var i = 0; i < sizes.options.length; i++) {
			if ((sizes.options[i].innerHTML).includes(palaceSizeList[sizePriority])) {
				sizes.value = sizes.options[i].value;
				return addToPalaceCart();
			}
		}
		selectPalaceSize(sizePriority += 1);
	}
	else {
		addToPalaceCart();
	}
}

function addToPalaceCart() {
	document.getElementsByClassName(addToCartButton)[0].click();
	goToPalaceCart();
}

function goToPalaceCart() {
	var cartInterval = setInterval(() =>{
		if (document.getElementsByClassName("cart-count")[0].innerHTML != "0") {
			chrome.runtime.sendMessage({redirect: cartURL});
			clearInterval(cartInterval);
		}
	}, 100);
}

function goToPalaceCheckout() {
	document.getElementById(checkoutID).click();
}

function goToPalacePaymentMethod() {
	document.getElementsByClassName(goToPaymentMethodButton)[0].click();	
}

function fillOutCustomerInformationForPalace() {
	document.getElementById(emailAddressID).value = emailAddress;
	document.getElementById(firstNameID).value = firstName;
	document.getElementById(lastNameID).value = lastName;
	document.getElementById(shippingAddressID).value = shippingAddress;
	document.getElementById(apartmentNumberID).value = apartmentNumber;
	document.getElementById(cityID).value = city;
	document.getElementById(zipCodeID).value = zipCode;
	document.getElementById(phoneNumberID).value = phoneNumber;
}

//The following code determines what action to do depending on what page you're on
if (currentURL == palaceBaseURL) {
	startPalaceBot();
}
else if (currentURL == localStorage.getItem("palaceItemURL")){
	selectPalaceSize(sizePriority);
}
else if (currentURL == cartURL) {
	goToPalaceCheckout();
}
else if (currentURL.includes(customerInformationPage) && !currentURL.includes(shippingMethodPage)) {
	if (document.getElementById(emailAddressID) != null) {
		fillOutCustomerInformationForPalace();
	}
	else {
		localStorage.clear();
	}
}
else if (currentURL.includes(shippingMethodPage)) {
	goToPalacePaymentMethod();
}