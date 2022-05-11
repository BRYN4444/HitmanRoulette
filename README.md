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

This was a hobby project I started in 2016/17 and have worked on during my free time as a way to brush up on my simple javascript, jQuery, and CSS knowledge as well as giving me more reason to play these new Hitman games well after unlocking everything. As such, I've only tested this at about a 1080p resolution using the browsers I frequent: Firefox and Chrome. Also I'm sure my additions to the existing code, as well as my own work, could use cleaning up here and there. If you find any issues or glaring conflicts with roulette results, let me know [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or [on Hitman Forum](https://hitmanforum.com/t/13107) and I'll try and address it when I get the chance. - [BRYN](http://bryn.info/)

### Latest Updates:

**May 10th, 2022**
* **Roulette:**
  * **Select Missions:** Reorganized the submenus closer to the campaign selection menu in HITMAN III. This thins out the denser menus, and groups together the sparser ones.
  * **Roulette Appearance:** For the "Launch Red" and "GOTY White" Theme, the location image background were using CSS filters that were causing lag. The filters have been removed, removing this lag, and the images are now theme appropriate themselves now.
* **Other Fixes:**
  * When tabbing back to the Roulette main page after generating a roulette, the location background image would be missing.
  * Updated a number of icons to better match their in-game glyphs, as well as adding icons for the new choices under Select Missions.
  * Minor theme adjustments.
* **Current Plans:**
  * Preparing for Ambrose Island, Hitman III's upcoming new location.
  * Double checking past work for inconsistencies between game versions, such as NPCs existing in H2/3 that don't in H1 or vice versa. If you know of any, please share here on Github's Issues page or in the Hitman Forum thread!

---

**April 29th, 2022**
* **Roulette:**
  * **About & Help:** Added a link to the [Hitman Roulette post on Hitman Forum](https://www.hitmanforum.com/t/13107), in case you have a question or issue and would rather not register here to post.
* **HITMAN:**
  * **The Showstopper:**
    * **Contract Mode Targets:** 1 removed due to differences between HITMAN III and prior releases.

---

**April 12th, 2022**
* **Roulette:**
  * Roulette Settings:
    * **Kill Requirements > Specific Disguises:** Added a "On+" selection. In a few missions, some disguises have variants that are counted as different for Contracts Mode. When "On+" is selected, these are added to the pool for elimination disguise requirements. Currently, the outfits are: VIP Patient (Unmasked Portman) in non-PZ Hokkaido missions, Garbage Man (Undercover) & Gardener (Undercover) in Whittleton Creek missions, and any ICA Agent disguise in Berlin.
* **HITMAN:**
  * **World of Tomorrow:**
    * **Contract Mode Targets:** 2 removed due to differences between HITMAN III and prior releases.
  * **Situs Inversus:**
    * **Contract Mode Targets:** 2 removed due to differences between HITMAN III and prior releases.
* **Other Fixes:**
  * When Mobile browsing, added a sentence mentioning to touch the [INFO] text to display descriptions for settings.
  * Minor style improvement for mobile browsing.

---

**March 19th, 2022**
* **HITMAN:**
  * **The Author & Patient Zero:**
    * **Contracts Mode Targets:** NPC "Jeff" added. Note: He only appears if you've 'saved' him linearly through the Patient Zero Campaign (look up a guide). In the Patient Zero Mission he drops three random weapons, two of which aren't in the mission normally. I would have added these to the Roulette's data, but since they're random each time you start the mission that would be a randomizer on top of a randomizer and could lead to real frustration (if you roll a elimination method that works with the weapons he drops, then congrats).

---

**March 17th, 2022**
* **Roulette:**
  * Select Missions:
    * **Contract Mode Roulette:** Added to The Author and Patient Zero. This is only available within HITMAN III, and I specified as best as I could on the menu, but they are on by default (so note this is you're playing through H1 or H2).
* **HITMAN:**
  * **The Author:**
    * **Contracts Mode Targets:** 83 added. (Includes NPCs reused in other missions on this location)
	* **Photo Objective:** 1 added.
  * **Patient Zero:**
    * **Contracts Mode Targets:** 111 added. (Includes NPCs reused in other missions on this location)
	* **Extra Objective:** 1 added (carryover from Situs Inversus). 1 image updated. Also, "You Know the Number" (based on the in-game Challenge) is now restricted to Mission Mode Roulette due to the virus spread being removed in Contracts Mode. While still possible to Silent Assassin, this could be a very time-consuming Extra Objective, and has been noted in the objective.
* **Other Fixes:**
  * Enabling Contracts Mode Roulette and using the All Locations selection would sometime lock your choices. This has been fixed; only Contract Mode allowed missions will toggle under these conditions.
  * Better clarified some position Intel for Contract Mode Targets in World of Tomorrow and Situs Inversus. Also fixed a misspelled name.
  * Removed a few duplicate Contract Target images.

---

**January 10, 2022**
* **HITMAN:**
  * **Freedom Fighters:**
    * **Contract Mode Targets:** 2 removed due to differences between HITMAN III and prior releases.