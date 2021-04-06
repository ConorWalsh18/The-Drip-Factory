# The Drip Factory

If this is your first time using The Drip Factory, you'll need to follow the initial setup steps first so you can add the extension to Chrome. You'll also want to download Sublime Text (https://www.sublimetext.com/3) so that you can easily add your information to the bot.


## Setup Steps

### Adding the Bot Extension to Chrome (you only need to do this once)

1. Clone this repository
2. Open up Chrome
3. Click the triple dot icon in the top right corner
4. Hover over "More Tools" and select "Extensions"
5. Toggle the "Developer mode" button in the top right corner
6. Click "Load unpacked"
7. Navigate to where you cloned "The-Drip-Factory" too and select it


### Setting up the Bot
#### Note: Everytime you want to update the bot with new information you'll need to re-run these steps.


1. Right click the file "beginTheCop" and open it with Sublime Text
2. Fill in all the information in the top section
	- The "Item Information" section is all case sensitive items
	- Make sure that the item you are looking for will be on the category page that you specified (i.e. a keychain would be on the accessories page)
	- For the itemName you don't need the full item name, just a unique part of that item's name
	- If you want the bot to choose another color for the item you want if your first color choice is sold out, you need to format colorList like this: ["Color1", "Color2", "Color3", etc.]
	- Setting up colorList like this will tell the bot to try and find your item with Color1, if your item with Color1 is sold out try Color2, if your item with Color2 is sold out then try Color3
	- The sizeList works the exact same way as the colorList, if you want the bot to switch to a different size because the first size you entered was sold out, then format sizeList like this: ["Size1", "Size2", "Size3", etc.]
	- If you only want the bot to find one color or size, format colorList or sizeList like this: ["Color1"] or ["Size1"]
	- If the item you're looking for doesn't have a color or a size (i.e. an accessory) then leave colorList and sizeList like this: [""]
	- Below is an example on how to setup the bot
3. Once you have filled in all the information and formatted it correctly, save the file
4. Go back to your Chrome extensions page and click the refresh wheel on the "The Drip Factory" extension


### Additional Setup Steps If Using the Bot for Palace

1. The morning before the drop you'll want to go to https://shop.palaceskateboards.com/ and go to the item that you want. Copy the URL for that item (this URL is the same URL used for the US webshop)
2. Right click the file "beginTheCop" and open it with Sublime Text
3. Paste the item URL into palaceBaseURL (don't worry about filling out the category or supremeBaseURL variables, those don't apply to the Palace stuff)
4. Save the file
5. Go back to your Chrome extensions page and click the refresh wheel on the "The Drip Factory" extension


### Example Bot Setup

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


## How to Run the Bot

### Running the Bot for Everything except Palace

1. Click the factory icon in the top right corner of your Chrome browser to pull up The Drip Factory
2. Roughly 5-10 seconds before the Supreme drop click the "Start" button
3. If the page just keeps refreshing, even after the drop has occurred, that means the bot didn't find the item you specified (could be a human error or my code is goofed up, but broh we all know it was a human error, stop messing that ish up broh)


### Running the Bot for Palace

1. Click the factory icon in the top right corner of your Chrome browser to pull up The Drip Factory
2. Roughly 5-10 seconds before the Palace drop, start clicking the Palace icon
	- Everytime you click the icon it'll try to go to the item page
	- After you click the icon give it a sec so that you don't accidentally start the bot over
3. Keep clicking the icon until you see that it's working (you'll know cause it'll navigate to the item's page)
4. Once it gets to the Customer Information page you'll need to click the "I'm not a robot" button (but bish you is a robot hehe) as well as click the continue to shipping button
5. The bot will take you to the payment information page but it won't fill anything out. Palace actually has a good amount of security at this point so I'd have to do some janky shit to get around it, if I even could, so I'm just gonna use chrome autofill for this last part. Also, when you get to the payment information page it might refresh after half a second or so. I'm not sure why, but I didn't have time to figure it out I'll finna fucksin fix it later for sure though.
