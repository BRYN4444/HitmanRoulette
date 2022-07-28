![Hitman Roulette](https://raw.githack.com/BRYN4444/HitmanRoulette/master/img/general/logo.png)

Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, music, images, and text are the property of IO Interactive A/S.

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
* Niels Bye Nielsen for composing the music in the World Of Assassination Trilogy. Great tracks to hit to.
* TheKotti, for his [original Hitman Roulette](https://thekotti.github.io/about.html) that was the code base and inspiration for this spin-off.
* [Hitman Interactive Maps](http://hitmanmaps.com/) by Winterbird & [Hitmaps](https://www.hitmaps.com/) (formerly Hitman 2 Maps) by Mike Koch for being great tools that aided in my data collection.
* The tools [jQuery CSS Customizable Scrollbar](https://github.com/gromo/jquery.scrollbar) by gromo & [Event Mouse Wheel](https://www.dte.web.id/2013/02/event-mouse-wheel.html) by Taufik Nurrohman which I used for style and navigation.
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/) by Chad Smith, which helped in allowing settings descriptions viewable for mobile via touch.
* [jQuery Countdown](http://keith-wood.name/countdown.html) by Keith Wood, which is being used in the Stream Overlay for any Time Limit Complications.

## Compatibility & Issues

Though you can deselect any location you do not own, by default the Roulette works best with the either:
* Any edition of **HITMAN III** plus the **Access Pass: HITMAN 1 GOTY Edition** and **Access Pass: HITMAN 2 Gold**.
* OR The **HITMAN Trilogy** plus the **HITMAN Trilogy Premium Add-Ons Bundle**.

There may be the odd conflicting trait that changed between releases in this trilogy, though I've done my best to account for these. It is also important to note that the later the game sequel, the more gear is available to unlock for use. Lastly, since Contract Mode Targets are regular NPCs and Elimination Methods are randomly assigned, not every Target can be killed with every Method easily/silently.

This was a hobby project I started in 2016/17 and have worked on during my free time as a way to brush up on my simple javascript, jQuery, and CSS knowledge as well as giving me more reason to play these new Hitman games well after unlocking everything. As such, I've only tested this using the browsers I frequent: Firefox and Chrome. If you find any issues or glaring conflicts with Roulette results, let me know [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107) and I'll try and address it when I get the chance. - [BRYN](http://bryn.info/)

### Latest Updates:

**July 28th, 2022**
* **HITMAN III:**
  * **"Shadows in the Water" Mission Added. (Location: Ambrose Island)
    * **Targets:** 2. (Contract Mode Targets coming soon)
	* **Starting Points:** 6 added. Only 2 are undercover locations.
    * **Exit Points:** 7 added. Two of these are disabled in Contracts Mode due to the lack of the GPS Tracker from the mission proper.
    * **Objectives:** 1 added. Mandatory in the actual mission, but it isn't too much of a hastle after a few tries. 
    * **Extra Objectives:** 18 added.
    * **Photo Objectives:** 11 added.
  * **Untouchable:**
    * **Extra Objectives:** 1 added, because I had an idea when making the photo objectives.
    * **Photo Objectives:** 13 added. Completely overlooked adding them here, but now there are some!  
* **Roulette:**
  * **Roulette Settings - Extra Requirements:**	
    * **Include Secret Exits**: The "Secret" option from "Force Start/Exit" is now its own setting. This way you can have Exit Only and Secret Exits at the same time.
* **Current Plans:**
  * Contracts Mode Support for "Shadows in the Water".
>**Bug Hunting:** Please make a post [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107) if you:
>* Experience any graphical issues while using the Roulette in 4K, or on phones/tablets.
>* Notice inconsistencies or impossibilities generated if using the Roulette while playing HITMAN or HITMAN 2.
>* Have troubles or inqueries with the new Stream Overlay.

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

---

**June 20th, 2022**
* **Other Fixes:**
  * Contracts Mode Targets were not appearing in Intel and Hunt modes. (A single word omitted and overlooked from code can really cause issues, huh. My apologies.)
  * An Extra Objective on Apex Predator wasn't properly listing in the Export Roulette .txt/textarea.
  * Camera Objectives were not properly being added in Export Roulette .txt/textarea.

---

**May 30th, 2022**
* **Roulette:**
  * **Roulette Settings - New Options:**
      * **Roulette Appearance:** Added a new default Theme, based on the HITMAN Trilogy promo/storefront art (reds and blues). I wanted a Theme unique to the Roulette, and going off this was inspiring me more than choosing my own colors. Of course, the existing HITMAN menu styled Themes are still there if you prefer.
	  * **Roulette Music**: Added optional music that plays in the background. Play/Pause can be found in the bottom right corner, next to the Export Roulette button. Changing songs & volume is done in Roulette Settings. By default, the music is paired with whatever Roulette Appearance is set. But you can instead override that with any Menu Theme from the World Of Assassination Trilogy. This is disabled on mobile.
	  * **Roulette Mode:**
		* **Contracts Mode Roulette:** Selecting "Any" will unassign targets, allowing you to pair any generated elimination conditions with any NPC in a mission. Almost like a reverse-roulette. 
		* **Conditions Masked:** When enabled, generated Disguise and Elimination Conditions are hidden until clicked at your discretion. This allows meta play like revealing subsequent target conditions only after the previous ones are eliminated. The Export Roulette option is disabled until all conditions are revealed to avoid peeking.
  * **"Responsive Design":** Testing 4K Resolution support. If you experience any graphical issues while browsing in 4K, please report them! Note: While a few images were remade to be larger, the Contract Mode Target images are yet to be adjusted, as that is a big undertaking. For now they will be scaled to fit, so they might look a little blurry.
  * **Export Roulette:**  Added the current Date and Time to the TXT filename that generates when you Save an Exported Roulette.
* **HITMAN III:**
  * **The Farewell:**
    * **Contract Mode Targets:** 1 removed. They were originally added due to simply having a single letter name. But with a patch fixing this, the NPC is now boring with little variety in elimination methods. So I removed them.
* **Other Fixes:**
  * An NPC previously removed due to compatibility between games was still in the data for a secondary mission. They are now properly removed.
  * Reworded a part of the Compatibility & Issues section to include the HITMAN Trilogy & Add-Ons Bundle, as well as other minor additions/changes to About & Help.

---

**May 10th, 2022**
* **Roulette:**
  * **Select Missions:** Reorganized the submenus closer to the campaign selection menu in HITMAN III. This thins out the denser menus, and groups together the sparser ones.
  * **Roulette Appearance:** For the "Launch Red" and "GOTY White" Theme, the location image background were using CSS filters that were causing lag. The filters have been removed, stopping this lag, and background images were added that are theme stylized instead.
* **Other Fixes:**
  * When tabbing back to the Roulette main page after generating a roulette, the location background image would be missing.
  * Updated a number of icons to better match their in-game glyphs, as well as adding icons for the new choices under Select Missions.
  * Minor theme adjustments.

---

**April 29th, 2022**
* **Roulette:**
  * **About & Help:** Added a link to the [Hitman Roulette post on Hitman Forum](https://www.hitmanforum.com/t/13107), in case you have a question or issue and would rather not register here to post.
* **HITMAN:**
  * **The Showstopper:**
    * **Contract Mode Targets:** 1 removed due to differences between HITMAN III and prior releases.