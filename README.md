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
* Updates for any future HITMAN III mission DLC.
* "Photo Objectives" for HITMAN & HITMAN 2 missions.
* More Contracts Mode Targets for HITMAN missions with updated HITMAN III images to match.
* Stream Overlay mode; A method for streamers to show Objectives and more over the gameplay.
* This would take a complete overhaul, so it's probably out of MY league, but being able to link Roulettes to others would be cool. If you have knowledge on how to do this easily, leave me a message on [Github](https://github.com/BRYN4444/HitmanRoulette/issues).

### Latest Updates:

**April 29, 2021**
* **HITMAN:**
  * **Contract Mode Targets:** Added 136 "The Showstopper" Targets and updated the images of the existing ones with their HITMAN III versions.

---

**April 22, 2021**
* **Roulette:**
  * **Extra Objectives** were given a complete overhaul. Enabling them is still the same: Roulette Settings > Extra Requirements > Extra Objectives [On]. However, on the back end, you should see less conflicting rolls based on other Roulette Settings being enabled. This allowed more Extra Objectives to be added, especially to HITMAN (2016) locations. Details:
    * There are Mission Mode specific Extra Objectives that are shuffled in only outside of Contracts Mode. (These existed before)
    * If you have Complications and/or "Achieve Rating" disabled, another set of Extra Objectives are shuffled in. These are quirkier ones that may require pacifications, disguise changes, or collateral damage like extra eliminations that void Silent Assassin.
  * **Roulette Settings** had a few descriptions for options updated for clarification.
  * **Complications:** One was removed due to redundancy. Keeping "No Disguise Changes" over "One Disguise Change".
* **HITMAN:**
  * **Tactical Turtleneck** is the renamed version of Training Gear in the ICA Facility missions. Same now for here.
  * **Ezra Berg** photo updated to match his look in HITMAN III.
  * **Contract Mode Targets:** Added 35 "The Final Test" Targets and updated the images of the existing ones with their HITMAN III versions.
  * **Extra Objectives:** Added many due to Roulette improvements listed above. Updated images of the majority of existing ones to match how they look in HITMAN III.
* **HITMAN 2:**
  * **Extra Objectives:** Added many due to Roulette improvements listed above. Updated images of the majority of existing ones to match how they look in HITMAN III.
* **HITMAN III:**
  * **Extra Objectives:** Added a few due to Roulette improvements listed above.
* **Other Fixes:**
  * Some Missions that are unavailable for Contracts Mode could be enabled using the main "H3 Accessable" option. This has been fixed.
  * ICA Facility Missions have restrictive loadouts that were not being enforced properly by the Roulette in regards to possible elimination methods. This was working at one point, then broken, but now working again. Fun!
  * Setup for the potential Stream Overlay option is ongoing.
  * "You must select at least one mission" is enforced a little more.

---

**March 31, 2021**
* **HITMAN III:**
  * **Added Exit:** Berlin's "E.T." Easter Egg Exit.
* **HITMAN:**
  * **Contract Mode Targets:** Added 23 "Freeform Training" Targets and updated the images of the existing ones with their HITMAN III versions.
* **Other Fixes:**
  * Updated some of the Mission Grouping images to match the darker HITMAN III look.
  * Updated the Gameplay Challenge Achieve Rating images to match the HITMAN III results screen.
  * When Contract Mode Roulette is on, "Freeform Training" will be renamed to "Tutorial" to match how it is listed in game.