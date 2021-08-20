Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, images, and text are the property of IO Interactive A/S.

Hitman Roulette uses a single cookie to remember your selected theme appearance. By changing the Roulette Appearance under Roulette Settings, you consent to the use of this cookie, which expires in 30 days.

# ABOUT

Hitman Roulette generates a set of random guidelines to follow when playing the HITMAN "World of Assassination" trilogy. It randomizes things such as mission entry and exit points, elimination method and worn disguise, generic and mission specific variables, and even targets for Contracts Mode.

[The original Hitman Roulette](https://thekotti.github.io/about.html) (created by [TheKotti](https://twitter.com/TheKotti)) is a more straight forward version that also works with Hitman: Blood Money.

## How To Use

To initiate a roll of the Roulette, click "Issue Roulette" on the main page. Use the Undo or Redo arrow buttons that appear at the top to move between generated Roulettes. Save your Roulette as a Textfile using the "Export Roulette" button, also shown on the main page.

Most missions from the trilogy are pulled into the Roulette by default. Through the "Select Missions" option, you can untoggle any missions you're missing or just the ones you don't like.

"Roulette Settings" allow you to change what the Roulette surfaces: You can get more than the regular targets by choosing "Contract Mode Roulette". Dial in the difficulty by toggling "Kill Requirements" like disguises or weapons you'll need to wear or use, "Extra Requirements" like one more objective or sets of complications, and "Gameplay Challenges" that force you to change how you play.

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
* "Photo Objectives" for HITMAN & HITMAN 2 missions.
* More Contracts Mode Targets for HITMAN missions with updated HITMAN III images to match.
* More "Extra Objectives" for late-campaign HITMAN 2 & HITMAN III.
* Stream Overlay mode; A method for streamers to show Objectives and more over the gameplay.

### Latest Updates:

**August 20, 2021**
* **Roulette:**
  * Added a preview when selecting "Roulette Appearance". Just hover over the options and the preview appears in the description to the right. This is only on non-mobile browsing due to screen size restrictions.
* **HITMAN:**
  * **The Icon:**
    * **Contracts Mode Targets:** 25 more added. Updated the images of the existing ones with their HITMAN III versions.
    * **Photo Objectives:** 5 added.
* **Other Fixes:**
  * Differentiated the icon shown for Missions, Contracts, and Escalations as well as Elusive Targets and the Sarajevo Six. (Only visable for non-mobile browsing)
  * Method, Disguise, and Intel icons for Targets now match Hitman III when using the "Hitman III Dark" (default) appearance.
  * Minor color and text issues fixed for mobile browsing using the "Hitman GOTY White" appearance. 
* **Plans:**
  * Slowly going through H1 & H2 to add/update Contract Mode Target images and find more Extra/Photo Objectives. Personal issues and other games got in the way of updates here for a while, sorry.

---

**August 16, 2021**
* **HITMAN III:**
  * **Dartmoor Garden Show:**
    * **Extra Objectives:** 7 more added.
    * **Photo Objectives:** 4 more added.
* **HITMAN 2:**
  * **The Ark Society:**
    * **Melee Weapon added:** Learned that there is a Starfish on the map, so it has been added as a possible melee elimination method.
* **HITMAN:**
  * **World of Tomorrow:**
    * **Contracts Mode Targets:** 148 more added. Updated the images of the existing ones with their HITMAN III versions.
    * **Extra Objectives:** 3 more added, one being an easter egg.
    * **Photo Objectives:** 17 added.
* **Other Fixes:**
  * The background image for "Situs Inversus" Hokkaido was using the "Hokkaido Snow Festival" image instead.
  * One of the contestants in the "Dartmoor Garden Show" had incorrect intel for Contracts Mode.

---

**August 7, 2021**
* **HITMAN III:**
  * **Dartmoor Garden Show:**
    * **Contracts Mode Targets:** 72 Targets Added: 7 from Mission Mode, 25 unique to this version of Dartmoor, and 40 also seen in "A Death In The Family" Dartmoor.
  * **A Death In The Family:**
    * **Contracts Mode Targets:** 13 Targets Added. These were NPCs passed over before with focus been on inside the Manor. Since they're also in "Dartmoor Garden Show", they were added here too.
* **HITMAN:**
  * **The Showstopper:**
    * **Photo Objectives:** 10 Added.
* **Other Fixes:**
  * Some "A Death In The Family" exit filenames were renamed when adding exits for "Dartmoor Garden Show" and improperly changed in the CSS. Oops!

---

**August 5, 2021**
* **Roulette:**
  * **Improved Mobile Browsing:** Hopefully better menu navigation and scaling for mobile browsing. Larger resolutions still needs to be worked on.
* **HITMAN III:**
  * **Dartmoor Garden Show Added:** Enabled by default. Found in "Select Mission" under "Hitman III Extra Content" and added to the "Seasonal Content" Mission Grouping.
    * **Implementation:** This unique mission is actually an escalation. After completing it for the first time, Determination Mode is unlocked as an entrance which allows targets to be chosen freely in batches.
		* **Mission Mode:** 5 Targets will be presented with intel that states what level of the escalation they are to be eliminated during.
		* **Contracts Mode** is available for this location too. You don't have to complete the escalation to access this.
    * **Targets:** 7 Potential Targets; 4 Contestants and 3 Judges. Contract Mode Targets will be implemented shortly, so only the existing seven are available.
	* **Extra Objectives:** Currently 4, with more after a bit more time with the level.
	* **Photo Objectives:** Just 2. Again, more soon.
  * **"Tango With Diana" Exit:** Removing this exit while I reevaluate it. This exit is only viable in Mission Mode after a specific mission story. I'll need to test a few things and do some backend work if it can be added back properly.
* **HITMAN 2:**
  * **A Silver Tongue:** Updated Mission Image to match the one in game. I originally used a separate one because I felt it matched the other Special Assignments better. But it was the lone exception, so it's changed now.

---

**April 29, 2021**
* **HITMAN:**
  * **Contract Mode Targets:** Added 136 "The Showstopper" Targets and updated the images of the existing ones with their HITMAN III versions.