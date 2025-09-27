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
	var failsafe = [fft,ica,showstopper,wot,agc,c27,ff,si,nc,tfl,ths,cag,al,tas,gh,lr,ototw,ditf,ap,eoae,tf,untouchable,sitw];
	
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
function createExtrasList(exit, missionCode) {
	if(document.getElementById("compslider").value == 0) {
		document.getElementById("submenu_comp").disabled = true;
		document.getElementById("subsubmenu_comp").disabled = true;
		document.getElementById("input_complicationt").value = "";
		return [];
	}
	else {
		document.getElementById("submenu_comp").disabled = false;
		document.getElementById("subsubmenu_comp").disabled = false;
		document.getElementById("input_complicationt").value = "\n\nComplications:";
	}
		
	var extras = [];
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	var disguiseIndex = document.getElementById("disguise");
	var disguise = disguiseIndex.options[disguiseIndex.selectedIndex].value;
	
	if (Math.random() < 0.50)
		extras.push("No Recordings|Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.");

	if (Math.random() < 0.50 && document.getElementById("firearm").checked == 0)
		extras.push("No Agency Pickup|When planning this mission, refrain from using a hidden stash or agency pickup.");

	if (Math.random() < 0.40)
		extras.push("No Bodies Found|No dead or unconscious bodies may be found. This does not include victims of accidents or poisoning.");

	if (Math.random() < 0.30 && disguise == "OFF" && !disguiseExits.includes(exit) ) {
		if (Math.random() < 0.50)
			extras.push("No Disguise Changes|Do not change from your starting disguise at any time during the mission.");
		else
			extras.push("One Disguise Change|You are allowed one disguise change while playing the mission.");
	};

	if (Math.random() < 0.25 && document.getElementById("rating").checked == 0)
		extras.push("Rowdy Guns|Any ballistic weapon used must be non-silenced.");

	if (Math.random() < 0.25 && document.getElementById("rating").checked == 0)
		extras.push("No Civilian Casualties|Avoid collateral damage by only eliminating your targets.");

	if (Math.random() < 0.20 && document.getElementById("rating").checked == 0)
		extras.push("Do Not Get Spotted|Avoid anyone seeing you performing any illegal action.");

	if (Math.random() < 0.30 && !koExits.includes(exit) && document.getElementById("exobj").checked == 0)
		extras.push("No Pacifications|Do not pacify or subdue anyone in any way. This includes using items via melee/throwing, sedating, or tranquilizing.");

	if (Math.random() < 0.25)
		extras.push("No Agility|Do not vault, hang, scale, or climb down.");

	if (Math.random() < 0.20)
		extras.push("Headshots Only|Any shots fired at NPCs must be headshots.");

	if (Math.random() < 0.20 && mode == "MAIN" && document.getElementById("difficulty").selectedIndex == 0 && !noSave.includes(missionCode) )
		extras.push("One Save Only|You are allowed to save your mission progress only once.");
	
	if (Math.random() < 0.30)
		extras.push("Perfect Shooter|Do not use firearms as distractions or to destroy objects. All shots must hit an NPC, even if they subsequently pass through the NPC and hit a wall.");
	
	
	
	if(extras.length == 0) //failsafe
		extras.push("No Recordings|Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.");
	
	return extras.slice(0,document.getElementById("compslider").value); //max is value of slider
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
	var disguiseIndex = document.getElementById("disguise");
	var disguise = disguiseIndex.options[disguiseIndex.selectedIndex].value;
	if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 1 && disguise != "OFF" && !(no_methods_selected)) {
		kills[0] = container.sodersKillsFD[Math.floor(Math.random()*container.sodersKillsFD.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 1 && disguise == "OFF" && !(no_methods_selected)) {
		kills[0] = container.sodersKillsF[Math.floor(Math.random()*container.sodersKillsF.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 0 && disguise != "OFF" && !(no_methods_selected)) {
		kills[0] = container.sodersKillsD[Math.floor(Math.random()*container.sodersKillsD.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && document.getElementById("firearm").checked == 0 && disguise == "OFF" && !(no_methods_selected)) {
		kills[0] = container.sodersKills[Math.floor(Math.random()*container.sodersKills.length)];
	}
	else if (mode == "MAIN" && container.missionTitle === "The Surgeons") {
		kills[0] = container.surgeonsKills[0];
		kills[1] = container.surgeonsKills[1];
	}
	else if (mode == "MAIN" && container.missionTitle === "The Infiltrator") {
		var leeRollies = Math.random();		
		var torney1Rollies = Math.random();
		var torney2Rollies = Math.random();
		var torney3Rollies = Math.random();
		if (leeRollies < 0.25) kills[0] = "Killed by Agent Lee|Target Specific";
		if (torney1Rollies < 0.25) kills[1] = "Lose in the Tournament|Non-Lethal";
		if (torney2Rollies < 0.25) kills[2] = "Lose in the Tournament|Non-Lethal";
		if (torney3Rollies < 0.25) kills[3] = "Lose in the Tournament|Non-Lethal";
	}
	
	return kills;
};

//Create the disguise list
//reads the "entry" field in mission_information
function createDisguiseList(container, mission_information) {
	var disguises = [];
	// Remove "Ninja", "Recon Gear", "Rave On", and "Any Suit" from potential disguises when starting in an undercover location
	// The first disguise in the list is always the non-undercover one
	var undercover_start = suitStarts.indexOf(mission_information.entry) === -1;
	if (undercover_start)
		container.disguises.splice(0,1);
	
	// For when 'Specific Disguises' is disabled
	var disguiseIndex = document.getElementById("disguise");
	var disguise = disguiseIndex.options[disguiseIndex.selectedIndex].value;
	if (disguise == "ON")
		disguises =
			container.disguises.concat(container.disguises).slice().map(function(e){ return "" + e; });
	else if (disguise == "ONPLUS")
		disguises =
			container.disguises.concat(container.disguises,container.disguiseVariants,container.disguiseVariants).slice().map(function(e){ return "" + e; });
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
	var targselectIndex = document.getElementById("targetselect");
	var targselect = targselectIndex.options[targselectIndex.selectedIndex].value;
	var targtypesIndex = document.getElementById("targettypes");
	
	var conSlice = document.getElementById("conslider").value;
	
	if(mode == "CONANY" && targselect == "UNASSIGNED") { // Unassigned Targets
		if (conSlice == 5) {
			targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C","Unassigned Target D","Unassigned Target E"];
		}
		else if (conSlice == 4) {
			targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C","Unassigned Target D"];
		}
		else if (conSlice == 3) {
			targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C"];
		}
		else if (conSlice == 2) {
			targets = ["Unassigned Target A","Unassigned Target B"];
		}
		else if (conSlice == 1) {
			targets = ["Unassigned Target"];
		}
		else {
			var targetAmountCheck = Math.random();
			var num_targets = 5;
			if (targetAmountCheck < 0.84) num_targets--;
			if (targetAmountCheck < 0.69) num_targets--;
			if (targetAmountCheck < 0.39) num_targets--;
			if (targetAmountCheck < 0.04) num_targets--;
			
			if (num_targets == 5) {
				targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C","Unassigned Target D","Unassigned Target E"];
			}
			else if (num_targets == 4) {
				targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C","Unassigned Target D"];
			}
			else if (num_targets == 3) {
				targets = ["Unassigned Target A","Unassigned Target B","Unassigned Target C"];
			}
			else if (num_targets == 2) {
				targets = ["Unassigned Target A","Unassigned Target B"];
			}
			else {
				targets = ["Unassigned Target"];
			}
		};
	} else if(mode == "CONEASY" || mode == "CONHARD") { // Contracts Mode
		if(targselect == "CUSTOM"){ //Custom Target Pool
			var options = targtypesIndex.options, count = 0;
			for (var i=0; i < options.length; i++) {
			  if (options[i].selected) count++; //Tracks the number of Target Pool Types checked
			}
			var chequnique = []; var cheqcivil = []; var cheqstaff = []; var cheqguard = [];
			if(targtypesIndex.options[0].selected) { chequnique = container.contractUnique; }; //UNIQUE
			if(targtypesIndex.options[1].selected && container.contractCivilian.length != 0) {
				cheqcivil = container.contractCivilian; //CIVILIAN
			} else if(count == 1 && targtypesIndex.options[1].selected && container.contractCivilian.length == 0){
				cheqguard = container.contractGuard; //GUARD should CIVILIAN be empty and the only Type checked.
			};
			if(targtypesIndex.options[2].selected && container.contractStaff.length != 0) {
				cheqstaff = container.contractStaff; //STAFF
			} else if(count == 1 && targtypesIndex.options[2].selected && container.contractStaff.length == 0) {
				cheqguard = container.contractGuard; //GUARD should STAFF be empty and the only Type checked.
			};
			if(targtypesIndex.options[3].selected) { cheqguard = container.contractGuard; }; //GUARD
			
			allTargets = chequnique.concat(cheqcivil, cheqstaff, cheqguard);
			
		} else { //Random Target Pool
			var allTargets = container.contractUnique.concat(container.contractCivilian, container.contractStaff, container.contractGuard);
		};
		
		shuffle(allTargets);
		
		if(conSlice == 0) { // Random Target Amount
			var targetAmountCheck = Math.random();
			var num_targets = 5;
			if (targetAmountCheck < 0.84) num_targets--;
			if (targetAmountCheck < 0.69) num_targets--;
			if (targetAmountCheck < 0.39) num_targets--;
			if (targetAmountCheck < 0.04) num_targets--;
			
			targets = allTargets.slice(0, num_targets);
		} else if(conSlice >=1 && allTargets.length < conSlice) { // If Pooled Target Amount is low, Append Any Target at the Amount Needed
			targSubstitutes = container.contractCivilian.concat(container.contractStaff, container.contractGuard);
			targShuff = shuffle(targSubstitutes);
			targNumbo = conSlice - allTargets.length;
			targSafety = targShuff.slice(0, targNumbo);
			
			targets = allTargets.slice(0, conSlice).concat(targSafety);
		} else { // Fixed Target Amount
			targets = allTargets.slice(0, conSlice);
		};
	} else if (mode == "MAIN" && container.missionTitle === "The Banker") { //Oliver as a target is random
		var targetRollies = Math.random();
		if (targetRollies < 0.5) targets = ["Le Chiffre","Oliver Winding|Aquire target from Agent Smith."];
		else targets = ["Le Chiffre"];
	} else if (mode == "MAIN" && container.missionTitle === "Apex Predator") { //Shuffle Targets for Apex Predator
		targets = shuffle(container.targetList);
	} else if (mode == "MAIN" && container.missionTitle === "Dartmoor Garden Show") {//Shuffle Targets for Dartmoor Garden Show Determination Mode
		contestants = shuffle(container.targetContestants).slice(0,3);
		cont1 = contestants.slice(0,1) + "|Level 1 Escalation Target";
		cont2 = contestants.slice(1,2) + "|Level 2 Escalation Target";
		cont3 = contestants.slice(2,3) + "|Level 2 Escalation Target";
		judges = shuffle(container.targetJudges).slice(0,2);
		jud1 = judges.slice(0,1) + "|Level 3 Escalation Target";
		jud2 = judges.slice(1,2) + "|Level 3 Escalation Target";
		targets = [cont1,cont2,cont3,jud1,jud2];
	}
	else {
		targets = container.targetList.slice(); //Default (Unshuffled) Targets 
	};
	
	return targets;
};

//Adds properties from the container object to the result object
function containerToResult(container) {
	var result = {};
	result.missionLocation = container.missionLocation;
	result.missionCode = container.missionCode;
	result.photos = container.photos[Math.floor(Math.random()*container.photos.length)];
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	var exitModeIndex = document.getElementById("startexit");
	var exitMode = exitModeIndex.options[exitModeIndex.selectedIndex].value;
	
	//Changes Iconography For Mission/Contract/Escalation/Sarajevo
	if (container.missionTitle == "The Director" || container.missionTitle == "The Enforcer" || container.missionTitle == "The Extractor" || container.missionTitle == "The Veteran" || container.missionTitle == "The Mercenary" || container.missionTitle == "The Controller") {
		result.type = "on-sj6";
		result.cm = " (Sarajevo Six)";
		result.missionTitle = container.missionTitle;
	}
	else if (container.missionTitle == "The Forger" || container.missionTitle == "The Congressman" || container.missionTitle == "The Prince" || container.missionTitle == "The Sensation" || container.missionTitle == "The Gunrunner" || container.missionTitle == "The Twin" || container.missionTitle == "The Wildcard" || container.missionTitle == "The Broker" || container.missionTitle == "The Black Hat" || container.missionTitle == "The Pharmacist" || container.missionTitle == "The Fixer" || container.missionTitle == "The Identity Thief" || container.missionTitle == "The Ex-Dictator" || container.missionTitle == "The Chef" || container.missionTitle == "The Angel of Death" || container.missionTitle == "The Guru" || container.missionTitle == "The Food Critic" || container.missionTitle == "The Chameleon" || container.missionTitle == "The Blackmailer" || container.missionTitle == "The Warlord" || container.missionTitle == "The Surgeons" || container.missionTitle == "The Bookkeeper" || container.missionTitle == "The Paparazzo" || container.missionTitle == "The Badboy" || container.missionTitle == "The Fugitive" || container.missionTitle == "The Entertainer" || container.missionTitle == "The Undying" || container.missionTitle == "The Revolutionary" || container.missionTitle == "The Appraiser" || container.missionTitle == "The Politician" || container.missionTitle == "The Undying Returns" || container.missionTitle == "The Deceivers" || container.missionTitle == "The Serial Killer" || container.missionTitle == "The Stowaway" || container.missionTitle == "The Collector" || container.missionTitle == "The Iconoclast" || container.missionTitle == "The Liability" || container.missionTitle == "The Heartbreaker" || container.missionTitle == "The Procurers" || container.missionTitle == "The Ascensionist" || container.missionTitle == "The Rage") {
		result.type = "on-elu";
		result.cm = " (Elusive Target)";
		result.missionTitle = container.missionTitle;
	}
	else if((mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") && (container.missionTitle == "Freeform Training" || container.missionTitle == "The Author" || container.missionTitle == "Patient Zero") ) {
		result.type = "on-con";
		result.cm = " (H3 Contracts Mode)";
		result.missionTitle = container.missionTitle;
	}
	else if (mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") {
		result.type = "on-con";
		result.cm = " (Contracts Mode)";
		result.missionTitle = container.missionTitle;
	}
	else if (container.missionTitle == "Dartmoor Garden Show") {
		result.type = "on-esc";
		result.cm = " (Escalation)";
		result.missionTitle = container.missionTitle;
	}
	else {
		result.type = "on";
		result.cm = "";
		result.missionTitle = container.missionTitle;
	};
	
	//Determine Start/Exit
	//document.getElementById("exsecret").checked == 1
	if (exitMode == "BOTH" || exitMode == "START") {
		if (result.missionCode == "gardenshow" && mode != "MAIN") { //Force Entrance DGS on Contracts Mode
			result.entry = "Garden Show Entrance";
		} else {
			result.entry = container.entry[Math.floor(Math.random()*container.entry.length)];
		};
	} else {
		result.entry = "Any Starting Location";
	};
	
	if (exitMode == "BOTH" || exitMode == "EXIT") {
		if (result.missionCode == "beach" && mode != "MAIN") { //Hides exit requirement for Nightcall Contracts Mode
			result.exit = "Boat";
		} else if ( document.getElementById("exsecret").checked == 1 && (container.eexit.length >= 1) ) { //Easter Egg Exits
			var exa = container.exit; var exb = container.eexit;
			var exc = exa.concat(exb);
			var exal = container.exit.length; var exbl = container.eexit.length;
			var excl = exal+exbl;
			result.exit = exc[Math.floor(Math.random()*excl)];
		} else { //Regular Exits
			result.exit = container.exit[Math.floor(Math.random()*container.exit.length)];
		};
	} else {
		result.exit = "Any Exit Location";
	};
		
	if (mode == "MAIN" && result.missionCode == "virus")
		result.missionobjective = "DNA Specific Virus|Destroy the virus.|Destroy the DNA Specific Virus";
	else if (mode == "MAIN" && result.missionCode == "handoff")
		result.missionobjective = "Virus Sample|Retrieve the virus sample from one of the targets.|Retrieve the Virus Sample";
	else if (mode == "MAIN" && result.missionCode == "construction")
		result.missionobjective = "Project Proposal|Aquire documents.|Aquire the Project Proposal documents";
	else if (mode == "MAIN" && result.missionCode == "spread")
		result.missionobjective = "Infected|Eliminate all infected. The virus spreads through proximity contact. If you become contaminated, find and inject the vaccine within 5 minutes.|Eliminate All Infected";
	else if (mode == "MAIN" && result.missionCode == "controller")
		result.missionobjective = "Sigma Operations Files|Retrieve Sigma operations files without getting spotted.|Retrieve Sigma operations files without getting spotted";
	else if (mode == "MAIN" && result.missionCode == "biggame")
		result.missionobjective = "The Black Book|Retrieve Reddington's Black Book.|Retrieve Reddington's Black Book";
	else if (mode == "MAIN" && result.missionCode == "suburbs")
		result.missionobjective = "Find Clues|Find clues in and around Whittleton Creek to uncover the connection between Janus and Providence.|Find Clues";
	else if (mode == "MAIN" && result.missionCode == "ark")
		result.missionobjective = "The Constant|Do not eliminate The Constant.|Do not eliminate The Constant";
	else if (mode == "MAIN" && result.missionCode == "bank")
		result.missionobjective = "Obtain Data|Retrieve the vault Data Core or the three Backup Data Disks and exit the bank.|Retrieve vault Data Core or 3 Backup Data Disks";
	else if (mode == "MAIN" && result.missionCode == "clue")
		result.missionobjective = "Find The Case File|Find The Case File.|Find The Case File";
	else if (mode == "MAIN" && result.missionCode == "archive" && result.entry == "Train Station" )
		result.missionobjective = "Hack Data Core|Eliminate Hush and Imogen Royce to be able to access the files inside the ICA data core.|Hack Data Core";
	else if (mode == "MAIN" && result.missionCode == "archive" && result.entry != "Train Station" )
		result.missionobjective = "Hack Data Core [Optional]|Eliminate Hush and Imogen Royce to be able to access the files inside the ICA data core.|Hack Data Core [Optional]";
	else if (mode == "MAIN" && result.missionCode == "vineyard")
		result.missionobjective = "Do Not Eliminate Diana Burnwood|Do Not Eliminate Diana Burnwood.|Do Not Eliminate Diana Burnwood";
	else if (mode == "MAIN" && result.missionCode == "train")
		result.missionobjective = "Providence Members May Be Eliminated|Providence Members May Be Eliminated.|Providence Members May Be Eliminated";
	else if (mode == "MAIN" && result.missionCode == "pirates")
		result.missionobjective = "Neutralize the Satellite Control Unit|Destroy control unit or obtain the two uplink access keys.|Destroy control unit or obtain 2 uplink access keys";	
	else if (mode == "MAIN" && result.missionCode == "fashion-broker")
		result.missionobjective = "Retrieve the Ivory White|Retrieve the Ivory White.|Retrieve the Ivory White";	
	else if (mode == "MAIN" && result.missionCode == "tension-fixer")
		result.missionobjective = "Track the Courier & Retrieve The Diamonds|Track the courier to retrieve the diamonds.|Track the Courier & Retrieve The Diamonds";	
	else if (mode == "MAIN" && result.missionCode == "terrorists-chameleon")
		result.missionobjective = "Uncover the militia operation|In addition to eliminating the Target, the client requests that you locate any information detailing the militia operation in which the Target will be participating.|Uncover the militia operation";	
	else if (mode == "MAIN" && result.missionCode == "fashion-blackmailer")
		result.missionobjective = "Retrieve the Memory Stick|The target keeps the originals of all his blackmail material with him at all times, on a memory stick. The Client requests that you retrieve it once you have eliminated the Target.|Retrieve the memory stick";	
	else if (mode == "MAIN" && result.missionCode == "birthday-warlord")
		result.missionobjective = "Retrieve Files|The client requests that you retrieve any files and data pertaining to the target's activities and network in West and Southern Africa.|Retrieve the files";	
	else if (mode == "MAIN" && result.missionCode == "terrorists-bookkeeper")
		result.missionobjective = "Steal the Ledger|Steal the ledger.|Steal the ledger";	
	else if (mode == "MAIN" && result.missionCode == "construction-entertainer")
		result.missionobjective = "Retrieve Soirée Horrible Guestlist|Retrieve Soirée Horrible guestlist.|Retrieve Soirée Horrible guestlist";	
	else if (mode == "MAIN" && result.missionCode == "ark-appraiser")
		result.missionobjective = "Retrieve the Notebook|Retrieve Miranda Jamison's Notebook that contains information on Ark Society members' art purchases and preferences.|Retrieve the Notebook";
	else if (mode == "MAIN" && result.missionCode == "ark-stowaway")
		result.missionobjective = "Retrieve the Dictaphone|Retrieve Jimmy Chen's dictaphone.|Retrieve Jimmy Chen's dictaphone";
	else if (mode == "MAIN" && result.missionCode == "ark-disruptor")
		result.missionobjective = "Do Not Eliminate Tim Quinn [Optional]|It is imperative for the client that Tim Quinn survives the fight.|Ensure Tim Quinn survives the fight";
	else if (mode == "MAIN" && result.missionCode == "clue-collector")
		result.missionobjective = "Retrieve the Painting [Optional]|The client offers a bonus if you manage to find and retrieve the painting by Sisal Bardu.|Retrieve the painting [Optional]";
	else if (mode == "MAIN" && result.missionCode == "club-liability")
		result.missionobjective = "[Optional] Do Not Eliminate The Guide|The clients would prefer that Chesterfield's guide does not become collateral damage.|[Optional] Do Not Eliminate the Guide";
	else if (mode == "MAIN" && result.missionCode == "archive-splitter")
		result.missionobjective = "Eliminate Clones|The ICA board has greenlit additional mission objectives. All of Max Valliant's clones must be eliminated.|Eliminate Clones";
	else if (mode == "MAIN" && result.missionCode == "birthday-infiltrator")
		result.missionobjective = "Ensure Agent Lee Wins The Tournament|Agent Lee must win the tournament to infiltrate Concord Union.|Lee Must Win The Tournament";	
	else
		result.missionobjective = "";

	//Extra Objectives aka "Wildcards"
	var wildcard = container.wild; // Can be completed Suit Only, No Knockouts, Silent Assassin.
	var missionwild = container.missionWild; // Can only be completed on specific missions; No Contracts Mode.
	var compwild = container.compWild; // Can only be completed without Complications enabled; Asks for Knockouts or Disguise Changes.
	if ((mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") && (document.getElementById("compslider").value == 1 || document.getElementById("rating").checked == 1)) // Contract Mode & Complications/Rating
		result.objectives = wildcard[Math.floor(Math.random()*wildcard.length)];
	else if (!(mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") && (document.getElementById("compslider").value == 1 || document.getElementById("rating").checked == 1)) // Complications/Rating without Contract Mode
		result.objectives = wildcard.concat(missionwild)[Math.floor(Math.random()*wildcard.concat(missionwild).length)];
	else if ((mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") && document.getElementById("compslider").value == 0 && document.getElementById("rating").checked == 0) // Contract Mode without Complications/Rating
		result.objectives = wildcard.concat(compwild)[Math.floor(Math.random()*wildcard.concat(compwild).length)];
	else // Default Extra Objectives (All)
		result.objectives = wildcard.concat(missionwild, compwild)[Math.floor(Math.random()*wildcard.concat(missionwild, compwild).length)];

	result.mechanicsH1 = mechListH1[Math.floor(Math.random()*mechListH1.length)];
	result.mechanicsH2 = mechListH2[Math.floor(Math.random()*mechListH2.length)];
	result.time = timeList[Math.floor(Math.random()*timeList.length)];
	result.rating = ratingList[Math.floor(Math.random()*ratingList.length)];
	
	var difficultyModeIndex = document.getElementById("difficulty");
	var difficultyMode = difficultyModeIndex.options[difficultyModeIndex.selectedIndex].value;
	if (difficultyMode == "H1")
		result.difficulty = difficultyH1[Math.floor(Math.random()*difficultyH1.length)];
	else
		result.difficulty = difficultyH2[Math.floor(Math.random()*difficultyH2.length)];
	
	return result;
};

//Makes text appear
function writeEverything(result) {
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	
	//Location, Mission name, and background image
	document.body.className = "hide"
	document.getElementById("background").className = result.missionCode;
	document.getElementById("input_mission").value = result.missionCode;
	document.getElementById("map_place").innerHTML = result.missionLocation + result.cm;
	document.getElementById("map").className = result.type;
	document.getElementById("map_name").innerHTML = result.missionTitle;
	
	//Start and Exit
	var exitModeIndex = document.getElementById("startexit");
	var exitMode = exitModeIndex.options[exitModeIndex.selectedIndex].value;
	var difficultyModeIndex = document.getElementById("difficulty");
	var difficultyMode = difficultyModeIndex.options[difficultyModeIndex.selectedIndex].value;

	if (exitMode == "OFF") {
		document.getElementById("travel").innerHTML = "";
		document.getElementById("input_entry").value = "";
		document.getElementById("input_exit").value = "|";
	} else if (exitMode != "EXIT" && result.missionCode == "virus" && result.objectives.split('|')[0] == "Safe House Bugged" && document.getElementById("exobj").checked == 1) { // Sapienza - Force Entrance If Safehouse Bugged Extra Objective is Active
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='virus-start-MainSquare'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>Main Square</p></span></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_entry").value = "Main Square";
		if(result.exit.split('|')[1] != null) {
			document.getElementById("input_exit").value = result.exit.split('|')[0] + "|" + result.exit.split('|')[1];
			document.getElementById("exitreq").innerHTML = result.exit.split('|')[1];		
		}
		else {
			document.getElementById("input_exit").value = "|";	
			document.getElementById("exitreq").innerHTML = "";
		};
	} else if (result.missionCode == "birthday" && result.exit.split('|')[0] == "Speedboat" && difficultyMode == "H1") { // Bangkok - Key Needed for Speedboat Exit on H1 Professional 
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='birthday-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='birthday-exit-SpeedboatH1'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'>(Needs Key on Pro.)</span></p><p id='subtitle'>Speedboat</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Speedboat|(Needs Key on Professional)";
		document.getElementById("exitreq").innerHTML = "(Needs Key on Pro.)";
	} else if (result.missionCode == "speedway" && result.exit.split('|')[0] == "Pale Rider" && mode != "MAIN") { // Miami - Pale Rider Exit Disabled outside Mission Mode
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='speedway-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='speedway-exit-Ambulance'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'>(Medic Only)</span></p><p id='subtitle'>Ambulance</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Ambulance|(Medic Only)";
		document.getElementById("exitreq").innerHTML = "(Medic Only)";
	} else if (result.missionCode == "ark" && result.exit.split('|')[0] == "Swan Dive" && mode != "MAIN") { // Sgail - Swan Dive Exit Disabled outside Mission Mode
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='ark-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='ark-exit-EastWall'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>East Wall</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "East Wall|";
		document.getElementById("exitreq").innerHTML = "";
	} else if (result.missionCode == "resort" && result.exit.split('|')[0] == "Dundee" && document.getElementById("firearm").checked == 1) { // Haven - Dundee Exit Disabled when Specific Firearms Active (Loud Gun & SA conflict)
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='resort-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='resort-exit-Dinghy'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Dinghy</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Dinghy|";
		document.getElementById("exitreq").innerHTML = "";
	} else if (exitMode != "START" && result.missionCode == "club" && result.entry == "Bus Stop" && mode == "MAIN") { //Berlin - Bus Entrance Forces Exit in Mission Mode 
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='club-start-BusStop'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>Bus Stop</p></span></div></div><div id='exit' class='club-exit-IntoTheForrest'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Into The Forrest</p></span></div></div>";
		document.getElementById("input_entry").value = "Bus Stop";
		document.getElementById("input_exit").value = "Into The Forrest|";
		document.getElementById("exitreq").innerHTML = "";		
	} else if (result.missionCode == "club" && result.exit.split('|')[0] == "UFO" && mode != "MAIN") { // Berlin - UFO Exit Disabled outside Mission Mode
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='club-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='club-exit-Bicycle'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Bicycle</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Bicycle|";
		document.getElementById("exitreq").innerHTML = "";
	} else if (result.missionCode == "festival" && result.entry == "Tobias Rieper's Suite") { // Hokkaido Snow Festival - Tobias Rieper's Suite works in H3 only
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='festival-start-TobiasRiepersSuite'><div id='nameplate'><span><p id='title'>Starting Location (H2: Restaurant)</p><p id='subtitle'>Tobias Rieper's Suite</p></span></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_entry").value = "Tobias Rieper's Suite (H2: Restaurant)";
		if (result.exit == "Any Exit Location") {
			document.getElementById("input_exit").value = "";
			document.getElementById("exitreq").innerHTML = "";	
		} else {
			if(result.exit.split('|')[1] != null) {
				document.getElementById("input_exit").value = result.exit.split('|')[0] + "|" + result.exit.split('|')[1];
				document.getElementById("exitreq").innerHTML = result.exit.split('|')[1];		
			}
			else {
				document.getElementById("input_exit").value = result.exit.split('|')[0] + "|";
				document.getElementById("exitreq").innerHTML = "";
			};
		};
	} else if (result.missionCode == "vineyard" && result.exit == "Tango With Diana" && mode != "MAIN") { // Mendoza - Tango Exit Disabled outside Mission Mode
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='vineyard-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='vineyard-exit-ThroughTheGrapefields'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Through The Grapefields</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Through The Grapefields|";
		document.getElementById("exitreq").innerHTML = "";
	} else if (result.missionCode == "vineyard" && result.exit.split('|')[0] == "Shrine" && (result.entry == "Winery Viewpoint" || result.entry == "Parking Lot" || result.entry == "Shrine" || result.entry == "Any Starting Location")) { // Mendoza - Shrine Exit: Ask Player to Equip Requiem Suit
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='vineyard-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location (Equip Requiem Suit)</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='vineyard-exit-Shrine'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'>(Requiem Suit Only)</span></p><p id='subtitle'>Shrine</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry + " (Equip Requiem Suit)";
		document.getElementById("input_exit").value = "Shrine|(Requiem Suit Only)";
		document.getElementById("exitreq").innerHTML = "(Requiem Suit Only)";
	} else if (result.missionCode == "vineyard" && result.exit.split('|')[0] == "Shrine" && !(result.entry == "Winery Viewpoint" || result.entry == "Parking Lot" || result.entry == "Shrine")) { // Mendoza - Shrine Exit Disabled with Disguise Entrances
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='vineyard-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='vineyard-exit-ThroughTheGrapefields'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Through The Grapefields</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Through The Grapefields|";
		document.getElementById("exitreq").innerHTML = "";
	} else if (result.missionCode == "pirates" && (result.exit.split('|')[0] == "Helicopter (Beach)" || result.exit.split('|')[0] == "Helicopter (Bridge)") && mode != "MAIN") { // Ambrose - Helicopter Exits Unavailable outside Mission Mode
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='pirates-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='pirates-exit-WesternBeachBoat'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>Western Beach Boat</p></span></div></div>";
		document.getElementById("input_entry").value = result.entry;
		document.getElementById("input_exit").value = "Western Beach Boat|";
		document.getElementById("exitreq").innerHTML = "";
	} else {		
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='" + result.missionCode + "-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></span></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><span><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></span></div></div>";
		if (result.entry == "Any Starting Location") {
			document.getElementById("input_entry").value = "";
		} else {
			document.getElementById("input_entry").value = result.entry;
		};
		if (result.exit == "Any Exit Location") {
			document.getElementById("input_exit").value = "";
			document.getElementById("exitreq").innerHTML = "";	
		} else {
			if(result.exit.split('|')[1] != null) {
				document.getElementById("input_exit").value = result.exit.split('|')[0] + "|" + result.exit.split('|')[1];
				document.getElementById("exitreq").innerHTML = result.exit.split('|')[1];		
			}
			else {
				document.getElementById("input_exit").value = result.exit.split('|')[0] + "|";
				document.getElementById("exitreq").innerHTML = "";
			};
		};
	};
	
	// Display Contracts Mode Target Images in Tall Format regardless of Theme
	if (mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") {
		var contractmode = " contarget";
		document.getElementById("contarget").value = " contarget";
	} else { var contractmode = ""; document.getElementById("contarget").value = ""; }
	
	// Masked Conditions
	if (document.getElementById("mask").checked == 1) { var maskedconditions = "mask" }
	else { var maskedconditions = "" }
	
	// Write to the HTML elements from the results object
	//var MAX_TARGETS = 5;
	for(var i = 0; i < 5; ++i){ // target setup
		if(i < result.targets.length) {
			document.getElementById("target" + (i+1)).innerHTML =
				"<div id='photo' class='" + result.targets[i].split('|')[0].replace(/\s|,|'|“|”|-|\./g, "") + "-" + result.missionCode + contractmode +
				"'><div id='subplate' class='method'><span class='" + maskedconditions + "'><p id='title'>Eliminate using:</p><p id='subtitle-method" + (i+1) + "'></p><p id='subtitle-alt-method" + (i+1) +
				"'></p></span></div><div id='subplate' class='disguise'><span class='" + maskedconditions + "'><p id='title'>Wear disguise:</p><p class='subtitle-disguise' id='subtitle-disguise" + (i+1) +
				"'></p></span></div><div id='subplate" + (i+1) + "' class='intel'><span id='inteltoggle" + (i+1) + "'><p id='title'>Intel:</p><p id='wording'>" + result.targets[i].split('|')[1] +
				"</p></span></div><div id='nameplate'><span><p id='title'>Target</p><p id='subtitle'>" + result.targets[i].split('|')[0] + "</p></span></div></div>";
			document.getElementById("input_contract").value = result.cm;
			document.getElementById("input_target" + (i+1)).value = result.targets[i].split('|')[0];
			if(result.missionCode == "training" && mode == "MAIN" && fftfailsafe.includes(result.weapons[i]) ) { // Specific Weapons on ICA Boat 
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Any Method||";
			}
			else if(result.missionCode == "training" && (mode == "CONEASY" || mode == "CONHARD" || mode == "CONANY") && fftfailsafeContract.includes(result.weapons[i]) ) { // Specific Weapons on ICA Boat Contracts
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Any Method||";
			}
			else if(result.missionCode == "test" && icafailsafe.includes(result.weapons[i]) ) { // Specific Weapons on ICA Hanger
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Method";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Any Method||";
			}
			else if(result.missionCode == "train" && (result.weapons[i].split('|')[0] == "Accident" || result.weapons[i].split('|')[1] == "Accident") ) {  // Only Accident Kill on Train 
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Dump Off Train";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "Accident";
				document.getElementById("input_method" + (i+1)).value = "Dump Off Train|Accident|";
			}
			else if(result.missionCode == "train" && result.weapons[i] === "Explosion") { // Only Explosion Kill on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Fragmentation Grenade";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Fragmentation Grenade||";
			}
			else if(result.missionCode == "train" && result.weapons[i] === "Lethal Poison") { // Only Poison Elimination on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Serum";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Serum||";
			}
			else if(result.missionCode == "train" && (result.weapons[i] === "Any Sniper Rifle" || result.weapons[i] === "Any Assault Rifle") ) { // No Sniper/Assault on Train
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Any Pistol";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = "Any Pistol||";
			}
			else if(document.getElementById("mtype").checked == 0 && result.weapons[i].split('|')[0] == "Xmas Star"){ // Holiday Hoarders Xmas Star Disable Forced Melee Elimination Methods
				document.getElementById("subtitle-method" + (i+1)).innerHTML = "Xmas Star";
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "[Any Weapon in Hitman 1]";
				document.getElementById("input_method" + (i+1)).value = "Xmas Star||Any Weapon in Hitman 1";
			}
			else if(result.weapons[i].split('|')[2] != null && document.getElementById("mtype").checked == 0 ){ // No Hints & Forced Melee Elimination Methods
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "(<a target='_blank' href='./img/general/" + result.weapons[i].split('|')[2] + "'>Hint</a>)";
				document.getElementById("input_method" + (i+1)).value = result.weapons[i].split('|')[0] + "||Secret To Acquire";
			}
			else if(document.getElementById("mtype").checked == 0 && !submethodbypass.includes(result.weapons[i]) ){ // Disable Forced Melee Elimination Methods
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = result.weapons[i].split('|')[0] + "||";
			}
			else if(result.weapons[i].split('|')[2] != null) { // method subtype hint
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = result.weapons[i].split('|')[1] + " (<a target='_blank' href='./img/general/" + result.weapons[i].split('|')[2] + "'>Hint</a>)";
				document.getElementById("input_method" + (i+1)).value = result.weapons[i].split('|')[0] + "|" + result.weapons[i].split('|')[1] + "|Secret to Aquire";
			}	
			else if(result.weapons[i].split('|')[1] != null) { // method subtype
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = result.weapons[i].split('|')[1];
				document.getElementById("input_method" + (i+1)).value = result.weapons[i].split('|')[0] + "|" + result.weapons[i].split('|')[1] + "|";	
			}
			else { // no method subtype
				document.getElementById("subtitle-method" + (i+1)).innerHTML = result.weapons[i].split('|')[0];
				document.getElementById("subtitle-alt-method" + (i+1)).innerHTML = "";
				document.getElementById("input_method" + (i+1)).value = result.weapons[i].split('|')[0] + "||";
			};
			
			if(result.missionCode == "speedway" && mode == "MAIN" && result.exit.split('|')[0] == "Pale Rider" ) { // pale rider easter egg exit
				document.getElementById("subtitle-disguise" + (i+1)).innerHTML = "Pale Rider";
				document.getElementById("input_disguise" + (i+1)).value = "Pale Rider";
			}
			else { // disguises
				document.getElementById("subtitle-disguise" + (i+1)).innerHTML = result.disguises[i];
				document.getElementById("input_disguise" + (i+1)).value = result.disguises[i];
			};
			
			if(result.targets[i].split('|')[1] == null || mode == "CONHARD") { // Contracts Mode Target Intel Input
				document.getElementById("subplate" + (i+1)).style.setProperty("background-image", "none", "important");//hides intel icon when not needed
				document.getElementById("inteltoggle" + (i+1)).style.setProperty("display", "none", "important");//also remove inteltoggle in target generation
				document.getElementById("input_intel" + (i+1)).value = "";
			}
			else {
				document.getElementById("input_intel" + (i+1)).value = result.targets[i].split('|')[1];
			};
		}
		else { // no more targets
			document.getElementById("target" + (i+1)).innerHTML = "";
			document.getElementById("input_target" + (i+1)).value = "";
			document.getElementById("input_method" + (i+1)).value = "";
			document.getElementById("input_disguise" + (i+1)).value = "";
			document.getElementById("input_intel" + (i+1)).value = "";
		};
	};
	
	if(result.missionobjective.length) { // campaign mission objective
		document.getElementById("objective").innerHTML = 
			"<div id='obj-image' class='" + result.missionobjective.split('|')[0].replace(/\s|:|,|'|“|”|-|\&|\?|\!|\(|\)|\[|\]|\./g, '') +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.missionobjective.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Objective</p><p id='subtitle'>" + result.missionobjective.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_objective").value = result.missionobjective;
	}
	else {
		document.getElementById("objective").innerHTML = "";
		document.getElementById("input_objective").value = "";
	};
	
	if(document.getElementById("exobj").checked == 1) { // extra mission objective
		document.getElementById("objectivex").innerHTML = 
			"<div id='obj-image' class='" + result.objectives.split('|')[0].replace(/\s|:|,|'|“|”|-|\?|\!|\(|\)|\./g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>"  + result.objectives.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Extra Objective <span id='hint'></span></p><p id='subtitle'>"  + result.objectives.split('|')[0] + "</p></span></div></div>";
		if(mode == "MAIN" && result.missionTitle == "Apex Predator" && result.objectives.split('|')[0] == "Order of Operations") { // Apex Predator missionWild Extra Objective	
			document.getElementById("input_extraobjective").value = "Order of Operations|Take out " + result.targets[4].split('|')[0] + " before any other ICA Agent.";
			document.getElementById("apexwild").innerHTML = result.targets[4].split('|')[0];
		} else {
			document.getElementById("input_extraobjective").value = result.objectives.split('|')[0] + "|" + result.objectives.split('|')[1];
		}
		if(result.objectives.split('|')[3] != null) { // extra objective hint
			document.getElementById("hint").innerHTML = "(<a target='_blank' href='./img/general/" + result.objectives.split('|')[3] + "'>Hint</a>)";
		};
	}
	else {
		document.getElementById("objectivex").innerHTML = "";
		document.getElementById("input_extraobjective").value = "";
	};
	
	if(document.getElementById("cameraobj").checked == 1 && !(result.missionCode == "training" || result.missionCode == "test") ) { // photo objectives unavailable in ica facility
		document.getElementById("camera").innerHTML = 
			"<div id='cam-image' class='" + result.photos.split('|')[0].replace(/\s|:|,|'|“|”|-|\?|\!|\:|\(|\)|\./g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>"  + result.photos.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Photo Objective</p><p id='subtitle'>"  + result.photos.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_camera").value = result.photos;
	}
	else {
		document.getElementById("camera").innerHTML = "";
		document.getElementById("input_camera").value = "";
	};
	
	//var MAX_EXTRAS = document.getElementById("compslider").value;
	for(var i = 0; i < 6; ++i){ // complications
		if(i < result.extras.length) {
			document.getElementById("complication" + (i+1)).innerHTML = 
				"<div id='comp-image' class='" + result.extras[i].split('|')[0].replace(/\s/g, "") +
				"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.extras[i].split('|')[1] +
				"</p></div><div id='nameplate'><span><p id='title'>Complication</p><p id='subtitle'>" + result.extras[i].split('|')[0] + "</p></span></div></div>";
			document.getElementById("input_complication" + (i+1)).value = result.extras[i];
		}
		else {
			document.getElementById("complication" + (i+1)).innerHTML = "";
			document.getElementById("input_complication" + (i+1)).value = "";
		};
	};
	
	var mechanicsModeIndex = document.getElementById("mechanics");
	var mechanicsMode = mechanicsModeIndex.options[mechanicsModeIndex.selectedIndex].value;
	if(mechanicsMode == "H2") {
		document.getElementById("restriction").innerHTML =
			"<div id='res-image' class='h2-" + result.mechanicsH2.split('|')[0].replace(/\s|\&/g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.mechanicsH2.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Restriction</p><p id='subtitle'>" + result.mechanicsH2.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_restriction").value = result.mechanicsH2 + "|h2";
	}
	else if(mechanicsMode == "H1") {
		document.getElementById("restriction").innerHTML =
			"<div id='res-image' class='h1-" + result.mechanicsH1.split('|')[0].replace(/\s|\&/g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.mechanicsH1.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Restriction</p><p id='subtitle'>" + result.mechanicsH1.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_restriction").value = result.mechanicsH1 + "|h1";		
	}
	else {
		document.getElementById("restriction").innerHTML = "";
		document.getElementById("input_restriction").value = "";
	};
	
	if(document.getElementById("time").checked == 1) { // time limit
		document.getElementById("timelimit").innerHTML = 
			"<div id='time-image' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette in under " + result.time +
			" minutes. To track your unpaused time: enable the Mission Timer through the game's Options menu under Gameplay.</p></div><div id='nameplate'><span><p id='title'>Time Limit</p><p id='subtitle'>" + result.time + " Minutes</p></span></div></div>";
		document.getElementById("input_timelimit").value = result.time;
		document.getElementById("input_timelimitvalue").value = 60 * result.time;
	}
	else {
		document.getElementById("timelimit").innerHTML = "";
		document.getElementById("input_timelimit").value = "";
		document.getElementById("input_timelimitvalue").value = 0;
	};
	
	if(document.getElementById("rating").checked == 1) { // rating requirement
		document.getElementById("ratingget").innerHTML = 
			"<div id='rating-image' class='" + result.rating.split('|')[0].replace(/\s/g, "") + "'><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>" + result.rating.split('|')[1] +
			"</p></div><div id='nameplate'><span><p id='title'>Rating</p><p id='subtitle'>" + result.rating.split('|')[0] + "</p></span></div></div>";
		document.getElementById("input_rating").value = result.rating;
	}
	else {
		document.getElementById("ratingget").innerHTML = "";
		document.getElementById("input_rating").value = "";
	};
	
	//var difficultyModeIndex = document.getElementById("difficulty"); (variables determined earlier in exits)
	//var difficultyMode = difficultyModeIndex.options[difficultyModeIndex.selectedIndex].value;
	if(mode != "MAIN" || result.missionCode == "gardenshow") { // no alternate difficulty in contracts mode or the Dartmoor Garden Show
		document.getElementById("diffget").innerHTML = "";
		document.getElementById("input_difficulty").value = "";
	}
	else if(difficultyMode == "H2" && !proOnly.includes(result.missionCode) ) { // H2/3 difficulty on maps where available
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-" + result.difficulty + "' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette with the mission's difficulty set to " + result.difficulty +
			".</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>" + result.difficulty + "</p></span></div></div>";
		document.getElementById("input_difficulty").value = result.difficulty;
	}
	else if(difficultyMode == "H1" && !proOnly.includes(result.missionCode)) { // H1 difficulty
		if (!h1.includes(result.missionCode)){ // Unavailable on H2/3 Maps
			document.getElementById("diffget").innerHTML = 
				"<div id='diff-image-NotAvailable' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>You must Select Missions from the first HITMAN Campaign while Force Difficulty is set to “H1”.</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>Unavailable</p></span></div></div>";
			document.getElementById("input_difficulty").value = "";
		}
		else if (result.difficulty == "Professional"){ // H1 Professional
			document.getElementById("diffget").innerHTML = 
				"<div id='diff-image-ProfessionalH1' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette with the mission's difficulty set to Professional.</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>Professional</p></span></div></div>";
			document.getElementById("input_difficulty").value = "Professional";
		}
		else {
			document.getElementById("diffget").innerHTML = //H1 Normal
				"<div id='diff-image-" + result.difficulty + "' class=''><div id='instruction'><img id='list' src='./img/general/blank.png'><p id='wording'>Complete the roulette with the mission's difficulty set to " + result.difficulty +
				".</p></div><div id='nameplate'><span><p id='title'>Difficulty</p><p id='subtitle'>" + result.difficulty + "</p></span></div></div>";
			document.getElementById("input_difficulty").value = result.difficulty;
		}
	}
	else { // force difficulty off / map difficulty cannot be changed
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
		document.getElementById("input_challengest").value = "";
	}
	else {	
		document.getElementById("submenu_chal").disabled = false;
		document.getElementById("subsubmenu_chal").disabled = false;
		document.getElementById("input_challengest").value = "\n\nChallenges:";
	};
	
	/*Variable Wall used to fill in textarea used to save a roulette*/
	var contracttext = document.getElementById("input_contract").value;
	
	if(document.getElementById("input_entry").value) {
		var entrytext = "\nStart: " + document.getElementById("input_entry").value;
		document.getElementById('overlay-start').innerHTML = "Start: " + document.getElementById("input_entry").value;
	} else { var entrytext = ""; document.getElementById('overlay-start').innerHTML = ""; }
	if(document.getElementById("input_exit").value.split('|')[1]) { //Exit with Req
		var exittext = "\nExit: " + document.getElementById("input_exit").value.split('|')[0] + " " + document.getElementById("input_exit").value.split('|')[1];
		document.getElementById('overlay-exit').innerHTML = "Exit: " + document.getElementById("input_exit").value.split('|')[0] + " " + document.getElementById("input_exit").value.split('|')[1];
	} else if(document.getElementById("input_exit").value.split('|')[0]) { //Exit no req
		var exittext = "\nExit: " + document.getElementById("input_exit").value.split('|')[0];
		document.getElementById('overlay-exit').innerHTML = "Exit: " + document.getElementById("input_exit").value.split('|')[0];
	} else { var exittext = ""; document.getElementById('overlay-exit').innerHTML = ""; }

	if(document.getElementById("input_target1").value) {
		if(document.getElementById("input_method1").value.split('|')[0] == "Any Method") {
			if(document.getElementById("input_disguise1").value == "Any Disguise") { //Any Method; Any Disguise
				var target1result = "\nEliminate: " + document.getElementById("input_target1").value;
				document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value;
			} else { // Any Method; Specific Desguise
				var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", while disguised as: " + document.getElementById("input_disguise1").value;
				document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", while disguised as: " + document.getElementById("input_disguise1").value;
			}
		} else {
			if(document.getElementById("input_method1").value.split('|')[1]) {
				if(document.getElementById("input_method1").value.split('|')[2]) {
					if(document.getElementById("input_disguise1").value == "Any Disguise") { //Specific Method, Use, and Hint; Any Disguise
						var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ") [" + document.getElementById("input_method1").value.split('|')[2] + "]";
						document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ") [" + document.getElementById("input_method1").value.split('|')[2] + "]";
					} else { //Specific Method, Use, and Hint; Specific Disguise
						var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ") [" + document.getElementById("input_method1").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise1").value;
						document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ") [" + document.getElementById("input_method1").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise1").value;
					}
				} else {
					if(document.getElementById("input_disguise1").value == "Any Disguise") { //Specific Method, Use; Any Disguise
						var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ")";
						document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + ")";
					} else { //Specific Method, Use; Specific Disguise
						var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise1").value;
						document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + " (" + document.getElementById("input_method1").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise1").value;
					}
				}
			} else {
				if(document.getElementById("input_disguise1").value == "Any Disguise") { //Specific Method, Any Use; Any Disguise
					var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0];
					document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0];
				} else { //Specific Method, Any Use; Specific Disguise
					var target1result = "\nEliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise1").value;
					document.getElementById('overlay-target1').innerHTML = "Eliminate: " + document.getElementById("input_target1").value + ", using: " + document.getElementById("input_method1").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise1").value;
				}
			}
		}
	} else { var target1result = ""; document.getElementById('overlay-target1').innerHTML = ""; }
	if(document.getElementById("input_intel1").value) {
		var intel1text = "\n └ Intel: " + document.getElementById("input_intel1").value;
	} else { var intel1text = ""; }

	if(document.getElementById("input_target2").value) {
		if(document.getElementById("input_method2").value.split('|')[0] == "Any Method") {
			if(document.getElementById("input_disguise2").value == "Any Disguise") { //Any Method; Any Disguise
				var target2result = "\nEliminate: " + document.getElementById("input_target2").value;
				document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value;
			} else { // Any Method; Specific Desguise
				var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", while disguised as: " + document.getElementById("input_disguise2").value;
				document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", while disguised as: " + document.getElementById("input_disguise2").value;
			}
		} else {
			if(document.getElementById("input_method2").value.split('|')[1]) {
				if(document.getElementById("input_method2").value.split('|')[2]) {
					if(document.getElementById("input_disguise2").value == "Any Disguise") { //Specific Method, Use, and Hint; Any Disguise
						var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ") [" + document.getElementById("input_method2").value.split('|')[2] + "]";
						document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ") [" + document.getElementById("input_method2").value.split('|')[2] + "]";
					} else { //Specific Method, Use, and Hint; Specific Disguise
						var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ") [" + document.getElementById("input_method2").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise2").value;
						document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ") [" + document.getElementById("input_method2").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise2").value;
					}
				} else {
					if(document.getElementById("input_disguise2").value == "Any Disguise") { //Specific Method, Use; Any Disguise
						var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ")";
						document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + ")";
					} else { //Specific Method, Use; Specific Disguise
						var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise2").value;
						document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + " (" + document.getElementById("input_method2").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise2").value;
					}
				}
			} else {
				if(document.getElementById("input_disguise2").value == "Any Disguise") { //Specific Method, Any Use; Any Disguise
					var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0];
					document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0];
				} else { //Specific Method, Any Use; Specific Disguise
					var target2result = "\nEliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise2").value;
					document.getElementById('overlay-target2').innerHTML = "Eliminate: " + document.getElementById("input_target2").value + ", using: " + document.getElementById("input_method2").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise2").value;
				}
			}
		}
	} else { var target2result = ""; document.getElementById('overlay-target2').innerHTML = ""; }
	if(document.getElementById("input_intel2").value) {
		var intel2text = "\n └ Intel: " + document.getElementById("input_intel2").value;
	} else { var intel2text = ""; }

	if(document.getElementById("input_target3").value) {
		if(document.getElementById("input_method3").value.split('|')[0] == "Any Method") {
			if(document.getElementById("input_disguise3").value == "Any Disguise") { //Any Method; Any Disguise
				var target3result = "\nEliminate: " + document.getElementById("input_target3").value;
				document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value;
			} else { // Any Method; Specific Desguise
				var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", while disguised as: " + document.getElementById("input_disguise3").value;
				document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", while disguised as: " + document.getElementById("input_disguise3").value;
			}
		} else {
			if(document.getElementById("input_method3").value.split('|')[1]) {
				if(document.getElementById("input_method3").value.split('|')[2]) {
					if(document.getElementById("input_disguise3").value == "Any Disguise") { //Specific Method, Use, and Hint; Any Disguise
						var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ") [" + document.getElementById("input_method3").value.split('|')[2] + "]";
						document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ") [" + document.getElementById("input_method3").value.split('|')[2] + "]";
					} else { //Specific Method, Use, and Hint; Specific Disguise
						var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ") [" + document.getElementById("input_method3").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise3").value;
						document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ") [" + document.getElementById("input_method3").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise3").value;
					}
				} else {
					if(document.getElementById("input_disguise3").value == "Any Disguise") { //Specific Method, Use; Any Disguise
						var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ")";
						document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + ")";
					} else { //Specific Method, Use; Specific Disguise
						var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise3").value;
						document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + " (" + document.getElementById("input_method3").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise3").value;
					}
				}
			} else {
				if(document.getElementById("input_disguise3").value == "Any Disguise") { //Specific Method, Any Use; Any Disguise
					var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0];
					document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0];
				} else { //Specific Method, Any Use; Specific Disguise
					var target3result = "\nEliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise3").value;
					document.getElementById('overlay-target3').innerHTML = "Eliminate: " + document.getElementById("input_target3").value + ", using: " + document.getElementById("input_method3").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise3").value;
				}
			}
		}
	} else { var target3result = ""; document.getElementById('overlay-target3').innerHTML = ""; }
	if(document.getElementById("input_intel3").value) {
		var intel3text = "\n └ Intel: " + document.getElementById("input_intel3").value;
	} else { var intel3text = ""; }
	
	if(document.getElementById("input_target4").value) {
		if(document.getElementById("input_method4").value.split('|')[0] == "Any Method") {
			if(document.getElementById("input_disguise4").value == "Any Disguise") { //Any Method; Any Disguise
				var target4result = "\nEliminate: " + document.getElementById("input_target4").value;
				document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value;
			} else { // Any Method; Specific Desguise
				var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", while disguised as: " + document.getElementById("input_disguise4").value;
				document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", while disguised as: " + document.getElementById("input_disguise4").value;
			}
		} else {
			if(document.getElementById("input_method4").value.split('|')[1]) {
				if(document.getElementById("input_method4").value.split('|')[2]) {
					if(document.getElementById("input_disguise4").value == "Any Disguise") { //Specific Method, Use, and Hint; Any Disguise
						var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ") [" + document.getElementById("input_method4").value.split('|')[2] + "]";
						document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ") [" + document.getElementById("input_method4").value.split('|')[2] + "]";
					} else { //Specific Method, Use, and Hint; Specific Disguise
						var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ") [" + document.getElementById("input_method4").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise4").value;
						document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ") [" + document.getElementById("input_method4").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise4").value;
					}
				} else {
					if(document.getElementById("input_disguise4").value == "Any Disguise") { //Specific Method, Use; Any Disguise
						var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ")";
						document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + ")";
					} else { //Specific Method, Use; Specific Disguise
						var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise4").value;
						document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + " (" + document.getElementById("input_method4").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise4").value;
					}
				}
			} else {
				if(document.getElementById("input_disguise4").value == "Any Disguise") { //Specific Method, Any Use; Any Disguise
					var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0];
					document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0];
				} else { //Specific Method, Any Use; Specific Disguise
					var target4result = "\nEliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise4").value;
					document.getElementById('overlay-target4').innerHTML = "Eliminate: " + document.getElementById("input_target4").value + ", using: " + document.getElementById("input_method4").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise4").value;
				}
			}
		}
	} else { var target4result = ""; document.getElementById('overlay-target4').innerHTML = ""; }
	if(document.getElementById("input_intel4").value) {
		var intel4text = "\n └ Intel: " + document.getElementById("input_intel4").value;
	} else { var intel4text = ""; }
	
	if(document.getElementById("input_target5").value) {
		if(document.getElementById("input_method5").value.split('|')[0] == "Any Method") {
			if(document.getElementById("input_disguise5").value == "Any Disguise") { //Any Method; Any Disguise
				var target5result = "\nEliminate: " + document.getElementById("input_target5").value;
				document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value;
			} else { // Any Method; Specific Desguise
				var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", while disguised as: " + document.getElementById("input_disguise5").value;
				document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", while disguised as: " + document.getElementById("input_disguise5").value;
			}
		} else {
			if(document.getElementById("input_method5").value.split('|')[1]) {
				if(document.getElementById("input_method5").value.split('|')[2]) {
					if(document.getElementById("input_disguise5").value == "Any Disguise") { //Specific Method, Use, and Hint; Any Disguise
						var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ") [" + document.getElementById("input_method5").value.split('|')[2] + "]";
						document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ") [" + document.getElementById("input_method5").value.split('|')[2] + "]";
					} else { //Specific Method, Use, and Hint; Specific Disguise
						var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ") [" + document.getElementById("input_method5").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise5").value;
						document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ") [" + document.getElementById("input_method5").value.split('|')[2] + "], while disguised as: " + document.getElementById("input_disguise5").value;
					}
				} else {
					if(document.getElementById("input_disguise5").value == "Any Disguise") { //Specific Method, Use; Any Disguise
						var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ")";
						document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + ")";
					} else { //Specific Method, Use; Specific Disguise
						var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise5").value;
						document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + " (" + document.getElementById("input_method5").value.split('|')[1] + "), while disguised as: " + document.getElementById("input_disguise5").value;
					}
				}
			} else {
				if(document.getElementById("input_disguise5").value == "Any Disguise") { //Specific Method, Any Use; Any Disguise
					var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0];
					document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0];
				} else { //Specific Method, Any Use; Specific Disguise
					var target5result = "\nEliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise5").value;
					document.getElementById('overlay-target5').innerHTML = "Eliminate: " + document.getElementById("input_target5").value + ", using: " + document.getElementById("input_method5").value.split('|')[0] + ", while disguised as: " + document.getElementById("input_disguise5").value;
				}
			}
		}
	} else { var target5result = ""; document.getElementById('overlay-target5').innerHTML = ""; }
	if(document.getElementById("input_intel5").value) {
		var intel5text = "\n └ Intel: " + document.getElementById("input_intel5").value;
	} else { var intel5text = ""; }
	
	if(document.getElementById("input_objective").value) {
		var objectivetext = "\nObjective: " + document.getElementById("input_objective").value.split('|')[1];
		document.getElementById('overlay-objective').innerHTML = "Objective: " + document.getElementById("input_objective").value.split('|')[1];
	} else { var objectivetext = ""; document.getElementById('overlay-objective').innerHTML = ""; }
	if(document.getElementById("input_extraobjective").value) {
		var exobjtext = "\nExtra Objective: " + document.getElementById("input_extraobjective").value.split('|')[1];
		document.getElementById('overlay-objectivex').innerHTML = "Extra Objective: " + document.getElementById("input_extraobjective").value.split('|')[1];
	} else { var exobjtext = ""; document.getElementById('overlay-objectivex').innerHTML = ""; }
	if(document.getElementById("input_camera").value) {
		var cameratext = "\nPhoto Objective: " + document.getElementById("input_camera").value.split('|')[1];
		document.getElementById('overlay-camera').innerHTML = "Photo Objective: " + document.getElementById("input_camera").value.split('|')[1];
	} else { var cameratext = ""; document.getElementById('overlay-camera').innerHTML = ""; }
	
	var complicationttext = document.getElementById("input_complicationt").value;
	if(document.getElementById("input_complication1").value.includes("No Agency Pickup")) {
		var complication1text = "\n● " + document.getElementById("input_complication1").value.split('|')[1];
		document.getElementById("overlay-complication1").innerHTML = "";
	} else if(document.getElementById("input_complication1").value) {
		var complication1text = "\n● " + document.getElementById("input_complication1").value.split('|')[1];
		document.getElementById("overlay-complication1").innerHTML = "Complication: " + document.getElementById("input_complication1").value.split('|')[0];
	} else { var complication1text = ""; document.getElementById("overlay-complication1").innerHTML = ""; }
	if(document.getElementById("input_complication2").value.includes("No Agency Pickup")) {
		var complication2text = "\n● " + document.getElementById("input_complication2").value.split('|')[1];
		document.getElementById("overlay-complication2").innerHTML = "";
	} else if(document.getElementById("input_complication2").value) {
		var complication2text = "\n● " + document.getElementById("input_complication2").value.split('|')[1];
		document.getElementById("overlay-complication2").innerHTML = "Complication: " + document.getElementById("input_complication2").value.split('|')[0];
	} else { var complication2text = ""; document.getElementById("overlay-complication2").innerHTML = ""; }
	if(document.getElementById("input_complication3").value.includes("No Agency Pickup")) {
		var complication3text = "\n● " + document.getElementById("input_complication3").value.split('|')[1];
		document.getElementById("overlay-complication3").innerHTML = "";
	} else if(document.getElementById("input_complication3").value) {
		var complication3text = "\n● " + document.getElementById("input_complication3").value.split('|')[1];
		document.getElementById("overlay-complication3").innerHTML = "Complication: " + document.getElementById("input_complication3").value.split('|')[0];
	} else { var complication3text = ""; document.getElementById("overlay-complication3").innerHTML = ""; }
	if(document.getElementById("input_complication4").value.includes("No Agency Pickup")) {
		var complication4text = "\n● " + document.getElementById("input_complication4").value.split('|')[1];
		document.getElementById("overlay-complication4").innerHTML = "";
	} else if(document.getElementById("input_complication4").value) {
		var complication4text = "\n● " + document.getElementById("input_complication4").value.split('|')[1];
		document.getElementById("overlay-complication4").innerHTML = "Complication: " + document.getElementById("input_complication4").value.split('|')[0];
	} else { var complication4text = ""; document.getElementById("overlay-complication4").innerHTML = ""; }
	if(document.getElementById("input_complication5").value.includes("No Agency Pickup")) {
		var complication5text = "\n● " + document.getElementById("input_complication5").value.split('|')[1];
		document.getElementById("overlay-complication5").innerHTML = "";
	} else if(document.getElementById("input_complication5").value) {
		var complication5text = "\n● " + document.getElementById("input_complication5").value.split('|')[1];
		document.getElementById("overlay-complication5").innerHTML = "Complication: " + document.getElementById("input_complication5").value.split('|')[0];
	} else { var complication5text = ""; document.getElementById("overlay-complication5").innerHTML = ""; }
	if(document.getElementById("input_complication6").value.includes("No Agency Pickup")) {
		var complication6text = "\n● " + document.getElementById("input_complication6").value.split('|')[1];
		document.getElementById("overlay-complication6").innerHTML = "";
	} else if(document.getElementById("input_complication6").value) {
		var complication6text = "\n● " + document.getElementById("input_complication6").value.split('|')[1];
		document.getElementById("overlay-complication6").innerHTML = "Complication: " + document.getElementById("input_complication6").value.split('|')[0];
	} else { var complication6text = ""; document.getElementById("overlay-complication6").innerHTML = ""; }	
	if (complication1text.concat(complication2text, complication3text, complication4text, complication5text, complication6text).includes("agency")) {
		document.getElementById("overlay-pickup").innerHTML = "Complication: No smuggling via hidden stash or agency pickup.";
		document.getElementById("input_pickup").value = "Complication: No smuggling via hidden stash or agency pickup.";
	} else { document.getElementById("overlay-pickup").innerHTML = ""; document.getElementById("input_pickup").value = ""; }
	
	var challengesttext = document.getElementById("input_challengest").value;
	if(document.getElementById("input_restriction").value) {
		var restrictiontext = "\n● Restriction: " + document.getElementById("input_restriction").value.split('|')[1];
		document.getElementById('overlay-restriction').innerHTML = "Restriction: " + document.getElementById("input_restriction").value.split('|')[1];
	} else { var restrictiontext = ""; document.getElementById('overlay-restriction').innerHTML = ""; }
	if(document.getElementById("input_timelimit").value) {
		var timelimittext = "\n● Time Limit: " + document.getElementById("input_timelimit").value + " minutes.";
		document.getElementById('timeprompt').innerHTML = "Time Limit: " + document.getElementById("input_timelimit").value + " minutes.";
	} else { var timelimittext = ""; document.getElementById('timeprompt').innerHTML = ""; }
	if(document.getElementById("input_rating").value) {
		var ratingtext = "\n● Rating: " + document.getElementById("input_rating").value.split('|')[2];
		document.getElementById('overlay-challenge_rating').innerHTML = "Rating: " + document.getElementById("input_rating").value.split('|')[2];
	} else { var ratingtext = ""; document.getElementById('overlay-challenge_rating').innerHTML = ""; }
	if(document.getElementById("input_difficulty").value) {
		var difficultytext = "\n● Difficulty: Start the mission on " + document.getElementById("input_difficulty").value;
		document.getElementById('overlay-difficulty').innerHTML = "Difficulty: " + document.getElementById("input_difficulty").value;
	} else { var difficultytext = ""; document.getElementById('overlay-difficulty').innerHTML = ""; }
	
	document.getElementById('roulettetext').value = "Mission: " + result.missionTitle + contracttext + "\n"
		+ entrytext
		+ target1result
		+ intel1text
		+ target2result
		+ intel2text
		+ target3result
		+ intel3text
		+ target4result
		+ intel4text
		+ target5result
		+ intel5text
		+ objectivetext
		+ exobjtext
		+ cameratext
		+ exittext
		+ complicationttext
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
};

function generate_result() {
	const current_mission = createContainerObject();
	
	var roulette = containerToResult(current_mission);
	roulette.extras = createExtrasList(roulette.exit, roulette.missionCode);
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
	if(document.getElementById("overlayguide") != null) {
		document.getElementById("overlayguide").style.setProperty("display", "none", "important");
	}
	
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
	
	if (document.getElementById("mask").checked == 0) {
		document.getElementById("saveroulette").disabled = false;
		document.getElementById("subsaveroulette").disabled = false;
	}
	else {
		document.getElementById("saveroulette").disabled = true;
		document.getElementById("subsaveroulette").disabled = true;
	}
	
	if(document.getElementById("overlaybutton") != null) {
		document.getElementById("overlaybutton").disabled = false;
	}
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
	}
	// disable redobtn
	document.getElementById("redobtn").disabled = true;
	document.getElementsByTagName("header")[0].style.gridTemplateColumns = "50px auto";
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
	document.getElementsByTagName("header")[0].style.gridTemplateColumns = "50px auto 50px";
	//history exists, enable undobtn
	if(history_past.length < 2) {
		document.getElementById("undobtn").disabled = true;
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
	}
	// disable redobtn
	if(redo_stack.length < 1) {
		document.getElementById("redobtn").disabled = true;
		document.getElementsByTagName("header")[0].style.gridTemplateColumns = "50px auto";
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
