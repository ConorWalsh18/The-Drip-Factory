THE DRIP FACTORY


If this is your first time using The Drip Factory, you'll need to follow the initial setup steps first so you can add the extension to Chrome. You'll also want to download Sublime Text (https://www.sublimetext.com/3) so that you can easily add your information to the bot.

INITIAL SETUP (you only need to do this once):

1. Open up Chrome
2. Click the triple dot icon in the top right corner
3. Hover over "More Tools" and select "Extensions"
4. Toggle the "Developer mode" button in the top right corner
5. Click "Load unpacked"
6. Navigate to where you extracted "TheDripFactory_Version1" too and select it


NOTE: Everytime you want to update the bot with new information you'll need to re-run these steps

SETTING UP THE BOT:

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


EXAMPLE BOT SETUP:

/******************* FILL THIS SECTION OUT *******************/

//Item Information
var category = "t-shirts";	//Looks in the t-shirts category on Supreme's website for the item you want
var itemName = "Leda And The Swan";	//This doesn't need to be the full item's name, just a unique part of the item's name
var colorList = ["Black", "Red", "Light Blue"];	//First look for this t-shirt in black, if that's sold out look for it in red, if that's sold out look for it in light blue
var sizeList = ["Small", "Large", "XLarge", "Medium"];	//First look for this t-shirt in small, if that's sold out then choose large for the size, if that's sold out choose xlarge, and lastly if xlarge is sold out choose medium

//Shipping Information
var fullName = "Terry Krakatoa";
var shippingAddress = "123 Test St.";
var apartmentNumber = "A110";
var city = "Denver";
var state = "CO";
var zipCode = "80202";
var phoneNumber = "123-456-7890";
var emailAddress = "test@testing.com";

//Payment Information
var creditCardNumber = "1234567890000000";
var creditCardMonth = "05"
var creditCardYear = "2020";
var securityCode = "123";

/***********************************************************/


RUNNING THE BOT:

1. Click the factory icon in the top right corner of your Chrome browser to pull up The Drip Factory
2. Roughly 5-10 seconds before the Supreme drop click the "Start" button
3. If the page just keeps refreshing, even after the drop has occurred, that means the bot didn't find the item you specified (could be a human error or my code is goofed up, but broh we all know it was a human error, stop messing that ish up broh)