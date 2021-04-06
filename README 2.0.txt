THE DRIP FACTORY 2.0

It'll probably be easiest if you just remove the old extension, and do the same initial setup in the README for this updated version. Currently the Palace code of this bot doesn't have the color switching functionality or auto-refreshing before a drop functionality that the Supreme code does, but I'll add that in later. Once you've updated your chrome extension with this newer version do the following:


SETTING UP THE BOT FOR SUPREME:

1. It's the exact same setup for Supreme as stated in the README except instead of filling out all your information in the "beginTheCop" file you'll need to fill it out in the "Supreme" file
2. The only additional thing you'll need to do is add the category of the item you want to the "beginTheCop" file (it's being added here as well as in the "Supreme" file, in the future you won't need to do it in both places but for now you do)


SETTING UP THE BOT FOR PALACE:

1. The morning before the drop you'll want to go to https://shop.palaceskateboards.com/ and go to the item that you want. Copy the URL for that item (this URL is the same URL used for the US webshop)
2. Right click the file "beginTheCop" and open it with Sublime Text
3. Paste the item URL into palaceBaseURL (don't worry about filling out the category or supremeBaseURL variables, those don't apply to the Palace stuff)
4. Save the file
5. Right click the file "Palace" and open it with Sublime Text
6. Fill out the information in the top section (Note that you don't need to fill out the colorList or the payment information for this one)
7. Once you have filled in all the information and formatted it correctly, save the file
8. Go back to your Chrome extensions page and click the refresh wheel on the "The Drip Factory" extension


RUNNING THE BOT FOR SUPREME:

1. This part is the same as what's in the README


RUNNING THE BOT FOR PALACE:

1. Click the factory icon in the top right corner of your Chrome browser to pull up The Drip Factory
2. Roughly 5-10 seconds before the Palace drop, start clicking the Palace icon
	- Everytime you click the icon it'll try to go to the item page
	- After you click the icon give it a sec so that you don't accidentally start the bot over
3. Keep clicking the icon until you see that it's working (you'll know cause it'll navigate to the item's page)
4. Once it gets to the Customer Information page you'll need to click the "I'm not a robot" button (but bish you is a robot hehe) as well as click the continue to shipping button
5. The bot will take you to the payment information page but it won't fill anything out. Palace actually has a good amount of security at this point so I'd have to do some janky shit to get around it, if I even could, so I'm just gonna use chrome autofill for this last part. Also, when you get to the payment information page it might refresh after half a second or so. I'm not sure why, but I didn't have time to figure it out I'll finna fucksin fix it later for sure though.