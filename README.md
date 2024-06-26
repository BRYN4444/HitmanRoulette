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

Though you can deselect any location you do not own, by default the Roulette selects mission from:
1. - **HITMAN: World of Assassination** (HITMAN III patched) and **HITMAN: World of Assassination Deluxe Pack** (DLC)
   - OR just **HITMAN: World of Assassination Deluxe Edition** (GAME with DLC)
2. **Sarajevo Six Campaign Pack** (DLC)
3. **The Undying Pack** (DLC)
4. **The Disruptor Pack** (DLC)

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

### Latest Update

**June 27th, 2023**
* **Elusive Target:**
  * **#43: The Disruptor (2024)** - New ET added, including optional objective. Mission specific extra/photo objectives will be added once I have more time with this. Fun f
  * Removed a duplicate extra objective listing in several Ark Society ETs (and the standard mission itelf). Didn't impact anything other than imbalancing the odds of rolling it.
* **Other Fixes:**
  * Better clarified what game & DLC combinations and purchases are used by the Roulette in the Compatibility & Issues section. Added the two Elusive Target DLC packs.
>**Bug Hunting:** Please make a post [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or in the thread [on Hitman Forum](https://hitmanforum.com/t/13107) if you:
>* Experience any graphical issues while using the Roulette in 4K, or on phones/tablets.
>* Generate impossibilities when using the Roulette with Elusive Targets or past titles HITMAN / HITMAN 2.
>* Have troubles or questions about the Stream Overlay.

---

**March 22nd, 2023**
* **Elusive Target:**
  * **#42: The Undying Returns (2024)** - A new listing since the game presents it as such. The original versions of the ETs, despite how little difference there are between them, remain listed for use with "The Oroborous" Arcade DLC. 
* **HITMAN:**
  * **Situs Inversus / Hokkaido Snow Festival:**
    * **Contracts Mode:** Updated the name listed for 3 NPCs. At some point they had been given last names.

---

**November 24th, 2023**
* **HITMAN:**
  * **Holiday Hoarders:** 159 Contracts Mode Targets added. Majority of these are from the normal "The Showstopper" mission.
  * **Hokkaido Snow Festival:** 142 Contracts Mode Targets added. Majority of these are from the normal "Situs Inversus" mission.
* **Other Fixes:**
  * Fixed bad cropping on some Contracts Mode Target images in Hokkaido.
  * Fixed a spelling mistake on a Contracts Mode Target used throughout Hokkaido.

---

**October 28th, 2023**
* **Elusive Target:**
  * **#41: The Drop**
    * **Extra Objective:** 6 added.
	* **Photo Objective:** 2 added.
* **HITMAN III:**
  * **Apex Predator:**
    * **Extra Objective:** 1 added. Also applies to "The Liability" and "The Drop" Elusive Targets.
    * **Photo Objective:** 1 added. Also applies to "The Liability" Elusive Target.
* **Other Fixes:**
  * Using a better version of the "Holiday Hoarders" background image without vignetting. Also did another pass on these images when using other Themes.

---

**October 27th, 2023**
* **Elusive Target:**
  * **#41: The Drop** added. One Target and one new disguise. Any Extra/Photo Objectives I can think of will be added shorty, as I play through mission.
* **Other Fixes:**
  * Added a missing disguise to the Elusive Target missions "The Undying" and "The Undying Returns".
  * With Saving new enabled for the Sarajevo Six Campaign Pack (DLC), the "One Save Only" Complication may now appear for these missions. (This will cause conflictions if you're playing the H1 versions, but you can bypass this by enabling the "Force Difficulty" Gameplay Challenge. Even though there is no difficulty options available for the Sarajevo Six, doing this will omit the "One Save Only" Complication completely.)
  * Paris "Holiday Hoarders" got a proper background image, so the one I made for the Roulette has been replaced.
  * Ambrose Island "Shadows in the Water" was not displaying a background image when using the Hitman GOTY Theme. This was due to a filetype error.
  * Disguise variants for the Assassins in Berlin had the potential to appear in "The Liability" Elusive Target when they don't appear during the mission. This is fixed.

---

**August 21th, 2023**
* **Roulette:**
  * **Select Missions:** Grouping toggles will now appear along side their corresponding missions per category. This will make it easier to mass-deselect missions without needing to tab to the primary Mission Groupings section. Desktop only.
* **Other Fixes:**
  * Updated the Select Mission image for the Sarajevo Six to the newer version. Also reworded it as the "Sarajevo Six Campaign" as it is listed in storefronts.
  * Fixed an issue where you on the Dartmoor Garden Show where 4 of the 5 targets would have a disguise requirement listed (when applicable). Now all targets will have one.
  * There is now the possibility for a disguise requirement (when applicable) of the same outfit appearing more than once (one disguise across two targets). Before, due to how the data was parsed, each disguise could only be required once.

---

**August 17th, 2023**
* **Roulette:**
  * **Select Missions:**
    * **Sarajevo Six:** Now in the Roulette rotation by default with their release as DLC for World of Assassination. Updated their images to match their new in-game ones and moved the category above Elusive Targets in the listing.
  * **About & Help:** Updated the compatibility list to include the Sarajevo Six DLC, as well as rewording the listing to mention World of Assassination is just HITMAN III at the latest patch.
* **HITMAN:**
  * **The Director:** Updated target image to match new in-game one.
  * **The Enforcer:** Updated target image to match new in-game one.
  * **The Extractor:** Updated target image to match new in-game one.
  * **The Veteran:** Updated target image to match new in-game one.
  * **The Mercenary:** Updated target image to match new in-game one.
  * **The Controller:** Updated target image and objective to match new in-game ones.
* **Other Fixes:**
  * Fixed a mostly cosmetic issue where the mission icon (top left of the page on Desktop) for Sarajevo Six missions was displaying the standard missions icon instead.
  * Better clarified what missions are DLC when selecting missions. Also, in continuing to cater to all versions of the games, "GOTY" is listed next to missions as a part of the HITMAN Game of the Year Edition, which just comes with H1 access outside of the launch game.
  * Reworded the "World of Assassination" primary toggle. Now that the Sarajevo Six are included, the only mission types that are excluded are Elusive Targets.
  * Fixed two exits in The Extractor not appearing because they were improperly named after a long previous name changes in the data listings.
  * In The Mercenary, the only exit available was the tornado shelter. This was inaccurate as I was confusing the original H1 exit restrictions in Freedom Fighters as applying here too. This is now fixed.
  * Updated the image for the Mr. Raptor Easter Egg Exit in Freedom Fighters & The Mercenary to better convey all the items needed, as it was missing one.
  * Removed the "Car" exit from The Deceivers and The Guru Elusive Targets, as it is not available in those missions. Overlooked mistake.