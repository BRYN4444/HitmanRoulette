Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, images, and text are the property of IO Interactive A/S.

Hitman Roulette uses a single cookie to remember your selected theme appearance. By changing the Roulette Appearance under Roulette Settings, you consent to the use of this cookie, which expires in 30 days.

# ABOUT

Hitman Roulette generates a set of random guidelines to follow when playing the HITMAN "World of Assassination" trilogy. It randomizes things such as mission entry and exit points, elimination method and worn disguise, generic and mission specific variables, and even targets for Contracts Mode.

[The original Hitman Roulette](https://thekotti.github.io/about.html) (created by [TheKotti](https://twitter.com/TheKotti))  is a more straight forward version that supports Hitman (2016), Hitman 2 (2018), and Hitman: Blood Money.

## How To Use

To initiate a roll of the Roulette, click "Issue Roulette" on the main page. Use the Undo or Redo arrow buttons that appear at the top to move between generated Roulettes. Save your Roulette as a Textfile using the "Export Roulette" button, also shown on the main page.

Most missions from the trilogy are pulled into the Roulette by default. Through the "Select Missions" option, you can untoggle any missions you're missing or just the ones you don't like.

"Roulette Settings" allow you to change what the Roulette surfaces: You can get more than the regular targets by choosing "Contract Mode Roulette". Dial in the difficulty by toggling "Kill Requirements" like disguises or weapons you'll need to wear or use, "Extra Requirements" like one more objective or sets of complications, and "Gameplay Challenges" that force you to change how you play.

To quickly return the Roulette Settings back to default, preform a hard refresh of the page.

## Special Thanks & External Resources
* [IO Interactive](https://www.ioi.dk/) for making a great trilogy of games that helped me through some bad days and kept me better occupied here.
* TheKotti, for his [original Hitman Roulette](https://thekotti.github.io/about.html) that was the code base and inspiration for this spin-off.
* [Hitman Interactive Maps](http://hitmanmaps.com/) by Winterbird & [Hitmaps](https://www.hitmaps.com/) (formerly Hitman 2 Maps) by Mike Koch for being great tools that aided in my data collection.
* The tools [jQuery CSS Customizable Scrollbar](https://github.com/gromo/jquery.scrollbar) by gromo & [Event Mouse Wheel](https://www.dte.web.id/2013/02/event-mouse-wheel.html) by Taufik Nurrohman which I used for style and navigation.
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/) by Chad Smith, which helped in allowing settings descriptions viewable for mobile via touch.

## Compatibility & Issues

You can deselect any locations you do not own, but by default the Roulette works best with any edition of **HITMAN III** plus the **Access Pass: HITMAN 1 GOTY Edition** and **Access Pass: HITMAN 2 Gold**. However, there may be the odd conflicting trait that changed between past game releases in this trilogy. It is also important to note that the later the game sequel, the more gear is available to unlock for use. Since Contract Mode Targets are regular NPCs and Elimination Methods are randomly assigned, not every Target can be killed with every Method easily/silently.

This was a hobby project I started in 2016/17 and have worked on during my free time as a way to brush up on my simple javascript, jQuery, and CSS knowledge as well as giving me more reason to play these new Hitman games well after unlocking everything. As such, I've only tested this at about a 1080p resolution using the browsers I frequent: Firefox and Chrome. Also I'm sure my additions to the existing code, as well as my own work, could use cleaning up here and there. If you find any issues or glaring conflicts with roulette results, [let me know via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) and I'll try and address it when I get the chance. - [BRYN](http://bryn.info/)

### Latest Updates:

**January 10, 2022**
* **HITMAN:**
  * **Freedom Fighters:**
    * **Contract Mode Targets:** 2 removed due to differences between HITMAN III and prior releases.
* **Current Plans:**
  * Happy new year! I'm mostly waiting on Hitman III's upcoming Year 2 plans to see what missions might be added to the Roulette.

---

**January 4, 2022**
* **Roulette:**
  * **Resolution/Zoom Warning:** Adjustment to the resolution size required to trigger the warning. Also changed the unicode character used as the close icon as it was auto-changing into an emoji on mobile Chrome.

---

**January 3, 2022**
* **Roulette:**
  * **Select Missions:**
    * **Default:** With the Hokkaido Snow Festival now available in Hitman III, this Seasonal Content Mission is now toggled on by default in the Roulette, like all Hitman III Available Locations.
	* **Phrasing:** The "Toggle All" option is renamed from "H3 Accessable Locations" to "All Locations (Default)" now that every prior game mission is available within Hitman III.
  * **Image File Formats:** For better browser compatability, all .WEBP files have been changed to .JPG files.
* **HITMAN:**
  * **Holiday Hoarders:**
    * **Photo Objectives:** 1 more added.
	* **Elimination Method:** The "Xmas Star" Lethal Melee item isn't available in the Hitman 1 version of Holiday Hoarders. Special text will now state any Lethal Throw or Melee weapon is allowed using the Roulette for Hitman 1.
  * **Hokkaido Snow Festival:**
    * **Select Mission Image:** Updated to match Hitman III.
    * **Photo Objectives:** 5 added.
* **HITMAN 2:**
  * **Chasing a Ghost:**
    * **Contracts Mode Targets:** Updated the images of the existing ones with their HITMAN III versions.
    * **Photo Objectives:** 12 added.
  * **Illusions of Grandeur:**
    * **Photo Objectives:** 2 added.
  * **Another Life:**
    * **Contracts Mode Targets:** Updated target images with their HITMAN III versions.
    * **Photo Objectives:** 11 added.
  * **A Bitter Pill:**
    * **Photo Objectives:** 2 added.
  * **The Ark Society:**
    * **Contracts Mode Targets:** Updated target images with their HITMAN III versions.
	* **Extra Objectives:** 1 more added.
    * **Photo Objectives:** 13 added.
  * **Golden Handshake:**
    * **Contracts Mode Targets:** Updated target images with their HITMAN III versions.
	* **Extra Objectives:** 1 more added.
    * **Photo Objectives:** 10 added.
  * **The Last Resort:**
    * **Contracts Mode Targets:** 1 more added. Updated target images with their HITMAN III versions.
    * **Photo Objectives:** 12 added.
* **HITMAN III:**
  * **On Top Of The World:**
    * **Photo Objectives:** 4 more added.
  * **The Farewell:**
  	* **Restored Exit:** "Tango With Diana" Exit. Only appears in Mission Mode Roulette, as eliminating Contract Mode Targets do not enable it.
  	* **Added Exit:** "Shrine" Easter Egg Exit. Only appears for Suit Starting Locations.
    * **Starting Location:** The Parking Lot starting location was using the incorrect image.
* **Other Fixes:**
  * Updated some Intel for a handful of Contract Mode Targets in Hitman 2 missions.
  * Two Contract Mode Targets in The Arc Society had their names accidentally swapped with each other.

---

**December 18, 2021**
* **HITMAN:**
  * **Holiday Hoarders:**
    * **Photo Objectives:** 9 added. (Been very IRL busy, but wanted to get these out before Christmas.)
  
---

**December 16, 2021**
* **Roulette:**
  * **Resolution/Zoom Warning:** Changes have been made to the phrasing and implementation of this warning. It will no longer block access to the Roulette outright. Instead, the warning will display at the top of the page and can be closed out of.

---

**December 6, 2021**
* **Roulette:**
  * **Select Missions:**
    * **Default:** With Holiday Hoarders now available in Hitman III, this Seasonal Content Mission is now toggled on by default in the Roulette, like all Hitman III Available Locations.
* **HITMAN 2:**
  * **Nightcall:**
    * **Contracts Mode Targets:** 14 more added. Updated the images of the existing ones with their HITMAN III versions.
	* **Extra Objectives:** 1 more added.
    * **Photo Objectives:** 6 added.
  * **The Finish Line:**
    * **Contracts Mode Targets:** Updated target images with their HITMAN III versions.
	* **Extra Objectives:** Readded "Blackmail", based off a challenge that was bugged at HITMAN 3's Launch.
    * **Photo Objectives:** 16 added.
  * **A Silver Tongue:**
    * **Photo Objectives:** 4 added.
  * **Three-Headed Serpent:**
    * **Contracts Mode Targets:** Updated target images with their HITMAN III versions.
    * **Photo Objectives:** 15 added.
  * **Embrace Of The Serpent:**
    * **Photo Objectives:** 2 added.
* **Other Fixes:**
  * If any Accident Elimination is randomized for the target in Untouchable, the roulette will now specify the only available accident kill. This was only working partially before.
  * Fixed misspelled Contract Target name in The Finish Line & Three-Headed Serpent.

---

**October 28, 2021**
* **HITMAN:**
  * **Situs Inversus:**
    * **Contracts Mode Targets:** 127 more added. Updated the images of the existing ones with their HITMAN III versions.
	* **Extra Objectives:** 3 more added.
    * **Photo Objectives:** 9 added.
  * **Patient Zero:**
    * **"Eliminate Any Infected" Objective:** Renamed to "Infected" and replaced image to match in game. Reworded description text to be more concise.
	* **Extra Objectives:** 1 more added.
    * **Photo Objectives:** 6 added.
  * Other Small Updates:
    * **Hokkaido (All Missions) - "Hiking Route" Exit:** Renamed to "Mountain Path" to better match the Starting Location.
* **Other Fixes:**
  * Erich Soders' target specific eliminations on Situs Inversus were having their labeling cut off when "Forced Melee Methods" was disabled.
  * Fixed a coding issue where the Complication "One Save Only" wasn't properly appearing in Roulette generation. Also, it will only appear in missions that allow saving as long as "Force Difficulty" is disabled.
  * A Complication "One Disguise Change" was previously removed due to another Complication, "No Disguise Changes", causing redundancy. It is now coded so that as long as "Specific Disguises" is disabled, one of these two Complications have an equal chance of appearing (rather than the potential of both).
  * The Allow Complications setting was displaying an incorrect value when refreshing/reloading (not hard refreshing/reloading) the page.
  * Removed a few more duplicate Contracts Mode Target images.