//Enjoy looking at the ametuer hack job I've done to this code.

//Creates the object that will be used as a source for the mission objectives
function createContainerObject() {
	container = {};
	
	var missionIndex = document.getElementsByClassName("lvl");
	var missionSelection = [];
	for (var i = 0; i < missionIndex.length; i++) {
		if (missionIndex[i].checked){
			missionSelection.push(missionIndex[i].id);
		}
	}
	var mission_name = missionSelection[Math.floor(Math.random() * missionSelection.length)];
	var failsafe = [fft,ica,showstopper,wot,agc,c27,ff,si,nc,tfl,ths,cag,al,tas,gh,lr,ototw,ditf,ap,eoae,tf,untouchable];
	
	for (var prop in generic)
		if (generic.hasOwnProperty(prop))
			container[prop] = generic[prop];
	
	if(mission_name == null)
		var current_mission = failsafe[Math.floor(Math.random()*failsafe.length)];
	else
		var current_mission = mission_names_map[mission_name];
	
	for (var prop in current_mission)
		if(current_mission.hasOwnProperty(prop))
			container[prop] = current_mission[prop];
	
	// Create a copy to avoid modifying the originals
	container.disguises = current_mission.disguises.slice()
	
	return container
};

//Randomizes extra variables for the result
function createExtrasList(exit, eexit) {
	if(document.getElementById("compslider").value == 0)
		return [];
		
	var extras = [];
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	
	if (Math.random() < 0.50)
		extras.push("No Recordings|Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.");

	if (Math.random() < 0.50 && document.getElementById("firearm").checked == 0)
		extras.push("No Agency Pickup|When planning this mission, refrain from using a hidden stash or agency pickup.");

	if (Math.random() < 0.40)
		extras.push("No Bodies Found|No dead or unconscious bodies may be found. This does not include victims of accidents or poisoning.");

	if (Math.random() < 0.30 && document.getElementById("disguise").checked == 0 && !disguiseExits.includes(exit, eexit) )
		extras.push("No Disguise Changes|Do not change from your starting disguise at any time during the mission.");

	if (Math.random() < 0.25 && document.getElementById("rating").checked == 0)
		extras.push("Rowdy Guns|Every ballistic weapon required elimination must be non-silenced.");

	if (Math.random() < 0.25 && document.getElementById("rating").checked == 0)
		extras.push("No Civilian Casualties|Avoid collateral damage by only eliminating your targets.");

	if (Math.random() < 0.20 && document.getElementById("rating").checked == 0)
		extras.push("Do Not Get Spotted|Avoid anyone seeing you performing any illegal action.");

	if (Math.random() < 0.20 && !koExits.includes(exit, eexit) && document.getElementById("exobj").checked == 0)
		extras.push("No Pacifications|Do not pacify or subdue anyone in any way. This includes using items via melee or throwing.");

	if (Math.random() < 0.20)
		extras.push("Headshots Only|Any shots fired at NPCs must be headshots.");

	if (Math.random() < 0.20 && mode == "MAIN" && document.getElementById("difficulty").checked == 0)
		extras.push("One Save Only|You are allowed to save your mission progress only once.");
	
	if (Math.random() < 0.30)
		extras.push("Perfect Shooter|Do not use firearms as distractions or to destroy objects. All shots must hit an NPC, even if they subsequently pass through the NPC and hit a wall.");

	if (Math.random() < 0.25 && document.getElementById("disguise").checked == 0 && !disguiseExits.includes(exit, eexit) )
		extras.push("One Disguise Change|You are allowed one disguise change while playing the mission.");
	
	return extras;
};

//Returns the list of weapons/accidents from which the kill methods are pulled
function createWeaponList(container) {
	var kills = []
	
	for( var kill_type in killTypesMap )
		if (document.getElementById(kill_type).checked)
			kills = kills.concat(container[killTypesMap[kill_type]]);
	
	var no_methods_selected = !(kills.length > 0);
	if (no_methods_selected)
		for(var i = 0; i < 5; ++i)
			kills.push("Any Method");
	
	// Randomize weapons
	shuffle(kills);
	
	// add Soders-specific kill if relevant. =/
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 1 && document.getElementById("disguise").checked == 1 && !(no_methods_selected)) {
		kills[0] = container.sodersKillsFD[Math.floor(Math.random()*container.sodersKillsFD.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 1 && document.getElementById("disguise").checked == 0 && !(no_methods_selected)) {
		kills[0] = container.sodersKillsF[Math.floor(Math.random()*container.sodersKillsF.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 0 && document.getElementById("disguise").checked == 1 && !(no_methods_selected)) {
		kills[0] = container.sodersKillsD[Math.floor(Math.random()*container.sodersKillsD.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 0 && document.getElementById("disguise").checked == 0 && !(no_methods_selected)) {
		kills[0] = container.sodersKills[Math.floor(Math.random()*container.sodersKills.length)];
	}
	
	return kills;
};

//Create the disguise list
//reads the "entry" field in mission_information
function createDisguiseList(container, mission_information) {
	var disguises = [];
	// Remove "Ninja", "Rave On", and "Any Suit" from potential disguises when starting in an undercover location
	// The first disguise in the list is always the non-undercover one
	var undercover_start = suitStarts.indexOf(mission_information.entry) === -1;
	if (undercover_start)
		container.disguises.splice(0,1);
	
	// For when 'Specific Disguises' is disabed
	if (document.getElementById("disguise").checked)
		disguises =
			container.disguises.slice().map(function(e){ return "" + e; });
	else
		disguises = ["Any Disguise", "Any Disguise", "Any Disguise", "Any Disguise", "Any Disguise"];
	
	shuffle(disguises);
	return disguises;
};

//Chooses targets and kill methods
function createTargetList(container) {
	var targets = [];
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "CONEASY" || mode == "CONHARD") { // Contracts Mode
		var targetAmountCheck = Math.random();
		var num_targets = 5;
		if (targetAmountCheck < 0.84) num_targets--;
		if (targetAmountCheck < 0.69) num_targets--;
		if (targetAmountCheck < 0.39) num_targets--;
		if (targetAmountCheck < 0.04) num_targets--;
		
		shuffle(container.contractTargets);
		targets = container.contractTargets.slice(0, num_targets);
	}
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 1) //One Elusive Target
		targets = ["Elusive Target"];
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 2) //Two Elusive Targets
		targets = ["Elusive Target A","Elusive Target B"];
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 3) //Three Elusive Targets
		targets = ["Elusive Target A","Elusive Target B","Elusive Target C"];
	else if (mode == "MAIN" && container.missionTitle === "Apex Predator") //Shuffle Targets for Apex Predator
		targets = shuffle(container.targetList);
	else {
		targets = container.targetList.slice(); //Default (Unshuffled) Targets 
	};

	return targets;
};

//Adds properties from the container object to the result object
function containerToResult(container) {
	var result = {};
	result.missionTitle = container.missionTitle;
	result.missionLocation = container.missionLocation;
	result.missionCode = container.missionCode;
	result.entry = container.entry[Math.floor(Math.random()*container.entry.length)];
	result.photos = container.photos[Math.floor(Math.random()*container.photos.length)];
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	var exitModeIndex = document.getElementById("startexit");
	var exitMode = exitModeIndex.options[exitModeIndex.selectedIndex].value;
	
	if (result.missionCode == "beach" && (mode == "CONEASY" || mode == "CONHARD")) //Hides exit requirement for Contracts Mode on Nightcall
		result.exit = "Boat";
	else if (exitMode == "SECRET" && mode == "MAIN") //Hides Easter Egg Exits for Contracts Mode
		result.exit = container.eexit[Math.floor(Math.random()*container.eexit.length)];
	else
		result.exit = container.exit[Math.floor(Math.random()*container.exit.length)];
	
	if (mode == "MAIN" && result.missionCode == "virus")
		result.missionobjective = "DNA Specific Virus|Destroy the virus.";
	else if (mode == "MAIN" && result.missionCode == "handoff")
		result.missionobjective = "Virus Sample|Retrieve the virus sample from one of the targets.";
	else if (mode == "MAIN" && result.missionCode == "construction")
		result.missionobjective = "Project Proposal|Aquire documents.";
	else if (mode == "MAIN" && result.missionCode == "spread")
		result.missionobjective = "Eliminate Any Infected|Eliminate anyone who becomes infected. Since the virus spreads through proximity contact, avoid becoming infected yourself. If you become contaminated, find an antidote for yourself within 5 minutes.";
	else if (mode == "MAIN" && result.missionCode == "controller")
		result.missionobjective = "Sigma Operations Files|Retrieve Sigma operations files without getting spotted.";
	else if (mode != "ELUSIVE" && result.missionCode == "biggame")
		result.missionobjective = "The Black Book|Retrieve Reddington's Black Book.";
	else if (mode == "MAIN" && result.missionCode == "suburbs")
		result.missionobjective = "Find Clues|Find clues in and around Whittleton Creek to uncover the connection between Janus and Providence.";
	else if (mode == "MAIN" && result.missionCode == "ark")
		result.missionobjective = "The Constant|Do not eliminate The Constant.";
	else if (mode == "MAIN" && result.missionCode == "bank")
		result.missionobjective = "Obtain Data|Retrieve the data and exit the bank.";
	else if (mode == "MAIN" && result.missionCode == "clue")
		result.missionobjective = "Find The Case File|Find The Case File.";
	else if (mode == "MAIN" && result.missionCode == "archive" && result.entry == "Train Station" )
		result.missionobjective = "Hack Data Core|Eliminate Hush and Imogen Royce to be able to access the files inside the ICA data core.";
	else if (mode == "MAIN" && result.missionCode == "archive" && result.entry != "Train Station" )
		result.missionobjective = "Hack Data Core [Optional]|Eliminate Hush and Imogen Royce to be able to access the files inside the ICA data core.";
	else if (mode == "MAIN" && result.missionCode == "vineyard")
		result.missionobjective = "Do Not Eliminate Diana Burnwood|Do Not Eliminate Diana Burnwood.";
	else if (mode == "MAIN" && result.missionCode == "train")
		result.missionobjective = "Providence Members May Be Eliminated|Providence Members May Be Eliminated.";
	else
		result.missionobjective = "";
	
	if (mode == "CONEASY" || mode == "CONHARD")
		result.objectives = container.contractWild[Math.floor(Math.random()*container.contractWild.length)];
	else
		result.objectives = container.wild[Math.floor(Math.random()*container.wild.length)];
	
	result.mechanicsH1 = mechListH1[Math.floor(Math.random()*mechListH1.length)];
	result.mechanicsH2 = mechListH2[Math.floor(Math.random()*mechListH2.length)];
	result.time = timeList[Math.floor(Math.random()*timeList.length)];
	result.rating = ratingList[Math.floor(Math.random()*ratingList.length)];
	result.difficulty = difficultyList[Math.floor(Math.random()*difficultyList.length)];
	
	return result;
};

//Makes text appear
function writeEverything(result) {
	
	//Location, Mission name, and background image
	//document.documentElement.className = result.missionCode;
	document.body.className = "hide"
	document.getElementById("background").className = result.missionCode;
	document.getElementById("map_place").innerHTML = result.missionLocation;
	document.getElementById("map_place2").innerHTML = result.missionLocation;
	document.getElementById("map_name").innerHTML = result.missionTitle;
	document.getElementById("map_name2").innerHTML = result.missionTitle;
	
	//Start and Exit
	var exitModeIndex = document.getElementById("startexit");
	var exitMode = exitModeIndex.options[exitModeIndex.selectedIndex].value;
	if (exitMode == "BOTH") {
		if (result.missionCode == "club" && result.entry == "Bus Stop") {
			document.getElementById("travel").innerHTML =
				"<div id='entry' class='club-start-BusStop'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>Bus Stop</p></span></div></div><div id='exit' class='club-exit-IntoTheForrest'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Into The Forrest</p></span></div></div>";
			document.getElementById("input_entry").value = "\nStart: Bus Stop";
			document.getElementById("input_exit").value = "\nExit: Into The Forrest";
			document.getElementById("exitreq").innerHTML = "";
			document.getElementById("input_exitreq").value = "";
		}
		else {		
			document.getElementById("travel").innerHTML =
				"<div id='entry' class='" + result.missionCode + "-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></span></div></div>";
			document.getElementById("input_entry").value = "\nStart: " + result.entry;
			document.getElementById("input_exit").value = "\nExit: " + result.exit.split('|')[0];
			if(result.exit.split('|')[1] != null) {
				document.getElementById("exitreq").innerHTML = result.exit.split('|')[1];
				document.getElementById("input_exitreq").value = " " + result.exit.split('|')[1];			
			}
			else {
				document.getElementById("exitreq").innerHTML = "";
				document.getElementById("input_exitreq").value = "";	
			};
		};
	}
	else if (exitMode == "START") {
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='" + result.missionCode + "-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='any-exit'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Any Exit</p></span></div></div>";
		document.getElementById("input_entry").value = "\nStart: " + result.entry;
		document.getElementById("input_exit").value = "";
		document.getElementById("exitreq").innerHTML = "";
		document.getElementById("input_exitreq").value = "";			
	}
	else if (exitMode == "EXIT" || exitMode == "SECRET" ) {
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='any-start'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>Any Entrance</p></span></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_entry").value = "";
		document.getElementById("input_exit").value = "\nExit: " + result.exit.split('|')[0];
		if(result.exit.split('|')[1] != null) {
			document.getElementById("exitreq").innerHTML = result.exit.split('|')[1];
			document.getElementById("input_exitreq").value = " " + result.exit.split('|')[1];			
		}
		else {
			document.getElementById("exitreq").innerHTML = "";
			document.getElementById("input_exitreq").value = "";	
		};			
	}
	else {
		document.getElementById("travel").innerHTML = "";
		document.getElementById("input_entry").value = "";
		document.getElementById("input_exit").value = "";
		document.getElementById("input_exitreq").value = "";
	};
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "CONEASY" || mode == "CONHARD") { var contractmode = " contarget" }
	else if (mode == "MAIN" && result.missionTitle == "Apex Predator") { var contractmode = " contarget" }
	else { var contractmode = "" }
	
	// Write to the HTML elements from the results object
	var MAX_TARGETS = 5, MAX_EXTRAS = document.getElementById("compslider").value;
	for(var i = 0; i < MAX_TARGETS; ++i){ // target setup
		if(i < result.targets.length) {
			document.getElementById("target" + (i+1)).innerHTML =
				"<div id='photo' class='" + result.targets[i].split('|')[0].replace(/\s|,|'|“|”|-|\./g, "") + "-" + result.missionCode + contractmode +
				"'><div id='subplate' class='method'><span><p id='title'>Eliminate using:</p><p id='subtitle-method" + (i+1) + "'></p><p id='subtitle-alt-method" + (i+1) +
				"'></p></span></div><div id='subplate' class='disguise'><span><p id='title'>Wear disguise:</p><p class='subtitle-disguise' id='subtitle-disguise" + (i+1) +
				"'></p></span></div><div id='subplate" + (i+1) + "' class='intel'><span id='inteltoggle" + (i+1) + "'><p id='title'>Intel:</p><p id='wording'>" + result.targets[i].split('|')[1] +
				"</p></span></div><div id='nameplate'><span><p id='title'>Target</p><p id='subtitle'>" + result.targets[i].split('|')[0] + "</p></span></div></div>";
			document.getElementById("input_target" + (i+1)).value = "\nEliminate " + result.targets[i].split('|')[0];
			document.getElementById("input_targetintel" + (i+1)).value = "\n └ Intel: " + result.targets[i].split('|')[1]; // Contracts Mode Target Intel
			document.getElementById("overlay-target-intel" + (i+1)).innerHTML = result.targets[i].split('|')[1];
			if(result.missionCode == "training" && (mode == "MAIN" || mode == "ELUSIVE") && fftfailsafe.includes(result.weapons[i]) ) { // Specific Weapons on ICA Boat 
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Any Method";
			}
			else if(result.missionCode == "training" && (mode == "CONEASY" || mode == "CONHARD") && fftfailsafeContract.includes(result.weapons[i]) ) { // Specific Weapons on ICA Boat Contracts
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Any Method";
			}
			else if(result.missionCode == "test" && icafailsafe.includes(result.weapons[i]) ) { // Specific Weapons on ICA Hanger
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Any Method";
			}
			else if(result.missionCode == "train" && result.weapons[i].split('|')[1] == "Accident" ) {  // Only Accident Kill on Train 
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Dump Off Train";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "Accident";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Dump Off Train (Accident)";
			}
			else if(result.missionCode == "train" && result.weapons[i] === "Explosion") { // Only Explosion Kill on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Fragmentation Grenade";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Fragmentation Grenade";
			}
			else if(result.missionCode == "train" && result.weapons[i] === "Lethal Poison") { // Only Poison Elimination on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Serum";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Serum";
			}
			else if(result.missionCode == "train" && (result.weapons[i] === "Any Sniper Rifle" || result.weapons[i] === "Any Assault Rifle") ) { // No Sniper/Assault on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Pistol";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: Any Pistol";
			}
			else if(result.weapons[i].split('|')[2] != null) { // method subtype hint
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = result.weapons[i].split('|')[1] + " (<a target='_blank' href='./img/general/" + result.weapons[i].split('|')[2] + "'>Hint</a>)";
				document.getElementById("input_weapon" + (i+1)).value = ", using: " + result.weapons[i].split('|')[0] + " (" + result.weapons[i].split('|')[1] + ")";
			}	
			else if(result.weapons[i].split('|')[1] != null) { // method subtype
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = result.weapons[i].split('|')[1];
				document.getElementById("input_weapon" + (i+1)).value = ", using: " + result.weapons[i].split('|')[0] + " (" + result.weapons[i].split('|')[1] + ")";			
			}
			else { // no method subtype
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_weapon" + (i+1)).value = ", using: " + result.weapons[i].split('|')[0];
			};
			
			if(result.missionCode == "speedway" && result.exit.split('|')[0] == "Pale Rider" ) { // pale rider easter egg exit
				document.getElementById("subtitle-disguise" + (i+1)).innerHTML = "Pale Rider";
				document.getElementById("input_disguise" + (i+1)).value = ", while disguised as: Pale Rider";
			}
			else { // disguises
				document.getElementById("subtitle-disguise" + (i+1)).innerHTML = result.disguises[i];
				document.getElementById("input_disguise" + (i+1)).value = ", while disguised as: " + result.disguises[i];
			};
			
			if(result.targets[i].split('|')[1] == null || mode == "CONHARD") { // target intel off
				document.getElementById("subplate" + (i+1)).style.setProperty("background-image", "none", "important");//display none goes here if tall pics required
				document.getElementById("inteltoggle" + (i+1)).style.setProperty("display", "none", "important");//also remove inteltoggle in target generation
				document.getElementById("input_targetintel" + (i+1)).value = "";
				document.getElementById("overlay-target-intel" + (i+1)).innerHTML = "";
				document.getElementById("input_contract").value = "";
			}
			else {
				document.getElementById("input_contract").value = " (Contracts Mode)";
			};
		}
		else { // no more targets
			document.getElementById("target" + (i+1)).innerHTML = "";
			document.getElementById("input_target" + (i+1)).value = "";
			document.getElementById("input_disguise" + (i+1)).value = "";
			document.getElementById("input_weapon" + (i+1)).value = "";
			document.getElementById("input_targetintel" + (i+1)).value = "";
			document.getElementById("overlay-target-intel" + (i+1)).innerHTML = "";
		};
	};
	
	if(result.missionobjective.length) { // campaign mission objective
		document.getElementById("objective").innerHTML = 
			"<div id='obj-image' class='" + result.missionobjective.split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\[|\]|\./g, '') +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.missionobjective.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Objective</p><p id='subtitle'>" + result.missionobjective.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_objective").value = "\nObjective: " + result.missionobjective.split('|')[0] + " - " + result.missionobjective.split('|')[1];
	}
	else {
		document.getElementById("objective").innerHTML = "";
		document.getElementById("input_objective").value = "";
	};
	
	if(document.getElementById("exobj").checked == 1) { // extra mission objective
		document.getElementById("objectivex").innerHTML = 
			"<div id='obj-image' class='" + result.objectives.split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>"  + result.objectives.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Extra Objective <span id='hint'></span></p><p id='subtitle'>"  + result.objectives.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_extraobjective").value = "\nExtra Objective: " + result.objectives.split('|')[0] + " - " + result.objectives.split('|')[1];
		if(result.objectives.split('|')[2] != null) { // extra objective hint
			document.getElementById("hint").innerHTML = "(<a target='_blank' href='./img/general/" + result.objectives.split('|')[2] + "'>Hint</a>)";
		};
		if(mode == "MAIN" && result.missionTitle == "Apex Predator") { // Apex Predator First Target Extra Objective
			document.getElementById("apexwild").innerHTML = result.targets[4].split('|')[0];
		};
	}
	else {
		document.getElementById("objectivex").innerHTML = "";
		document.getElementById("input_extraobjective").value = "";
	};
	
	if(document.getElementById("cameraobj").checked == 1) { // photo objectives for H3
		document.getElementById("camera").innerHTML = 
			"<div id='cam-image' class='" + result.photos.split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>"  + result.photos.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Photo Objective</p><p id='subtitle'>"  + result.photos.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_camera").value = "\nPhoto Objective: " + result.photos.split('|')[0] + " - " + result.photos.split('|')[1];
	}
	else {
		document.getElementById("camera").innerHTML = "";
		document.getElementById("input_camera").value = "";
	};
	
	for(var i = 0; i < MAX_EXTRAS; ++i){ // complications
		if(i < result.extras.length) {
			document.getElementById("complication" + (i+1)).innerHTML = 
				"<div id='comp-image' class='" + result.extras[i].split('|')[0].replace(/\s/g, "") +
				"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.extras[i].split('|')[1] +
				"</p></div><div id='nameplate'><span><p id='title'>Complication</p><p id='subtitle'>" + result.extras[i].split('|')[0] + "</p></span></div></div>";
			document.getElementById("input_complicationt").value = "\n\nComplications:";
			document.getElementById("input_complication" + (i+1)).value = "\n● " + result.extras[i].split('|')[0] + " - " + result.extras[i].split('|')[1];
			document.getElementById("overlay-complication" + (i+1)).innerHTML = result.extras[i].split('|')[0];
		}
		else {
			document.getElementById("complication" + (i+1)).innerHTML = "";
			document.getElementById("input_complication" + (i+1)).value = "";
			document.getElementById("overlay-complication" + (i+1)).innerHTML = "";
		};
	};
	var compcheck = document.getElementById("complication1").innerHTML;
	if(compcheck.length == 0 && document.getElementById("compslider").value > 0) { // failsafe if no complications generated
		document.getElementById("submenu_comp").disabled = false;
		document.getElementById("subsubmenu_comp").disabled = false;
		document.getElementById("complicationi").innerHTML =
			"<div id='comp-image' class='NoRecordings'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.</p></div><div id='nameplate'><span><p id='title'>Complications</p><p id='subtitle'>No Recordings</p></span></div></div>";
		document.getElementById("input_complicationt").value = "\n\nComplications:";
		document.getElementById("input_complicationi").value = "\n● No Recordings - Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.";
		document.getElementById("overlay-complicationi").innerHTML = "No Recordings";
	}
	else if(compcheck.length != 0 && document.getElementById("compslider").value == 0) { // clears pre-generated complications
		document.getElementById("submenu_comp").disabled = true;
		document.getElementById("subsubmenu_comp").disabled = true;
		document.getElementById("complicationi").innerHTML = "";
		document.getElementById("complication1").innerHTML = "";
		document.getElementById("complication2").innerHTML = "";
		document.getElementById("complication3").innerHTML = "";
		document.getElementById("complication4").innerHTML = "";
		document.getElementById("complication5").innerHTML = "";
		document.getElementById("complication6").innerHTML = "";
		document.getElementById("input_complicationt").value = "";
		document.getElementById("input_complicationi").value = "";
		document.getElementById("input_complication1").value = "";
		document.getElementById("input_complication2").value = "";
		document.getElementById("input_complication3").value = "";
		document.getElementById("input_complication4").value = "";
		document.getElementById("input_complication5").value = "";
		document.getElementById("input_complication6").value = "";
		document.getElementById("overlay-complicationi").innerHTML = "";
		document.getElementById("overlay-complication1").innerHTML = "";
		document.getElementById("overlay-complication2").innerHTML = "";
		document.getElementById("overlay-complication3").innerHTML = "";
		document.getElementById("overlay-complication4").innerHTML = "";
		document.getElementById("overlay-complication5").innerHTML = "";
		document.getElementById("overlay-complication6").innerHTML = "";
	}
	else if(compcheck.length == 0){ // no complications
		document.getElementById("submenu_comp").disabled = true;
		document.getElementById("subsubmenu_comp").disabled = true;
		document.getElementById("complicationi").innerHTML = "";
		document.getElementById("input_complicationt").value = "";
		document.getElementById("input_complicationi").value = "";
		document.getElementById("overlay-complicationi").innerHTML = "";
	}
	else { // complications are generated
		document.getElementById("submenu_comp").disabled = false;
		document.getElementById("subsubmenu_comp").disabled = false;
		document.getElementById("complicationi").innerHTML = "";
		document.getElementById("input_complicationt").value = "";
		document.getElementById("input_complicationi").value = "";
		document.getElementById("overlay-complicationi").innerHTML = "";
	};
	
	var mechanicsModeIndex = document.getElementById("mechanics");
	var mechanicsMode = mechanicsModeIndex.options[mechanicsModeIndex.selectedIndex].value;
	if(mechanicsMode == "H2") {
		document.getElementById("restriction").innerHTML =
			"<div id='res-image' class='h2-" + result.mechanicsH2.split('|')[0].replace(/\s|\&/g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.mechanicsH2.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Restriction</p><p id='subtitle'>" + result.mechanicsH2.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_restriction").value = "\n● " + result.mechanicsH2.split('|')[1];
	}
	else if(mechanicsMode == "H1") {
		document.getElementById("restriction").innerHTML =
			"<div id='res-image' class='h1-" + result.mechanicsH1.split('|')[0].replace(/\s|\&/g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.mechanicsH1.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Restriction</p><p id='subtitle'>" + result.mechanicsH1.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_restriction").value = "\n● " + result.mechanicsH1.split('|')[1];
	}
	else {
		document.getElementById("restriction").innerHTML = "";
		document.getElementById("input_restriction").value = "";
	};
	
	if(document.getElementById("time").checked == 1) { // time limit
		document.getElementById("timelimit").innerHTML = 
			"<div id='time-image' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette in under " + result.time +
			" minutes. For accuracy, enable the Mission Timer through the game's Options menu under Gameplay.</p></div><div id='nameplate'><span><p id='title'>Time Limit</p><p id='subtitle'>" + result.time + " Minutes</p></span></div></div>";
		document.getElementById("input_timelimit").value = "\n● Complete the roulette in under " + result.time + " minutes. For accuracy, enable the Mission Timer through the game's Options menu under Gameplay.";
	}
	else {
		document.getElementById("timelimit").innerHTML = "";
		document.getElementById("input_timelimit").value = "";
	};
	
	if(document.getElementById("rating").checked == 1) { // rating requirement
		document.getElementById("ratingget").innerHTML = 
			"<div id='rating-image' class='" + result.rating.split('|')[0].replace(/\s/g, "") + "'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.rating.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Rating</p><p id='subtitle'>" + result.rating.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_rating").value = "\n● " + result.rating.split('|')[1];
	}
	else {
		document.getElementById("ratingget").innerHTML = "";
		document.getElementById("input_rating").value = "";
	};
	
	var difficultyModeIndex = document.getElementById("difficulty");
	var difficultyMode = difficultyModeIndex.options[difficultyModeIndex.selectedIndex].value;
	if(mode != "MAIN") { // no alternate difficulty in contracts mode or elusive targets
		document.getElementById("diffget").innerHTML = "";
		document.getElementById("input_difficulty").value = "";
	}
	else if(difficultyMode == "H2" && !proOnly.includes(result.missionCode)) { // H2 difficulty on maps where available
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-" + result.difficulty + "' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette with the mission's difficulty set to " + result.difficulty +
			".</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>" + result.difficulty + "</p></span></div></div>";
		document.getElementById("input_difficulty").value = "\n● Complete the roulette with the mission's difficulty set to " + result.difficulty + ".";
	}
	else if(difficultyMode == "H1" && !proOnly.includes(result.missionCode) && !h1.includes(result.missionCode)) { // H1 difficulty not available for H1 maps
		document.getElementById("diffget").innerHTML = "";
		document.getElementById("input_difficulty").value = "";
	}
	else if(difficultyMode == "H1" && !proOnly.includes(result.missionCode) && result.difficulty == "Master") { // H1 difficulty on maps where available
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-ProfessionalH1' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette with the mission's difficulty set to Professional.</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>Professional</p></span></div></div>";
		document.getElementById("input_difficulty").value = "\n● Complete the roulette with the mission's difficulty set to Professional.";
	}
	else {
		document.getElementById("diffget").innerHTML = "";
		document.getElementById("input_difficulty").value = "";
	};
	
	var mechcheck = document.getElementById("restriction").innerHTML;
	var timecheck = document.getElementById("timelimit").innerHTML;
	var ratingcheck = document.getElementById("ratingget").innerHTML;
	var diffcheck = document.getElementById("diffget").innerHTML;
	if(mechcheck.length == 0 && timecheck.length == 0 && ratingcheck.length == 0 && diffcheck.length == 0) { // enable/disable challenge menu
		document.getElementById("submenu_chal").disabled = true;
		document.getElementById("subsubmenu_chal").disabled = true;
		/*document.getElementById("challengesi").innerHTML = // prompt to try challenges
			"<div id='chall-image' class='challinfo'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Test your skills by enabling Gameplay Challenges through the Roulette Settings top menu.</p></div><div id='nameplate'><span><p id='title'>Challenges</p><p id='subtitle'>None Enabled</p></span></div></div>";*/
		document.getElementById("input_challengest").value = "";
	}
	else {	
		document.getElementById("submenu_chal").disabled = false;
		document.getElementById("subsubmenu_chal").disabled = false;
		//document.getElementById("challengesi").innerHTML = "";
		document.getElementById("input_challengest").value = "\n\nChallenges:";
	};
	
	/*Variabble Wall used to fill in textarea used to save a roulette*/
	var contracttext = document.getElementById("input_contract").value;
	
	var entrytext = document.getElementById("input_entry").value;
	var exittext = document.getElementById("input_exit").value;
	var exitreqtext = document.getElementById("input_exitreq").value;
	
	var target1text = document.getElementById("input_target1").value;
	var weapon1text = document.getElementById("input_weapon1").value;
	var disguise1text = document.getElementById("input_disguise1").value;
	var targetintel1text = document.getElementById("input_targetintel1").value;
	
	var target2text = document.getElementById("input_target2").value;
	var weapon2text = document.getElementById("input_weapon2").value;
	var disguise2text = document.getElementById("input_disguise2").value;
	var targetintel2text = document.getElementById("input_targetintel2").value;
	
	var target3text = document.getElementById("input_target3").value;
	var weapon3text = document.getElementById("input_weapon3").value;
	var disguise3text = document.getElementById("input_disguise3").value;
	var targetintel3text = document.getElementById("input_targetintel3").value;
	
	var target4text = document.getElementById("input_target4").value;
	var weapon4text = document.getElementById("input_weapon4").value;
	var disguise4text = document.getElementById("input_disguise4").value;
	var targetintel4text = document.getElementById("input_targetintel4").value;
	
	var target5text = document.getElementById("input_target5").value;
	var weapon5text = document.getElementById("input_weapon5").value;
	var disguise5text = document.getElementById("input_disguise5").value;
	var targetintel5text = document.getElementById("input_targetintel5").value;
	
	var objectivetext = document.getElementById("input_objective").value;
	var extraobjectivetext = document.getElementById("input_extraobjective").value;
	
	var complicationttext = document.getElementById("input_complicationt").value;			
	var complicationitext = document.getElementById("input_complicationi").value;
	var complication1text = document.getElementById("input_complication1").value;
	var complication2text = document.getElementById("input_complication2").value;
	var complication3text = document.getElementById("input_complication3").value;
	var complication4text = document.getElementById("input_complication4").value;
	var complication5text = document.getElementById("input_complication5").value;
	var complication6text = document.getElementById("input_complication6").value;
	
	var challengesttext = document.getElementById("input_challengest").value;
	var restrictiontext = document.getElementById("input_restriction").value;
	var timelimittext = document.getElementById("input_timelimit").value;
	var ratingtext = document.getElementById("input_rating").value;
	var difficultytext = document.getElementById("input_difficulty").value;

	document.getElementById('roulettetext').value = "Mission: " + result.missionTitle + contracttext + "\n"
		+ entrytext
		+ target1text + weapon1text + disguise1text
		+ targetintel1text
		+ target2text + weapon2text + disguise2text
		+ targetintel2text
		+ target3text + weapon3text + disguise3text
		+ targetintel3text
		+ target4text + weapon4text + disguise4text
		+ targetintel4text
		+ target5text + weapon5text + disguise5text
		+ targetintel5text
		+ objectivetext
		+ extraobjectivetext
		+ exittext + exitreqtext
		+ complicationttext
		+ complicationitext
		+ complication1text
		+ complication2text
		+ complication3text
		+ complication4text
		+ complication5text
		+ complication6text
		+ challengesttext
		+ restrictiontext
		+ timelimittext
		+ ratingtext
		+ difficultytext;
	
	document.getElementById("saveroulette").disabled = false;
	document.getElementById("subsaveroulette").disabled = false;
	
	
	document.getElementById('overlay-target1').innerHTML = target1text + weapon1text + disguise1text;
	document.getElementById('overlay-target2').innerHTML = target2text + weapon2text + disguise2text;
	document.getElementById('overlay-target3').innerHTML = target3text + weapon3text + disguise3text;
	document.getElementById('overlay-target4').innerHTML = target4text + weapon4text + disguise4text;
	document.getElementById('overlay-target5').innerHTML = target5text + weapon5text + disguise5text;
	//document.getElementById('overlay-objective').innerHTML = objectivetext;
	//document.getElementById('overlay-objectivex').innerHTML = extraobjectivetext;
	document.getElementById('overlay-exit').innerHTML = exittext + exitreqtext;
	//document.getElementById('overlay-complicationi').innerHTML = complicationitext;
	//document.getElementById('overlay-complication1').innerHTML = complication1text;
	//document.getElementById('overlay-complication2').innerHTML = complication2text;
	//document.getElementById('overlay-complication3').innerHTML = complication3text;
	//document.getElementById('overlay-complication4').innerHTML = complication4text;
	//document.getElementById('overlay-complication5').innerHTML = complication5text;
	//document.getElementById('overlay-complication6').innerHTML = complication6text;
	document.getElementById('overlay-challenge_restriction').innerHTML = restrictiontext;
	document.getElementById('overlay-challenge_timelimit').innerHTML = timelimittext;
	document.getElementById('overlay-challenge_rating').innerHTML = ratingtext;
	
};

function generate_result() {
	const current_mission = createContainerObject();
	
	var roulette = containerToResult(current_mission);
	roulette.extras = createExtrasList(roulette.exit);
	roulette.targets = createTargetList(current_mission);
	roulette.weapons = createWeaponList(current_mission);
	roulette.disguises = createDisguiseList(current_mission, roulette);
	
	return roulette;
};

//All the things that should happen when you make it go
function button_MakeItGo(){
	var result = generate_result();
	writeEverything(result);
	history_push(result);
	
	//Hide the intro screen
	document.getElementById("intro").style.setProperty("display", "none", "important");
	document.getElementById("features").style.setProperty("display", "none", "important");
	
	//Hover to scroll long nameplate names
	$(function() {
		$("p[id^='subtitle']").each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	};
}

//adds x to the history stack for a maximum of 20 most recent runs
function history_push(x){
	redo_stack = [];
	history_past.push(x);
	if(history_past.length > 20)
		history_past.shift();
	
	//history exists, enable undobtn
	if(history_past.length > 1) {
		document.getElementById("undobtn").disabled = false;
		document.getElementById("undobtn2").disabled = false;
	}
	// disable redobtn
	document.getElementById("redobtn").disabled = true; document.getElementById("redobtn2").disabled = true;
}


// undo and redo functions, affect global state
function history_undo(){
	if(history_past.length < 2)
		return;
	
	//add the currently displayed result to the redo stack
	redo_stack.push(history_past.pop());
	var previous = history_past[history_past.length - 1];
	writeEverything(previous);
	
	// enable redobtn
	document.getElementById("redobtn").disabled = false;
	document.getElementById("redobtn2").disabled = false;
	//history exists, enable undobtn
	if(history_past.length < 2) {
		document.getElementById("undobtn").disabled = true;
		document.getElementById("undobtn2").disabled = true;
	}
	
	//Hover to scroll long nameplate names
	$(function() {
		$('p#subtitle').each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	};
}

function history_redo(){
	if(redo_stack.length < 1)
		return;
	
	history_past.push(redo_stack.pop());
	var previous = history_past[history_past.length - 1];
	writeEverything(previous);
	
	
	//history exists, enable undobtn
	if(history_past.length > 1) {
		document.getElementById("undobtn").disabled = false;
		document.getElementById("undobtn2").disabled = false;
	}
	// disable redobtn
	if(redo_stack.length < 1) {
		document.getElementById("redobtn").disabled = true;
		document.getElementById("redobtn2").disabled = true;
	}
	
	//Hover to scroll long nameplate names
	$(function() {
		$('p#subtitle').each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	};
}

//Shuffles an array
function shuffle(array) {
  var m = array.length, t, i;
  
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
