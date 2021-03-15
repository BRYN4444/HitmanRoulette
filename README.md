Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, images, and text are the property of IO Interactive A/S.

Hitman Roulette uses a single cookie to remember your selected theme appearance. By changing the Roulette Appearance under Roulette Settings, you consent to the use of this cookie, which expires in 30 days.

# ABOUT

Hitman Roulette is a tool that aims to give new ideas on how to complete missions in the latest Hitman trilogy of games by giving a set of random guidelines to follow when playing. It randomizes things such as mission entry and exit points, elimination method and worn disguise, generic and mission specific variables, and even targets for Contracts Mode.

[The original Hitman Roulette](https://thekotti.github.io/about.html) (created by [TheKotti](https://twitter.com/TheKotti)) is a more straight forward version that also works with Hitman: Blood Money.

## How To Use

To initiate a roll of the Roulette, select "Issue Roulette" on the main page. Use the Undo or Redo buttons that appear at the top of that page to move between generated Roulettes. Save your Roulette as a Textfile using the "Export Roulette" option, again on this page, but in the bottom right corner.

All missions from the trilogy are pulled into the Roulette by default, so go to "Select Missions" above to untoggle any missions you're missing or just the ones you don't like.
After that, the options under "Roulette Settings" allow you to alter what the Roulette surfaces. You can get more than the regular targets ("Mission Mode Roulette") by choosing "Contract Mode Roulette". Dial in the difficulty by toggling "Kill Requirements" like disguises or weapons you'll need to wear or use, "Extra Requirements" like one more objective or sets of complications, and "Gameplay Challenges" that force you to change how you play.
To quickly return the Roulette Settings back to default, preform a hard refresh of the page.

## Special Thanks & External Resources
* TheKotti, for his [original Hitman Roulette](https://thekotti.github.io/about.html) that was the code base and inspiration for this spin-off.
* [Hitman Interactive Maps](http://hitmanmaps.com/) by Winterbird & [Hitmaps](https://www.hitmaps.com/) (formerly Hitman 2 Maps) by mkoch227 for being great tools that aided in my data collection.
* The tools [jQuery CSS Customizable Scrollbar](https://github.com/gromo/jquery.scrollbar) by gromo & [Event Mouse Wheel](https://www.dte.web.id/2013/02/event-mouse-wheel.html) by Taufik Nurrohman which I used for style and navigation.
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/) by Chad Smith, which helped in allowing settings descriptions viewable for mobile via touch.
* [IO Interactive](https://www.ioi.dk/) for making a great game and constantly supporting it with new stuff!

## Compatibility & Issues

You can deselect any locations you do not own, but by default the Roulette works best with any edition of **HITMAN III** plus the **Access Pass: HITMAN 1 GOTY Edition** and **Access Pass: HITMAN 2 Gold**. However, there may be the odd conflicting trait that changed between game releases.
This was a hobby project I started in 2016/17 and have worked on during my free time as a way to brush up on my simple javascript, jQuery, and CSS knowledge as well as giving me more reason to play these new Hitman games well after unlocking everything. As such, I've only tested this at about a 1080p resolution using the browsers I frequent: Firefox and Chrome. Also I'm sure my additions to the existing code, as well as my own work, could use cleaning up here and there. If you find any issues or glaring conflicts with roulette results, [let me know via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) and I'll try and address it when I get the chance. - [BRYN](http://bryn.info/)

### To-Do List / Wishlist:
* Add HITMAN III targets for Contract Mode.
* "Photo Objectives" for HITMAN & HITMAN 2 missions.
* More "Extra Objectives" for late-campaign HITMAN 2 & HITMAN III.
* Stream Overlay mode; A method for streamers to show Objectives and more over the gameplay.
* This would take a complete overhaul, so it's probably out of MY league, but being able to link Roulettes to others would be cool. If you have knowledge on how to do this easily, leave me a message on [Github](https://github.com/BRYN4444/HitmanRoulette/issues).

### Latest Major Update (March 15, 2021)
* **HITMAN III:**
  * **Contract Mode Targets:** 44 Dartmoor Targets added (not including the mission default one).
* **Other Fixes:**
  * Sapienza's Non-Target Objective uses an updated image in HITMAN III, so that image has been updated in the Roulette now too.

#### Prior Updates (Feb. 1 - March 7, 2021)
* **HITMAN III campaign missions added.**
  * **Missions:** All six campaign missions added to the Roulette.
  * **Mission Mode Targets:** 18 added, 10 of which are from the third mission which are then randomized among themselves, unique to this mission only (The 11th target had to be left out due to the way some entrances change aspects of the level. The game's final target has a slightly limited number of elimination methods than other targets. Some work had to be done, so hopefully you aren't given an impossible Roulette roll.
  * **Contract Mode Targets:** 55 Dubai Targets added (not including the mission default ones).
  * **Starting Points:** 38 total. The game has a unique feature on some levels where the default / story entrance restricts things to match the campaign's plot. As such, the Roulette was tweaked to manage this so impossible tasks will not be rolled. Disable Entrance Requirements in Roulette Settings if you'd rather avoid these hassles.
  * **Exit Points:** 27 total. There final mission actually has two exits, but one is an easter egg exit that, unless the roll is perfect, will have you to go against the Roulette. I think this is very fitting considering the easter egg.
  * **Objectives:** 4 added that only appear in Mission Mode Roulette, with one displaying as optional depending on the starting point rolled.
  * **Extra Objectives:** many added, most taken from the Challenge lists in game. Hopefully I can still add more, but adding Contracts Mode Targets are higher priority.
  * **New: Photo Objectives** added to take advantage of the Camera gadget. So obviously, only possible in HITMAN III. In time, HITMAN & HITMAN 2 photo objectivess will be added, but for now only the first five HITMAN III missions have them.
* **Hitman III Appearance added.** By default, the Roulette will now look like the menus of HITMAN III. But as a reminder, the past game's styles are also selectable: Hitman 1 Red, Hitman GOTY Grey, and Hitman 2 "Hot Magenta".
* **Mobile Friendly / Low Resolution Browsing.** Fixed a few display and HTML bugs while adding H3 support.
* **Select Mission Listing Changes and Fixes.**
  * Dropped "H1" wording from Seasonal Content. This is in preparation for the upcoming Easter theming being in HITMAN III's Berlin.
  * With HITMAN III's Seasonal Content on another timed rotation:
    * I've specified where Seasonal Content can be played: Holiday Hoarders (H1 & H2) and Snow Festival (H2).
    * I've made the existing Holiday Hoarders and Snow Festival missions no longer active by default.
  * The "All Locations" Mission Grouping toggle has been altered (and as such renamed) to be for all accessible locations within HITMAN III itself (if you own everything, that is).
  * Fixed an issue where missions were staying restricted to Contracts Mode Roulette when switching back to Mission Mode Roulette.
  * HITMAN III levels were able to be individually toggled on mobile. 
* **Added missing Restrictable Mechanic.** At some point, IOI added the option to disable security Camera Grid to Hitman 2, but I only noticed it in Hitman III... Either way, that is now one of the Gameplay Restrictions that can be rolled.
* **Other Fixes:**
  * The speedboat exit in "Club 27" requires a key on Master Difficulty. The image and listing now reflect that.
  * IOI updated the menu image for Sapienza, so the Roulette now uses that same image.
  * Minor issue where too much text in a section wasn't gaining ellipses. Also, reminder that you can hover over these and the text will scroll to be readable.