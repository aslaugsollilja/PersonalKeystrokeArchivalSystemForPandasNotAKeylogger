# Personal Keystroke Archival System For Pandas (Not A Keylogger)
A Chromium extension that sends all keystrokes to an online service, where they are logged and can later be accessed by the user.

<img src="http://i.imgur.com/lmBMJmy.png" alt="lolol" />

## Objective
Have you ever wanted an overview of what you've been typing on your computer on a particular day? Perhaps you want a full recap of all your conversations on Facebook? Boy, have we got the solution for you! This is precisely why we created the Personal Keystroke Archival System for Pandas, or as we like to call it, "Personal Stroker" (which we've then shortened to *pesto*). You'll never have to worry about losing something you typed ever again! It's also a great solution for parents who worry about what their children are doing on the computer, or anyone who wants to monitor what is being typed on their computer. Every single keystroke will be captured and sent to our online Keystroke Archival System.

In case you were wondering, this is, of course, not a keylogger.

## Design
An integral part of the extension is the accompanying online keystroke archival service. Users will register an account on the online service, and then log in. This is the place where the users will be able to access their archived keystrokes, categorized by the website on which the keystrokes were typed, along with date and time.

Like in our last extension, the world famous [spandex](https://github.com/aslaugsollilja/spandex) extension, most of our functionality will reside in a single content script. The script will listen to all keystrokes, buffer them up, and then finally post them to our online service. The extension will have an options page, where the user is asked to input some credentials so that the keystrokes can be associated with his service account. To store the settings, we will be using the chrome storage API.

## Risks
One risk is that users might use the extension as a keylogger. That is, they might set the extension up on a computer that they don't own, for the sole purpose of spying on the users of the computer. There isn't much we can do about this. If such a user has access to the computer, and is able to set up an extension without the owner knowing, then he also has access to all the passwords stored in Chromium.

The online archival service handles personal information of all its users. Therefore, it might be a target for hackers who would want to steal personal information from our users. There are a couple of things we can do to help prevent this. First of all, we should follow good security measures when coding the extension and the online service. Second, we should use HTTPS when sending messages to the service from the extension. Lastly, we should encrypt everything that is saved to the database, ideally using the users password.

## Team and scope
When coding the [spandex](https://github.com/aslaugsollilja/spandex) extension, we coded everything together. We liked that format, and we'll be doing that again this time.

Our goal for this project is to have a fully working basic version of both the extension and the web service. Implementing the security measures stated above will be a bonus. A stretch goal will be to hook into all keystrokes dispatched to the Chromium browser by modifying its source.

We were asked to split the project up into two parts. The first part will be the extension itself, and the second part will be the online archival service.

## About Us
After releasing the mega-successful [spandex](https://github.com/aslaugsollilja/spandex) extension, Team Pandas are back with another life-saving Chromium extension.

<img src="http://i.imgur.com/d9a3UmD.jpg" alt="aslaugPanda" />
<img src="http://i.imgur.com/XRYTDVr.png" alt="Bjarkipanda" />
