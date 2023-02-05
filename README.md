![Hitman Roulette](https://raw.githack.com/BRYN4444/HitmanRoulette/master/img/general/logo.png)

Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, music, images, and text are the property of IO Interactive A/S.

Hitman Roulette uses a single cookie to remember your selected theme appearance. By changing the Roulette Appearance under Roulette Settings, you consent to the use of this cookie, which expires in 30 days.

# ABOUT

Hitman Roulette generates a set of random guidelines to follow when playing the HITMAN "World of Assassination" trilogy. It randomizes things such as mission entry and exit points, elimination method and worn disguise, generic and mission specific variables, and even targets for Contracts Mode.

[The original Hitman Roulette](https://thekotti.github.io/about.html) (created by [TheKotti](https://twitter.com/TheKotti))  is a more straight forward version that supports Hitman (2016), Hitman 2 (2018), and Hitman: Blood Money.

## How To Use

To initiate a roll of the Roulette, click "Issue Roulette" on the main page. Use the Undo or Redo arrow buttons that appear at the top to move between generated Roulettes. Save your Roulette as a Textfile using the "Export Roulette" button, also shown on the main page.

Most missions from the trilogy are pulled into the Roulette by default. Through the "Select Missions" option, you can untoggle any missions you're missing or just the ones you don't like.

"Roulette Settings" allow you to change what the Roulette surfaces: You can get more than the regular targets by choosing "Contract Mode" as the "Roulette Type". Dial in the difficulty by toggling "Kill Requirements" like disguises or weapons you'll need to wear or use, "Extra Requirements" like one more objective or sets of complications, and "Gameplay Challenges" that force you to change how you play.

To quickly return the Roulette Settings back to default, preform a hard refresh of the page.

## Compatibility & Issues

Though you can deselect any location you do not own, by default the Roulette works best with **HITMAN: World of Assassination** (HITMAN III physical disc) plus the **HITMAN: World of Assassination Deluxe Pack**.

There may be the odd conflicting trait that changed between releases in this trilogy, though I've done my best to account for these. It is also important to note that the later the game sequel, the more gear is available to unlock for use. Lastly, since Contract Mode Targets are regular NPCs and Elimination Methods are randomly assigned, not every Target can be killed with every Method easily/silently.

This was a hobby project I started in 2016/17 and have worked on during my free time as a way to brush up on my simple javascript, jQuery, and CSS knowledge as well as giving me more reason to play these new Hitman games well after unlocking everything. As such, I've only tested this using the browsers I frequent: Firefox and Chrome. If you find any issues or glaring conflicts with Roulette results, let me know [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107) and I'll try and address it when I get the chance. - [BRYN](http://bryn.info/)

## Special Thanks & External Resources
* [IO Interactive](https://www.ioi.dk/) for making a great trilogy of games that helped me through some bad days and kept me better occupied here.
* Niels Bye Nielsen for composing the music in the World Of Assassination Trilogy. Great tracks to hit to.
* TheKotti, for his [original Hitman Roulette](https://thekotti.github.io/about.html) that was the code base and inspiration for this spin-off.
* [Hitmaps](https://www.hitmaps.com/) by Mike Koch for being great tools that aided in my data collection. Also the former Hitman Interactive Maps by Winterbird.
* The tools [jQuery CSS Customizable Scrollbar](https://github.com/gromo/jquery.scrollbar) by gromo & [Event Mouse Wheel](https://www.dte.web.id/2013/02/event-mouse-wheel.html) by Taufik Nurrohman which I used for style and navigation.
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/) by Chad Smith, which helped in allowing settings descriptions viewable for mobile via touch.
* [jQuery Countdown](http://keith-wood.name/countdown.html) by Keith Wood, which is being used in the Stream Overlay for any Time Limit Complications.

### Latest Updates:

**February 5th, 2023**
* **Roulette:**
  * **Select Missions:** Renamed/rephrased the default all locations toggle.
  * **About & Help:** The README version wasn't updated to reflect the new World Of Assassination compatibility.
* **Other Fixes:**
  * Minor CSS fix for locked mission selection.
* **Current Plans:**
  * Enjoying Freelancer. No way to incorporate it into the Roulette. If anything, I hope it had some influence on Freelancer.
>**Bug Hunting:** Please make a post [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107) if you:
>* Experience any graphical issues while using the Roulette in 4K, or on phones/tablets.
>* Generate impossibilities when using the Roulette with Elusive Targets or past titles HITMAN / HITMAN 2.
>* Have troubles or questions about the Stream Overlay.

**January 28th, 2023**
* **Roulette:**
  * **Select Missions:** Golden Handshake & The Last Resort are listed as (DLC), since in HITMAN 2, III, and World of Assassination, they are.
  * **About & Help:** Listed World of Assassination (H3 disc) & its Deluxe Pack as the best compatible game & DLC for use with the Roulette. 
* **HITMAN 2:**
  * **Three-Headed Serpent:**
    * **Contract Mode Targets:** 2 images updated. This is due to a visual bug with aprons being fixed in the game.
  * **Chasing a Ghost:**
    * **Contract Mode Targets:** 4 images updated. This is due to a visual bug with aprons being fixed in the game.
* **HITMAN III:**
  * **Shadows in the Water:**
    * **Contract Mode Targets:** 4 images updated. This is due to a visual bug with aprons being fixed in the game.
* **Other Fixes:**
  * Minor intel updates for targets in Contract Mode.

**January 18th, 2023**
* **Roulette:**
  * **Select Missions:** Added Elusive Targets as possible missions. They are not enabled by default and have to be manually triggered (like the Sarajevo Six missions). I've also included all of them despite those unavailable in Elusive Target Arcade. Partially as optimism, partially for the benefit of modders.
* **HITMAN 2:**
  * **A Bitter Pill:**
    * **Exit:** Raft exit removed since the Paddle isn't available in this Special Assignment. 
* **Other Fixes:**
  * Fixed objectives and the entry/exit images displaying smaller than they should be at certain resolutions.
  * Fixed some objectives missing images.
  * Ensured objective descriptions display properly in the Export Roulette textarea/txt.

**October 7th, 2022**
* **HITMAN 2:**
  * **The Last Resort:**
    * **Entrance:** The image for "Restaurant's Kitchen" has been updated to match the newly corrected one.
* **HITMAN III:**
  * **The Farewell:**
    * **Exit:** Added the newly patched in "Winery Viewpoint Car" exit. Updated the image and listing for the "Underground Cave System" exit to detail that any Wetsuits can be used now.

**August 25th, 2022**
* **Roulette:**
  * **Roulette Settings:** Options dependent on the state of other options are now disabled to avoid unnecessary changes and clearly indicate the options you can adjust.
    * **Roulette Modes:** Updated many of the options here for clarity & Contracts Mode NPC granularity.
      * **Roulette Type:** Choosing between Mission Mode and Contracts Mode Roulette is done in this one singular option now. The following options only work for Contracts Mode Roulette:
	    * **Target Selection:** Determine what the Roulette assigns you in Contracts Mode Roulette. **Any Type:** any NPC type can be chosen by the Roulette. **Custom:** using the newly added checkboxes, hand-select the types of NPCs that can be chosen from *Guards*, *Staff*, *Civilians*, or the *Unique* types like VIPs. **Unassigned:** NPC names aren't listed; only elimination conditions will be shown. Determine the NPC Target(s) yourself. If you select this, and set the Target Amount appropriately, you can use the Roulette with Elusive Targets.
	    * **Target Amount:** Sets the number of Contract Mode Targets. Same as before, just renamed.
	    * **Contracts Intel:** Location based intel is listed with targets, on by default. Existing functionality, now a separate option better showcase it.
    * **Mobile Browsing:** The descriptions for settings are now a pop-up menu. This way the full text can be displayed at a larger font size.
* **HITMAN:**
  * **Freeform Training:**
    * **Contract Mode Targets:** 1 more added.
  * **The Icon:**
    * **Contract Mode Targets:** 1 more added.
* **HITMAN 2:**
  * **Three-headed Serpent:**
    * **Contract Mode Targets:** 125 more added.
  * **Chasing a Ghost:**
    * **Contract Mode Targets:** 107 more added.
  * **Another Life:**
    * **Contract Mode Targets:** 25 more added.
  * **Golden Handshake:**
    * **Contract Mode Targets:** 5 more added.
* **HITMAN III:**
  * **On Top Of The World:**
    * **Contract Mode Targets:** 6 more added.
* **Other Fixes:**
  * Disabled the Force Difficulty requirement from appearing on the Dartmoor Garden Show.
  * Fixed an error where an exit in Dubai wasn't showing an image.
  * Updated the Target Images for the Sarajevo Six to a higher quality.
  * Fixed a number of spelling mistakes throughout.

---

**August 7th, 2022**
* **Roulette:**
  * **Roulette Settings - Roulette Mode:**
    * **Contract Mode Roulette:** Selecting "Hunt" wasn't properly removing the Intel listing of targets. (*This setting has changed in a more recent update*)
* **HITMAN 2:**
  * **Hokkaido Snow Festival:**
    * **Starting Points:** "Tobias Rieper's Suite" can now be selectable. However, it is only possible through HITMAN III. As such, "H2: Restaurant" is also listed so HITMAN 2 players don't need to re-roll. 

---

**August 6th, 2022**
* **HITMAN III:**
  * **Shadows in the Water:**
    * **Contract Mode Targets:** 126 Added.
    * **Extra Objectives:** 4 more added.
	* **Photo Objectives:** 2 more added.
* **HITMAN 2:**
  * **Three-headed Serpent:**
    * **Contract Mode Targets:** 1 more added. Character crossover with "Shadows in the Water".
* **HITMAN:**
  * **World Of Tomorrow:**
    * **Photo Objectives:** 1 more added.
  * **Landslide:**
    * **Photo Objectives:** 1 more added.
  * **The Author:**
    * **Photo Objectives:** 1 more added.

---

**July 28th, 2022**
* **HITMAN III:**
  * **"Shadows in the Water" Mission Added. (Location: Ambrose Island)
    * **Targets:** 2. (Contract Mode Targets coming soon)
	* **Starting Points:** 6 added. Only 2 are undercover locations.
    * **Exit Points:** 7 added. Two of these are disabled in Contracts Mode due to the lack of the GPS Tracker from the mission proper.
    * **Objectives:** 1 added. Mandatory in the actual mission, but it isn't too much of a hassle after a few tries. 
    * **Extra Objectives:** 18 added.
    * **Photo Objectives:** 11 added.
  * **Untouchable:**
    * **Extra Objectives:** 1 added, because I had an idea when making the photo objectives.
    * **Photo Objectives:** 13 added. Completely overlooked adding them here, but now there are some!  
* **Roulette:**
  * **Roulette Settings - Extra Requirements:**	
    * **Include Secret Exits**: The "Secret" option from "Force Start/Exit" is now its own setting. This way you can have Exit Only and Secret Exits at the same time.

---

**July 13th, 2022**
* **Roulette:**
  * **Roulette Settings - Extra Requirements:**
    * **Allow Complications**: Had a major code overhaul, fixing some legacy bugs. Also some minor updates.
	  *	Generating complications, followed by generating a value less of the previous (like: 6 then 2), would result in some previously generated complications not being removed.
	  * Sometimes it was be possible to generate no Complications in certain situations where Restrictions would force some Complications to be omitted. Now, at least one Complication should always generate if the Max value slider isn't set to zero. 
      * Reclassified the Restriction "No Agility" into a Complication as it was the only one that didn't involve disabling something through the in-game options menu. (Also, it was an H1 Complication to begin with anyway)
      * Complication "Do Not Get Spotted" now uses the matching in-game Contracts Mode image. (Originally this was done to avoid confusion with a "No Crouching" Complication, but that was removed due to H3 forcing auto-crouching in spots)
	  * Fixed a formatting error related to Complications in the Export Roulette .txt/textarea.
  * **Roulette Settings - Reset Or Return:** (New)
    * **Reset All Roulette Settings**: Returns them to default without hard-refreshing the Roulette page.
	* **Return To Front Page**: Takes you to the main Hitman Roulette tab and clears out any Issued Roulettes. Settings changes will be retained.
  * **Roulette Settings - Roulette Mode:** (New)
    * **Stream Overlay Beta**: Intended for PC Steamers to easily switch between generating Roulettes and playing the game. Follow the instructions listed to learn how to try it.
      * Currently in testing, so if you have any issues or suggestions please make a post [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107)!
* **Other Fixes:**
  * An Extra Objective on Nightcall wasn't properly displaying an image.
  * Updated some images for Restriction challenges.