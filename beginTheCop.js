
/******************* FILL THIS SECTION OUT *******************/

//Surpeme Item Information (these variables are all case sensitive)
var supremeCategory = "accessories";	//jackets, shirts, tops_sweaters, sweatshirts, pants, shorts, t-shirts, hats, bags, accessories, skate, shoes
var supremeItemName = "Tagless";
var supremeColorList = ["Black", "Purple", "White"];
var supremeSizeList = ["Large", "Small", "XLarge", "Medium"];	//Small, Medium, Large, XLarge

//Palace Item Information
var palaceItemName = "PWLWCE";	//This needs to be all caps
var palaceColorList = ["BLUE", "WHITE", "BLACK"];	//These also need to be all caps
var palaceSizeList = ["X-Large", "Large", "Small", "Medium"];	//Small, Medium, Large, X-Large

//Adidas Item Information
var adidasCategory = "men-shoes";
var adidasItemName = "Ultraboost Shoes";
var adidasSize = "11.5";

//Shipping Information
var fullName = "Terry Krakatoa";
var firstName = "Terry";	//This is needed for Palace and Adidas
var lastName = "Krakatoa";	//This is needed for Palace and Adidas
var shippingAddress = "123 Test Street";
var apartmentNumber = "";	//Leave this as "" if not applicable
var city = "Test City";
var state = "CO";	//Format with two letter state code (i.e. "CO")
var fullStateName = "Colorado"	//This is needed for Adidas, format as full state name (i.e. "Colorado")
var zipCode = "12345";
var phoneNumber = "123-456-7890";	//Format with dashes (i.e. "123-456-7890")
var emailAddress = "terry.krakatoa@test.net";

//Payment Information
var creditCardNumber = "1234567890000000";
var creditCardMonth = "09"	//Format as two digit month (i.e. "05")
var creditCardYear = "2021";	//Format as YYYY (i.e. 2020)
var securityCode = "123";

/***********************************************************/

//URLs
var supremeBaseURL = "https://www.supremenewyork.com/shop/all/";
var palaceBaseURL = "https://shop-usa.palaceskateboards.com/";
var adidasBaseURL = "https://www.adidas.com/us/";


//Start the bot once an icon is clicked
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("supreme").addEventListener("click", function() {
		chrome.tabs.getSelected(null, function(tab) {	
			chrome.runtime.sendMessage({redirect: supremeBaseURL + supremeCategory});	//Redirect to the Supreme item category page
		});

		// The code below allows for the bot to run at a specific date time
		// var supremeTimer = setInterval(() => {
		// 	var date = new Date();
		//  // console.log("Day = ", date.getDate(), " Hour = ", date.getHours(), " Minutes = ", date.getMinutes(), " Seconds = ", date.getSeconds());
		//  if (date.getDate() === 21 && date.getHours() === 10 && date.getMinutes() === 58 && date.getSeconds() > 0) {
		//  	clearInterval(supremeTimer);
		//      chrome.tabs.getSelected(null, function(tab) {	
		// 			chrome.runtime.sendMessage({redirect: supremeBaseURL + supremeCategory});	//Redirect to the Supreme item category page
		// 		});
		//  }
		// }, 5000);
		
	}, false);

	document.getElementById("palace").addEventListener("click", function() {
		chrome.tabs.getSelected(null, function(tab) {
			chrome.runtime.sendMessage({redirect: palaceBaseURL});
		});
	}, false);

	document.getElementById("adidas").addEventListener("click", function() {
		chrome.tabs.getSelected(null, function(tab) {
			chrome.runtime.sendMessage({redirect: adidasBaseURL + adidasCategory});
		});
	}, false);

	document.getElementById("kaws").addEventListener("click", function() {
		chrome.tabs.getSelected(null, function(tab) {
			alert("Seriously broh it's coming soon")
		});
	}, false);
}, false);