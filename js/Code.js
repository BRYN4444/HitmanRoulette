//Creates the object that will be used as a source for the mission objectives
function createContainerObject() {
	container = {};
	
	var missionIndex = document.getElementById("missionselect");
	var missionSelection = [];
	for (var i = 0; i < missionIndex.options.length; i++) {
		if(missionIndex.options[i].selected ==true){
			missionSelection.push(missionIndex.options[i].value);
		}
	}
	var mission_name = missionSelection[Math.floor(Math.random() * missionSelection.length)];
	var randomMissionList = [fft,ica,showstopper,hh,wot,icon,landslide,author,agc,ahbos,c27,source,ff,si,patientzero];
	var randomPlaystationMissionList = [fft,ica,showstopper,director,hh,wot,enforcer,icon,landslide,author,agc,extracter,ahbos,c27,veteran,source,ff,mercenary,si,controller,patientzero];
	
	for (var prop in generic)
		if (generic.hasOwnProperty(prop))
			container[prop] = generic[prop];	
	
	if(mission_name === "RANDOM")
		var current_mission = randomMissionList[Math.floor(Math.random()*randomMissionList.length)];
	else if(mission_name === "RANDOMPS4")
		var current_mission = randomPlaystationMissionList[Math.floor(Math.random()*randomMissionList.length)];
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
function createExtrasList() {
	if(!document.getElementById("restrictions").checked)
		return [];
		
var extras = [];
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	
	if (Math.random() < 0.30)
		extras.push("No Recordings|Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.");

	if (Math.random() < 0.30 && document.getElementById("firearm").checked == 0)
		extras.push("No Agency Pickup|When planning this mission, refrain from picking any agency pickups.");

	if (Math.random() < 0.30)
		extras.push("No Bodies Found|No dead or unconscious bodies may be found. This does not include victims of accidents or poisoning.");

	if (Math.random() < 0.25 && document.getElementById("disguise").checked == 0)
		extras.push("No Disguise Changes|Do not change from your starting disguise at any time during the mission.");

	if (Math.random() < 0.25)
		extras.push("Rowdy Guns|Every ballistic weapon required elimination must be non-silenced.");

	if (Math.random() < 0.25)
		extras.push("No Civilian Casualties|Avoid collateral damage by only eliminating your targets.");

	if (Math.random() < 0.18)
		extras.push("Do Not Get Spotted|Avoid anyone seeing you performing any illegal action.");

	if (Math.random() < 0.18)
		extras.push("No Pacifications|Do not pacify or subdue anyone in any way, including via melee, or using thrown items.");

	if (Math.random() < 0.18 && document.getElementById("melee").checked == 0 && document.getElementById("accident").checked == 0)
		extras.push("Headshots Only|All shots fired at NPCs must be headshots.");

	if (Math.random() < 0.12 && mode == "MAIN")
		extras.push("One Save Only|You are allowed to save your mission progress only once.");
	
	if (Math.random() < 0.12)
		extras.push("Perfect Shooter|Do not use firearms as distractions or to destroy objects. All shots must hit an NPC, even if they subsequently pass through the NPC and hit a wall.");

	if (Math.random() < 0.12 && document.getElementById("disguise").checked == 0)
		extras.push("One Disguise Change|You are allowed one disguise change while playing the mission.");

	if (Math.random() < 0.05)
		extras.push("No Agility|Do not vault, hang, scale, or climb down.");

	if (Math.random() < 0.05)
		extras.push("No Crouching|Do not crouch.");
	
	return extras;
};

//Returns the list of weapons/accidents from which the kill methods are pulled
function createWeaponList(container) {
	var kills = []
	
	for( var kill_type in killTypesMap )
		if (document.getElementById(kill_type).checked)
			kills = kills.concat(container[killTypesMap[kill_type]]);
	
	var no_weapons_selected = !(kills.length > 0);
	if (no_weapons_selected)
		for(var i = 0; i < 5; ++i)
			kills.push("Any Method");
	
	// Randomize weapons
	shuffle(kills);
	
	// add Soders-specific kill if relevant
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && !(no_weapons_selected)) 
		kills[1] = container.sodersKills[Math.floor(Math.random()*container.sodersKills.length)];
	
	return kills;
};

//Create the disguise list
//reads the "entry" field in mission_information
function createDisguiseList(container, mission_information) {
	var disguises = [];
	// Remove "Ninja" and "Any Suit" from potential disguises when starting in an undercover location
	// The first disguise in the list is always the non-undercover one
	var undercover_start = suitStarts.indexOf(mission_information.entry) === -1;
	if (undercover_start)
		container.disguises.splice(0,1);
	
	//originally copied the disguise list, added  " as " to every element, then shuffled it
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
	if (mode == "CONTRACTS") {
		var targetAmountCheck = Math.random();
		var num_targets = 5;
		if (targetAmountCheck < 0.84) num_targets--;
		if (targetAmountCheck < 0.69) num_targets--;
		if (targetAmountCheck < 0.39) num_targets--;
		if (targetAmountCheck < 0.04) num_targets--;
		
		shuffle(container.contractTargets);
		targets = container.contractTargets.slice(0, num_targets);
	}
	else if (mode == "ELUSIVE")
		targets = ["Elusive Target"];
	else {
		// Copy the missions' target list
		targets = container.targetList.slice();
	}
	
	return targets;
};

//Adds properties from the container object to the result object
function containerToResult(container) {
	var result = {};
	result.missionTitle = container.missionTitle;
	result.missionLocation = container.missionLocation;
	result.missionCode = container.missionCode;
	result.entry = container.entry[Math.floor(Math.random()*container.entry.length)];
	result.wild = container.wild[Math.floor(Math.random()*container.wild.length)];
	result.contractWild = container.contractWild[Math.floor(Math.random()*container.contractWild.length)];	
	result.mechanics = mechList[Math.floor(Math.random()*mechList.length)];
	result.runsMission = runsMission[Math.floor(Math.random()*runsMission.length)];
	result.runsOther = runsOther[Math.floor(Math.random()*runsOther.length)];
	
	// Freedom Fighters Main Mission Exit
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "MAIN" && container.missionTitle === "Freedom Fighters" || mode == "ELUSIVE" && container.missionTitle === "Freedom Fighters") {
		result.exit = "Tornado Shelter|(Needs Face Scan)";
	}
	else {
		result.exit = container.exit[Math.floor(Math.random()*container.exit.length)];
	}
	
	return result;
};

//Makes text appear
function writeEverything(result) {
	document.getElementById("place").className = result.missionCode;
	document.getElementById("chosenlocation").innerHTML = result.missionLocation;
	document.getElementById("chosenmission").innerHTML = result.missionTitle;
	document.getElementById("entry").className = result.entry.replace(/\s|'|-|\(|\)/g, "");
	document.getElementById("start").innerHTML = result.entry;
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	var MAX_TARGETS = 5, MAX_EXTRAS = 6
	
	// Write to the HTML elements from the results object
	for(var i = 0; i < MAX_TARGETS; ++i){ // kills
		if(i < result.targets.length && mode != "CONTRACTS" && result.weapons[i].split('|')[1] == null)
			document.getElementById("target" + (i+1)).innerHTML = 
				"<div id='frame'><div id='photo' class='"
				+ result.targets[i].replace(/\s|,|'|“|”|-|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'/>Eliminated</span></div></div></div><div id='procedure'><p id='method-title'>Eliminate Using:</p><p id='method'>"
				+ result.weapons[i] + "<span id='method-alt'></span></p></div><div id='outfit'><p id='facade-title'>Wear Disguise:</p><p id='facade'>"
				+ result.disguises[i] + "</p></div><div id='intelligence' class='hidden'><p id='intel-title'></p><p id='intel'></p></div><div id='sombody'><p id='person-title'>Target</p><p id='person'>"
				+ result.targets[i] + "</p></div>";
		else if(i < result.targets.length && mode == "CONTRACTS" && result.weapons[i].split('|')[1] == null)
			document.getElementById("target" + (i+1)).innerHTML = 
				"<div id='frame'><div id='photo' class='"
				+ result.targets[i].split('|')[0].replace(/\s|,|'|“|”|-|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'/>Eliminated</span></div></div></div><div id='procedure'><p id='method-title'>Eliminate Using:</p><p id='method'>"
				+ result.weapons[i] + "<span id='method-alt'></span></p></div><div id='outfit'><p id='facade-title'>Wear Disguise:</p><p id='facade'>"
				+ result.disguises[i] + "</p></div><div id='intelligence'><p id='intel-title'>Intel:</p><p id='intel'>"
				+ result.targets[i].split('|')[1] + "</p></div><div id='sombody'><p id='person-title'>Target</p><p id='person'>"
				+ result.targets[i].split('|')[0] + "</p></div>";
		else if(i < result.targets.length && mode != "CONTRACTS" && result.weapons[i].split('|')[1] != null)
			document.getElementById("target" + (i+1)).innerHTML = 
				"<div id='frame'><div id='photo' class='"
				+ result.targets[i].replace(/\s|,|'|“|”|-|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'/>Eliminated</span></div></div></div><div id='procedure'><p id='method-title'>Eliminate Using:</p><p id='method'>"
				+ result.weapons[i].split('|')[0] + "<span id='method-alt'>"
				+ result.weapons[i].split('|')[1] + "</span></p></div><div id='outfit'><p id='facade-title'>Wear Disguise:</p><p id='facade'>"
				+ result.disguises[i] + "</p></div><div id='intelligence' class='hidden'><p id='intel-title'></p><p id='intel'></p></div><div id='sombody'><p id='person-title'>Target</p><p id='person'>"
				+ result.targets[i] + "</p></div>";
		else if(i < result.targets.length && mode == "CONTRACTS" && result.weapons[i].split('|')[1] != null)
			document.getElementById("target" + (i+1)).innerHTML = 
				"<div id='frame'><div id='photo' class='"
				+ result.targets[i].split('|')[0].replace(/\s|,|'|“|”|-|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'/>Eliminated</span></div></div></div><div id='procedure'><p id='method-title'>Eliminate Using:</p><p id='method'>"
				+ result.weapons[i].split('|')[0] + "<span id='method-alt'>"
				+ result.weapons[i].split('|')[1] + "</span></p></div><div id='outfit'><p id='facade-title'>Wear Disguise:</p><p id='facade'>"
				+ result.disguises[i] + "</p></div><div id='intelligence'><p id='intel-title'>Intel:</p><p id='intel'>"
				+ result.targets[i].split('|')[1] + "</p></div><div id='sombody'><p id='person-title'>Target</p><p id='person'>"
				+ result.targets[i].split('|')[0] + "</p></div>";
		else
			document.getElementById("target" + (i+1)).innerHTML = "";
	}
	for(var i = 0; i < MAX_EXTRAS; ++i){ // complications
		if(i < result.extras.length)
			document.getElementById("complication" + (i+1)).innerHTML = 
				"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
				+ result.extras[i].split('|')[0].replace(/\s/g, "") + "'></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>"
				+ result.extras[i].split('|')[1] + "</p></div><div id='detail'><p id='snag-title'>Complication</p><p id='snag'>"
				+ result.extras[i].split('|')[0] + "</p></div>";
		else
			document.getElementById("complication" + (i+1)).innerHTML = "";
	}
	
	document.getElementById("exit").className = result.exit.replace(/\s|'|-|\||\(|\)/g, "");
	document.getElementById("end").innerHTML = result.exit.split('|')[0];
	if(result.exit.split('|')[1] == null) {	
		document.getElementById("end-alt").innerHTML = "";
	}
	else {
		document.getElementById("end-alt").innerHTML = result.exit.split('|')[1];
	}
	
	//Extra Objectives aka Wildcards
	if(document.getElementById("wildcard").checked == 1 && mode == "MAIN")
		document.getElementById("objectivex").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
			+ result.wild.split('|')[0].replace(/\s|,|'|“|”|-|\?|\(|\)|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>"
			+ result.wild.split('|')[1] + "</p></div><div id='listing'><p id='task-title'>Extra Objective</p><p id='task'>"
			+ result.wild.split('|')[0] + "</p></div>";	
	else if(document.getElementById("wildcard").checked == 1 && mode != "MAIN")
		document.getElementById("objectivex").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
			+ result.contractWild.split('|')[0].replace(/\s|,|'|“|”|-|\?|\(|\)|\./g, "") + "'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>"
			+ result.contractWild.split('|')[1] + "</p></div><div id='listing'><p id='task-title'>Extra Objective</p><p id='task'>"
			+ result.contractWild.split('|')[0] + "</p></div>";	
	else
		document.getElementById("objectivex").innerHTML = "";
	
	//Mechanics to Disable
	if(document.getElementById("mechanics").checked == 1)
		document.getElementById("disable").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
			+ result.mechanics.replace(/\s/g, "") + "'></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Turn off "
			+ result.mechanics + " in the game's Options menu under Gameplay.</p></div><div id='nooption'><p id='snag-title'>Disable</p><p id='snag'>"
			+ result.mechanics + "</p></div>";
	else
		document.getElementById("disable").innerHTML = "";
	
	//Challenge Runs
	if(document.getElementById("challenge").checked == 1 && mode == "MAIN")
		document.getElementById("challengerun").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
			+ result.runsMission.split('|')[0].replace(/\s/g, "") + "'></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>"
			+ result.runsMission.split('|')[1] + "</p></div><div id='cup'><p id='snag-title'>Challenge Run</p><p id='snag'>"
			+ result.runsMission.split('|')[0] + "</p></div>";
	else if(document.getElementById("challenge").checked == 1 && mode != "MAIN")
		document.getElementById("challengerun").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='"
			+ result.runsOther.split('|')[0].replace(/\s/g, "") + "'></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>"
			+ result.runsOther.split('|')[1] + "</p></div><div id='cup'><p id='snag-title'>Challenge Run</p><p id='snag'>"
			+ result.runsOther.split('|')[0] + "</p></div>";
	else
		document.getElementById("challengerun").innerHTML = "";
	
	//Small issues when generating randomness in the tutorial area and text for non-contract missions
	if (result.missionTitle == "The Final Test")
		document.getElementById("info-text").innerHTML =
			"Due to level restrictions, re-roll if a kill requires a Sniper Rifle, SMG, Shotgun, Melee Weapons, Explosion (Any), Lethal Poison, Fire, or Electricity.";
	else if (result.missionTitle == "Freeform Training" && mode != "CONTRACTS")
		document.getElementById("info-text").innerHTML =
			"Due to level restrictions, re-roll if a kill requires a Sniper Rifle, SMG, Melee Weapons, Lethal Poison, Fire, or Electricity.";
	else if (result.missionTitle == "Freeform Training" && mode == "CONTRACTS")
		document.getElementById("info-text").innerHTML =
			"Due to level restrictions, re-roll if a kill requires a Sniper Rifle, SMG, Shotgun, Assault Rifle, Melee Weapons, Lethal Poison, Fire, or Electricity.";
	else if (mode == "CONTRACTS" && (result.missionTitle == "The Director" || result.missionTitle == "The Enforcer" || result.missionTitle == "The Extracter" || result.missionTitle == "The Veteran" || result.missionTitle == "The Mercenary" || result.missionTitle == "The Controller" || result.missionTitle == "Holiday Hoarders" || result.missionTitle == "The Author" || result.missionTitle == "Patient Zero") )
		document.getElementById("info-text").innerHTML =
			"Contract Mode is unavailable for this mission. Select the mission normally when attempting.";
	else
		document.getElementById("info-text").innerHTML = "Hitman™, Hitman™ logo, images & text are the property of IO Interactive.";
	
	//Adds the mission-specific objectives you'd be doing anyway
	if (result.missionTitle == "World of Tomorrow" && mode != "CONTRACTS" && mode != "ELUSIVE")
		document.getElementById("objective").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='DNASpecificVirus'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Destroy the virus.</p></div><div id='listing'><p id='task-title'>Objective</p><p id='task'>DNA Specific Virus</p></div>";
	else if (result.missionTitle == "The Author" && mode != "CONTRACTS" && mode != "ELUSIVE")
		document.getElementById("objective").innerHTML = 
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='VirusSample'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Retrieve the virus sample from one of the targets.</p></div><div id='listing'><p id='task-title'>Objective</p><p id='task'>Virus Sample</p></div>";
	else if (result.missionTitle == "A House Built on Sand"  && mode != "CONTRACTS" && mode != "ELUSIVE")
		document.getElementById("objective").innerHTML = 	
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='ProjectProposal'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Aquire documents.</p></div><div id='listing'><p id='task-title'>Objective</p><p id='task'>Project Proposal</p></div>";
	else if (result.missionTitle == "The Controller"  && mode != "CONTRACTS" && mode != "ELUSIVE")
		document.getElementById("objective").innerHTML = 	
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='SigmaOperationsFiles'><div id='eliminated'><span><img src='./img/eliminated.png' width='35px' height='35px'>Completed</span></div></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Retrieve the Sigma operations files without getting spotted, or fail the mission.</p></div><div id='listing'><p id='task-title'>Objective</p><p id='task'>Sigma Operations Files</p></div>";
	else if (result.missionTitle == "Patient Zero"  && mode != "CONTRACTS" && mode != "ELUSIVE")
		document.getElementById("objective").innerHTML = 		
			"<div id='frame' style='margin-bottom:16px;'><div id='picture' class='AnyInfected'></div></div><div id='list'><img id='instruction' src='./img/list.png'/><p id='wording'>Eliminate anyone who becomes infected. Since the virus spreads through proximity contact, avoid becoming infected yourself. If you become contaminated, find an antidote for yourself within 5 minutes.</p></div><div id='listing'><p id='task-title'>Objective</p><p id='task'>Eliminate Any Infected</p></div>";
	else
 		document.getElementById("objective").innerHTML = "";
	
};

function generate_result() {
	const current_mission = createContainerObject();
	
	var roulette = containerToResult(current_mission);
	roulette.extras = createExtrasList();
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
	
	//Removes default logos
	document.getElementById("mission").className = document.getElementById("mission").className.replace(/\bdefault\b/,'');
	document.getElementById("approach").className = document.getElementById("approach").className.replace(/\bdefault\b/,'');
	document.getElementById("escape").className = document.getElementById("escape").className.replace(/\bdefault\b/,'');
	
	//Adjust scroll size
	var newwidth = document.getElementById("contract").scrollWidth;
	document.getElementById("scrollfiller").style.width = newwidth + "px";
	
	//Hover to scroll long names
	$(function() {
		$('#start, #end, #person, #task, #snag').each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	}
}

//adds x to the history stack for a maximum of 20 most recent runs
function history_push(x){
	redo_stack = [];
	history_past.push(x);
	if(history_past.length > 20)
		history_past.shift();
	
	//history exists, enable undo_nappi
	if(history_past.length > 1)
		document.getElementById("undo_nappi").disabled = false;
	// disable redo_nappi
	document.getElementById("redo_nappi").disabled = true;
}


// undo and redo functions, affect global state
function history_undo(){
	if(history_past.length < 2)
		return;
	
	//add the currently displayed result to the redo stack
	redo_stack.push(history_past.pop());
	var previous = history_past[history_past.length - 1];
	writeEverything(previous);
	
	// enable redo_nappi
	document.getElementById("redo_nappi").disabled = false;
	//history exists, enable undo_nappi
	if(history_past.length < 2)
		document.getElementById("undo_nappi").disabled = true;
	
	//Adjust scroll size
	var newwidth = document.getElementById("contract").scrollWidth;
	document.getElementById("scrollfiller").style.width = newwidth + "px";
	
	//Hover to scroll long names
	$(function() {
		$('#start, #end, #person, #task, #snag').each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	}
}

function history_redo(){
	if(redo_stack.length < 1)
		return;
	
	history_past.push(redo_stack.pop());
	var previous = history_past[history_past.length - 1];
	writeEverything(previous);
	
	
	//history exists, enable undo_nappi
	if(history_past.length > 1)
		document.getElementById("undo_nappi").disabled = false;
	// disable redo_nappi
	if(redo_stack.length < 1)
		document.getElementById("redo_nappi").disabled = true;
	
	//Adjust scroll size
	var newwidth = document.getElementById("contract").scrollWidth;
	document.getElementById("scrollfiller").style.width = newwidth + "px";
	
	//Hover to scroll long names
	$(function() {
		$('#start, #end, #person, #task, #snag').each(function(i) {
			if (isEllipsisActive(this))
				$(this).addClass('slide');
			else
				$(this).removeClass('slide');
		});
	});

	function isEllipsisActive(e) {
		return ($(e).innerWidth() < $(e)[0].scrollWidth);
	}
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