Updated MH Oct, 17th 5pm:

Changed the viewport ratio - Refer to menu and map page for reference

Created and edited the menu in separate page

Added icons to ìImagesî folder in a subfolder called ìIcons

Created a new CSS page specifically for the menu

Updated CC Oct, 17th 5.40pm:
Updated map.html, map.js, redpinstyle.css and profile.html pages

Maps page now has google search functions - working on:
zoom out after add marker
infoWindow for marker

Problems : link back to menu.html from map.html looses styling somehow?!

Updated CC Oct, 18th 10am:
Added maps css page

Updated CC October 18t 11:45 AM
Fixed styling for profile, login and register page
Added placeholder logo on login and register


Updated JA October 18 8:00PM
Fixed Facebook Login(used Redpin fb dev id to login), minor changes in stylings everywhere
Linked everything with an href. Made Hamburger Menu. Organized file structure to folders.
Added Register Button in login. In menu changed from people to profile, now user picture clickable



Updated MH October 19 10AM

Relinked all CSS and JS files to html

Reintegrated original menu

Got JQuery transition working on Map page to menu
Linked “go to profile” on menu






Updated CC October 19 10PM

Assigned logo to pin marker

Reassigned query link to map page

Need to fix styling of input for adding pin - css being intercepted by jquery library



Updated CC October 20 9AM

Changed links from register to login
Fixed map search styling

Created hosted version from V15



Updated CC October 23 8PM

Removed all jQuery links, css now works much better - changed menu.js and map.js files to js rather than jQuery

Added addPin page, working out link between maps to add pin and back.

Disconnected link to add pin page while we organize database - cannot find a way to link array from maps.html to addpin.html. to create the array for a marker to be placed. 

Created php page, not linked into map & addpin html pages. 


Updated JA October 23 8:30PM
Fixed stylings on facebook page
Created a info window although inaccurate, can grab any content such as name of place from user within that page
Couldn't grab user info from login to profile, needs database for that


Updated MH October 30 7Pm

Made all inputs on register and login “required” and “autofill on” for a more user-friendly experience.

Created a feedback effect on input fields that are filled in properly according to their restrictions on registration page - 
didn’t think it was necessary on the login as we have to check with the database to see if their login matches their registration info

Submit button transitions when “Re-Enter Password” is filled in but can’t get it to transition back to 
it’s original state afterwards, say when the input is deleted

Updated JA October 31 5:26PM
Overhaul menu, unlinked different things to work for testing
Fixed overall stylings to work with new menu
Changed the trips icon, V2
Didn't remove any menu css as it broke login and register page css. Must experiment more why.
Needs feedback for icon to change when moving through menu



Updated CC October 31 9:15PM

Changed pinning function on map page to carry out on one page only. 

Currently can pin one marker fully, next step to create an array of markers with own info. 

Changed register.html to index.html for hosting reasons

Updated JA October 31 10:15PM
removed menu items to contain 3
removed the profile icon and replaced with "logout"

Updated CC November 1 4PM
Tidied up map pinning js. Object now ready to be pushed into Database table when add marker function happens

Updated MH November 1 8:30pm
Finished up the menu at the bottom of page with add pin button.
Cleaned up some minor styling on top bars of pages, profile and map.
created a timed function to execute when the add pin button is clicked to have the search box show up after the page loads.
PROBLEM: the timed function somehow executes when both the add pin button and maps button are clicked - weird since they don’t have the same id’s - will look into some more tomorrow.
Created a feedback transition on the “Add” button when the user selects a location they’ve searched.
Began styling pin details page a bit but planning to finish tomorrow. 
Added an exit button on the pin details page.
Added a logout button in the menu that redirects the user to the login page for now.
Linked the trips page to the trips icon in the menu.
Created feedback buttons for the menu buttons to indicate which page the user is on/which button they selected. 

Updated CC & RG November 8 5pm
Rearranged files to create php folder
Removed redundant files
Made login page the first page on app load
Added marker table to database
Need to fix marker info to database on click

Updated JA October 13 2:43PM
Fixed add trips and tags after making a pin styling
Added active button style (Will need to make it pernament still somehow, hard due to each tag being a new tag name "tag0" etc.)
Changed 404error.html href in map.php
Added input to make new tags and pushes into array
PROBLEM: after adding a new tag, a button isn't made from your new tag input
Made edit bio page. Almost done bug report refer to spreadsheet.

Updated CC Nov 15 11.15AM
Database files between map.php and map1.php - error with saving markers. Working on this.

Updated CC Nov 15 1PM
Markers now being printed out onto map from DB, once logged in user has created them.

Updated CC Nov 22 10PM
Fixes to previous edition. Saved markers to database. Retrieve markers to profile. Fixed login requirements, only with db user and pword.  Broken fb login and register - not passing through if statement correctly.

Updated MH Nov 27 2PM
Re-exported 300 ppi icons
Incorporated welcome back notification - for now shows when the profile page loads - will have to be implemented with php so that it only pops up when the user logs in
Changed the marker - took out the name
uploaded priority marker icons (in icon folder)
Made user scalability “no” - fixing keyboard zoom bug

Updated CC Nov 28 6.45PM
trips.php page only shows user in sessions bali trip markers
fb login will save prof pic and display in profile
***REMEMBER to change fb.js fb id when looking at local host or hosted****

Updated JA Nov 29 11:43AM
Add tags to pins restyled, now scrollable
just need to show that the user is clicking the image with a hide and show?
change low priority image to better contrast, maybe white?

Updated MH Nov 29 6pm
Changed styling of inputs on register and login page
implemented button feedback on login page - just to transition when both fields have 6 or more characters
Moved other login page buttons down
Styled trip pin page - almost done
changed font-sizes on pin info page
change search input style on pin page
Tried not to kill myself - barely succeeded


Updated CC & RG Dec 1 1PM
Priority pins pushed to db
Link from profile table through to map page - working on how to zoom in on individual marker
Working on how to bring up each pin priority icon


Updated CC & RG Dec 1 6PM
Priority pins show on map
Click through from profile / trip pins to pin on map
Grabbed larger FB image


Updated JA Nov 29 11:43AM


Updated JA Dec 3 3:35AM
Added animations to the add pin page, made UX changes to gradually show items
gave different appearence to priority pin

Updated MH Dec 4 3:30PM
Replaced index logo with high res img
Bio edit button feedback
Change profile image functionality and button w/feedback
Added function for the weird bug that pushes up menu bar with keyboard - will have to wait for it to be hosted
Trip and tags click feedback when adding pin info
