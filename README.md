![Hitman Roulette](https://raw.githack.com/BRYN4444/HitmanRoulette/master/img/general/logo.png)

Hitman™, Hitman™2, Hitman™III, the Hitman™ logo, music, images, and text are the property of IO Interactive A/S.

Hitman Roulette uses a single cookie to remember your selected theme appearance. By changing the Roulette Appearance under Roulette Settings, you consent to the use of this cookie, which expires in 30 days.

# ABOUT

Hitman Roulette generates a set of random guidelines to follow when playing the HITMAN "World of Assassination" trilogy. It randomizes things such as mission entry and exit points, elimination method and worn disguise, generic and mission specific variables, and even targets for Contracts Mode.

[The original Hitman Roulette](https://thekotti.github.io/about.html) (created by [TheKotti](https://twitter.com/TheKotti))  is a more straight forward version that supports the World of Assassination Trilogy and Hitman: Blood Money.

## How To Use

To initiate a roll of the Roulette, click "Issue Roulette" on the main page. Use the Undo or Redo arrow buttons that appear at the top to move between generated Roulettes. Save your Roulette as a Textfile using the "Export Roulette" button, also shown on the main page.

Most missions from the trilogy are pulled into the Roulette by default. Through the "Select Missions" option, you can untoggle any missions you're missing or just the ones you don't like.

"Roulette Settings" allow you to change what the Roulette surfaces: You can get more than the regular targets by choosing "Contract Mode" as the "Roulette Type". Dial in the difficulty by toggling "Kill Requirements" like disguises or weapons you'll need to wear or use, "Extra Requirements" like one more objective or sets of complications, and "Gameplay Challenges" that force you to change how you play.

To quickly return the Roulette Settings back to default, preform a hard refresh of the page.

## Compatibility & Issues

Though you can deselect any location you do not own, by default the Roulette selects missions from:
1. - **HITMAN: World of Assassination** (HITMAN III patched) and **HITMAN: World of Assassination Deluxe Pack** (DLC)
   - OR **HITMAN: World of Assassination 25th Anniversary Box** (PS5 Limited Edition) and **HITMAN: World of Assassination Deluxe Pack** (DLC)
   - OR just **HITMAN: World of Assassination Deluxe Edition** (GAME with DLC)
   - OR just  **HITMAN: World of Assassination Signature Edition** (GAME with DLC for Switch 2)
2. **Sarajevo Six Campaign Pack** (DLC)
3. **The Undying Pack** (DLC - includes Special Assignment)
4. **The Herbalist Pack** (DLC - includes Special Assignment)
5. **The Host Pack** (DLC - includes Special Assignment)

Optionally, the Roulette can also select missions from:
* **The Disruptor Pack** (DLC Delisted)
* **The Splitter Pack** (DLC)
* **The Banker Pack** (DLC)
* **The Bruce Lee Pack** (Limited Time DLC)
* **The Eminem vs. Slim Shady Pack** (Limited Time DLC)
* **Patient Zero Requiem Pack** (DLC)
* **The Wizard Pack** (DLC)

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

>**Bug Reporting** can be done [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or in the thread [on Hitman Forum](https://hitmanforum.com/t/13107).

**October 31st, 2026**
* **Elusive Target:**
  * **#50: The Host** - Added 1 extra objective.
* **Special Assignments:**
  * **Host Assignment** - Added 1 extra objective.
* **Other Fixes:**
  * The listed year for updates on this page was incorrect and has been fixed. I'm sure I'll make this mistake again...
  * **About** section:
    * Updated to mention that TheKotti's original Hitman Roulette now supports the whole Trilogy too. Not sure when this happened, sorry!

---

**October 30th, 2026**
* **Elusive Target:**
  * **#50: The Host** - New ET added, including: 1 target, 1 objective, 1 Entry point, 3 disguises, 4 extra objectives, and 4 photo objectives.
* **Special Assignments:**
  * **Host Assignment** - Includes unique background image, an additional 2 targets, and a 50% chance (each roll) for yet another additional target. With saving available for Special Assignments, I wanted to feature this missions bonus target pool here instead of the normal ET.
* **Other Fixes:**
  * **Compatibility & Issues** section:
    * Added "The Host Pack" to the default mission selection list.

---

**August 29th, 2026**
* **Hitman Roulette:**
  * Added "H3: Special Assignments" toggle to the Side Missions section when Selecting Missions.
  * Added the "Undying Assignment" and "Herbalist Assignment" Special Assignments to the Side Missions section when Selecting Missions.
* **Elusive Target:**
  * **#27: The Undying** - Added 4 extra objectives and 2 photo objectives. More attention was given now that it can be accessed as a Special Assignment.
  * **#49: The Herbalist** - New ET added, including: 1 target, 1 objective, 1 Entry point, 6 disguises, 9 extra objectives, and 5 photo objectives.
* **Special Assignments:**
  * **Undying Assignment** - Includes unique background image as well as the earlier stated  4 extra objectives and 2 photo objectives.
  * **Herbalist Assignment** - Includes unique background image, 5 additional Entry Points, and 1 additional extra objective.
* **Other Fixes:**
  * Removed difficulty listings for ETs when Force Difficulty is selected in Roulette Settings.
  * **Compatibility & Issues** section:
    * By including/appending Special Assignments to celebrity Elusive Targets, I have move "The Undying Pack" and added "The Herbalist Pack" to the default mission selection list.

---

**June 12th, 2026**
* **Elusive Target:**
  * **#48: The Wizard** - Image of bloody Tim Quinn has been updated to reflect his fixed blood textures.

---

**June 7th, 2026**
* **Elusive Target:**
  * **#48: The Wizard** - There were more changes from The Disruptor than I thought, so a few disguises and extra objectives that existed in regular The Arc Society were removed from listings for The Wizard.

---

**June 6th, 2026**
* **Elusive Target:**
  * **#48: The Wizard** - New ET added, including: 1 target, 1 objective, 2 unique disguises, 1 extra objectives, and 4 photo objectives. The direct image of Quinn will be fixed after they update his bugged blood textures.
  * **#42: The Disruptor** - Since the original ET is still playable if you own the DLC or through PC modding, this ET will also stay accessible here.
* **Hitman III:**
  * **The Farewell** - In Contracts mode, Tim Quinn has been renamed to Tom Twinn. This is likely to change again once the updated Tim Quinn face used in The Wizard Elusive Target replaces them.
* **Other Fixes:**
  * **Compatibility & Issues** section:
    * Added The Wizard Pack to the optional mission DLC list.

---

**February 28th, 2026**
* **Elusive Target:**
  * **#47: The Harbinger** - New ET added, including: 1 target, 1 objective, 1 Arcade exclusive Entry point, sole Exit point, 9 mission specific extra objectives, and 5 mission specific photo objectives.
    * Note: This ET in Elusive Target Arcade has an unlockable Entry Point exclusive to it. Considering more players (non-modded) are likely to replay the ETA than the regular ET, this Entry Point will be pooled with the others on randomization. If you get this Entry Point for your normal ET playthrough: simply disregard or re-roll.
  * **#46: The Reflection** - Added 1 extra objective.
* **Roulette Modes > Stream Overlay:**
  * More concise main objective text will now be displayed instead of the normal length text, which can still be read when clicking the green intel icon when hovering over.
* **Other Fixes:**
  * **Compatibility & Issues** section:
    * Added the 25th Anniversary Box and Signature Edition to the default mission game list.
    * Reworded and separated the DLC list to make it clear that the recent Celebrity Elusive Target DLC packs are not enabled by default.
    * Added the Patient Zero Requiem Pack to the optional mission DLC list.
    * Retracted the "currently unavailable" text from the Limited Time DLCs as they seem to be re-releasing them during ET reactivations, and I don't want to push a minor update every time they do this.

---

**December 7th, 2025**
* **Other Fixes:**
  * The "No Pacifications" Complication will now only activate if both the Specific Disguises Kill Requirement and Force Difficulty Gameplay Challenge are set to "Off".

---

**December 4th, 2025**
* **Elusive Target:**
  * **#46: The Reflection** - New ET added, including 1 target, sole Entry point, sole Exit point (technically), 7 mission specific extra objectives, and 5 mission specific photo objectives.
* **Other Fixes:**
  * Edited the text for the "Elusive Honor" Extra Objective since the Elusive Target Arcade retry time limit was changed. Also added this to the last few Celebrity ETs I forgot to add it to.
  * Added the Elusive Target DLC list in the Compatibility & Issues section to include this new listing and the previous getting delisted.