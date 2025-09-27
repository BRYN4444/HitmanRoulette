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

Though you can deselect any location you do not own, by default the Roulette selects missions from:
1. - **HITMAN: World of Assassination** (HITMAN III patched) and **HITMAN: World of Assassination Deluxe Pack** (DLC)
   - OR just **HITMAN: World of Assassination Deluxe Edition** (GAME with DLC)
2. **Sarajevo Six Campaign Pack** (DLC)
3. **The Undying Pack** (DLC)
4. **The Disruptor Pack** (DLC currently unavailable)
5. **The Splitter Pack** (DLC)
6. **The Banker Pack** (DLC)
7. **The Bruce Lee Pack** (Limited Time DLC)

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

**September 26th, 2025**
* **Elusive Target:**
  * **#45: The Infiltrator** - New ET added, including 4 overall targets with a 25% change of a unique non-lethal elimination method for each, 1 alternate image Entry point, 6 mission specific extra objectives, and 4 mission specific photo objectives. Note: the Bruce Lee objective is listed last because I don't want to restructure the whole Roulette for this one instance.
  * **#44: The Banker** - Ensured the "Forced Difficulty" Challenge and the "One Save Only" complication no longer appear in this, since the don't work anyway.
* **HITMAN:**
  * **Club 27:** Renamed the "47's Suite" entrance to match in-game. Added a missing Extra Objective image.
* **Other Fixes:**
  * Added the newest Elusive Target DLC to the list in the Compatibility & Issues section.
>**Bug Hunting:** Please make a post [via GitHub](https://github.com/BRYN4444/HitmanRoulette/issues) or in the thread [on Hitman Forum](https://hitmanforum.com/t/13107) if you:
>* Experience any graphical issues while using the Roulette in 4K, or on phones/tablets.
>* Generate impossibilities when using the Roulette with Elusive Targets or past titles HITMAN / HITMAN 2.
>* Have troubles or questions about the Stream Overlay.

---

**June 9th, 2025**
* **Elusive Target:**
  * **#44: The Banker** - New ET added, including 50/50 chance for secondary target, 2 alternate image Entry points, 5 mission specific extra objectives, and 5 mission specific photo objectives.
* **Other Fixes:**
  * Added the newest Elusive Target DLC to the list in the Compatibility & Issues section.

---

**December 17th, 2024**
* **Elusive Target:**
  * **#43: The Splitter** - New ET added, including secondary objective, sole Entry point, 6 mission specific extra objectives, and 2 mission specific photo objectives.
  * **#42: The Disruptor** - Removed the "2024" from the listing of "The Disruptor" Elusive Target (as year markings represent reissues) and renumbered this as the 42nd ET (taking the number used by "The Undying Returns" reissue). Ultimatly this Elusive Target will be changed due to the real world actions of the celebrity used, and will subsequently be updated here too.
* **HITMAN 2:**
  * **Isle of Sgàil:** - Added missing lethal melee weapons for "The Arc Society" and "The Rage".
* **HITMAN III:**
  * **Chongqing:** - Updated the image for the Facility Emergency Exit to remove the clipping in the required dongle key.
* **Other Fixes:**
  * Removed the 2024 listing of "The Undying Returns" Elusive Target, as it is exactly the same as the original listing. See the update for "The Disruptor" above.
  * Restyled the text that appears should you visit the Roulette with javascript disabled, making it actually legible.
  * Added the newest Elusive Target DLC to the list in the Compatibility & Issues section, along with listing "The Disruptor Pack" as unavailable.

---

**July 20th, 2024**
* **Elusive Target:**
  * **#42: The Disruptor (2024)** - Added 1 extra objective and 4 photo objectives.
  
---

**June 27th, 2024**
* **Elusive Target:**
  * **#42: The Disruptor (2024)** - New ET added, including optional objective.
  * Removed a duplicate extra objective listing in several Ark Society ETs (and the standard mission itelf). Didn't impact anything other than imbalancing the odds of rolling it.
* **Other Fixes:**
  * Better clarified what game & DLC combinations and purchases are used by the Roulette in the Compatibility & Issues section. Added the two Elusive Target DLC packs.

---

**March 22nd, 2024**
* **Elusive Target:**
  * **The Undying Returns (2024)** - A new listing since the game presents it as such. The original versions of the ETs, despite how little difference there are between them, remain listed for use with "The Oroborous" Arcade DLC. 
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