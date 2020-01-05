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
	var failsafe = [fft,ica,showstopper,wot,icon,landslide,agc,ahbos,c27,source,ff,si,nc,tfl,ths,cag,al,tas,gh,lr];
	
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
	
	if (Math.random() < 0.50 && document.getElementById("rating").checked == 0)
		extras.push("No Recordings|Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.");

	if (Math.random() < 0.50 && document.getElementById("firearm").checked == 0)
		extras.push("No Agency Pickup|When planning this mission, refrain from using a hidden stash or agency pickup.");

	if (Math.random() < 0.40 && document.getElementById("rating").checked == 0)
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
		extras.push("No Pacifications|Do not pacify or subdue anyone in any way, including via melee, or using thrown items.");

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
	
	var no_weapons_selected = !(kills.length > 0);
	if (no_weapons_selected)
		for(var i = 0; i < 5; ++i)
			kills.push("Any Method");
	
	// Randomize weapons
	shuffle(kills);
	
	// add Soders-specific kill if relevant. Tried to do the same for Bradley Paine, with no luck =/
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	if (mode == "MAIN" && container.missionTitle === "Situs Inversus" && !(no_weapons_selected)) 
		kills[0] = container.sodersKills[Math.floor(Math.random()*container.sodersKills.length)];
	
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
	if (mode == "CONEASY" || mode == "CONHARD") {
		var targetAmountCheck = Math.random();
		var num_targets = 5;
		if (targetAmountCheck < 0.84) num_targets--;
		if (targetAmountCheck < 0.69) num_targets--;
		if (targetAmountCheck < 0.39) num_targets--;
		if (targetAmountCheck < 0.04) num_targets--;
		
		shuffle(container.contractTargets);
		targets = container.contractTargets.slice(0, num_targets);
	}
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 1)
		targets = ["Elusive Target"];
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 2)
		targets = ["Elusive Target A","Elusive Target B"];
	else if (mode == "ELUSIVE" && document.getElementById("etslider").value == 3)
		targets = ["Elusive Target A","Elusive Target B","Elusive Target C"];
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
		result.missionobjective = "<div id='obj-image' class='DNASpecificVirus'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Destroy the virus.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>DNA Specific Virus</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "handoff")
		result.missionobjective = "<div id='obj-image' class='VirusSample'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Retrieve the virus sample from one of the targets.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>Virus Sample</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "construction")
		result.missionobjective = "<div id='obj-image' class='ProjectProposal'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Aquire documents.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>Project Proposal</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "spread")
		result.missionobjective = "<div id='obj-image' class='AnyInfected'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Eliminate anyone who becomes infected. Since the virus spreads through proximity contact, avoid becoming infected yourself. If you become contaminated, find an antidote for yourself within 5 minutes.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>Eliminate Any Infected</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "biggame")
		result.missionobjective = "<div id='obj-image' class='TheBlackBook'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Retrieve Reddington's Black Book.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>The Black Book</p></div></div>";
	else if (mode == "CONEASY" && result.missionCode == "biggame")
		result.missionobjective = "<div id='obj-image' class='TheBlackBook'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Retrieve Reddington's Black Book.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>The Black Book</p></div></div>";
	else if (mode == "CONHARD" && result.missionCode == "biggame")
		result.missionobjective = "<div id='obj-image' class='TheBlackBook'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Retrieve Reddington's Black Book.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>The Black Book</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "suburbs")
		result.missionobjective = "<div id='obj-image' class='FindClues'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Find clues in and around Whittleton Creek to uncover the connection between Janus and Providence.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>Find Clues</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "ark")
		result.missionobjective = "<div id='obj-image' class='ObjConstant'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Do not eliminate The Constant.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>The Constant</p></div></div>";
	else if (mode == "MAIN" && result.missionCode == "bank")
		result.missionobjective = "<div id='obj-image' class='ObtainData'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Retrieve the data and exit the bank.</p></div><div id='nameplate'><p id='title'>Objective</p><p id='subtitle'>Obtain Data</p></div></div>";
	else
		result.missionobjective = "";
	
	if (mode == "CONEASY" || mode == "CONHARD")
		result.objectives = container.contractWild[Math.floor(Math.random()*container.contractWild.length)];
	else
		result.objectives = container.wild[Math.floor(Math.random()*container.wild.length)];
	
	result.mechanics = mechList[Math.floor(Math.random()*mechList.length)];
	result.time = timeList[Math.floor(Math.random()*timeList.length)];
	result.rating = ratingList[Math.floor(Math.random()*ratingList.length)];
	result.difficulty = difficultyList[Math.floor(Math.random()*difficultyList.length)];
	
	return result;
};

//Makes text appear
function writeEverything(result) {
	
	//Location, Mission name, and background image
	document.documentElement.className = result.missionCode;
	document.getElementById("map_place").innerHTML = result.missionLocation;
	document.getElementById("map_name").innerHTML = result.missionTitle;
	
	//Start and Exit
	var exitModeIndex = document.getElementById("startexit");
	var exitMode = exitModeIndex.options[exitModeIndex.selectedIndex].value;
	if (exitMode != "OFF") {
		document.getElementById("travel").innerHTML =
			"<div id='entry' class='" + result.missionCode + "-start-" + result.entry.replace(/\s|'|\.|-|\(|\)/g, "") + "'><div id='nameplate'><p id='title'>Starting Location</p><p id='subtitle'>" + result.entry + "</p></div></div><div id='exit' class='" + result.missionCode + "-exit-" + result.exit.split('|')[0].replace(/\s|'|\.|-|\||\(|\)/g, "") + "'><div id='nameplate'><p id='title'>Exit Location <span id='exitreq'></span></p><p id='subtitle'>" + result.exit.split('|')[0] + "</p></div></div>";
		if(result.exit.split('|')[1] != null) {	document.getElementById("exitreq").innerHTML = result.exit.split('|')[1]; }
	}
	else {
		document.getElementById("travel").innerHTML = "";
	}
	
	var modeIndex = document.getElementById("modeselect");
	var mode = modeIndex.options[modeIndex.selectedIndex].value;
	
	// Write to the HTML elements from the results object
	var MAX_TARGETS = 5, MAX_EXTRAS = document.getElementById("compslider").value;
	
	for(var i = 0; i < MAX_TARGETS; ++i){ // targets
		if(i < result.targets.length) {
			document.getElementById("target" + (i+1)).innerHTML =
				"<div id='photo' class='" + result.targets[i].split('|')[0].replace(/\s|,|'|“|”|-|\./g, "") + "-" + result.missionCode +
				"'><div id='subplate' class='method'><p id='title'>Eliminate using:</p><p id='subtitle" + (i+1) + "'></p><p id='subtitle-alt" + (i+1) +
				"'></p></div><div id='subplate' class='disguise'><p id='title'>Wear disguise:</p><p id='subtitle'>" + result.disguises[i] +
				"</p></div><div id='subplate" + (i+1) + "' class='intel'><p id='title'>Intel:</p><p id='wording'>" + result.targets[i].split('|')[1] +
				"</p></div><div id='nameplate'><p id='title'>Target</p><p id='subtitle'>" + result.targets[i].split('|')[0] + "</p></div></div>";
			if(result.missionCode == "training" && (mode == "MAIN" || mode == "ELUSIVE") && fftfailsafe.includes(result.weapons[i]) ) {
				document.getElementById("subtitle" + (i+1)).innerHTML = "Any Method";
			}
			else if(result.missionCode == "training" && (mode == "CONEASY" || mode == "CONHARD") && fftfailsafeContract.includes(result.weapons[i]) ) {
				document.getElementById("subtitle" + (i+1)).innerHTML = "Any Method";
			}
			else if(result.missionCode == "test" && icafailsafe.includes(result.weapons[i]) ) {
				document.getElementById("subtitle" + (i+1)).innerHTML = "Any Method";
			}
			else {
				document.getElementById("subtitle" + (i+1)).innerHTML = result.weapons[i].split('|')[0]; // elimination method
				if(result.weapons[i].split('|')[1] != null) { document.getElementById("subtitle-alt" + (i+1)).innerHTML = result.weapons[i].split('|')[1]; } // method subtype
			}
			if(result.targets[i].split('|')[1] == null || mode == "CONHARD") { document.getElementById("subplate" + (i+1)).style.setProperty("display", "none", "important"); } // target intel
		}
		else { // no more targets
			document.getElementById("target" + (i+1)).innerHTML = "";
		}
	}
	
	document.getElementById("objective").innerHTML = result.missionobjective; // campaign mission objectives
	if(document.getElementById("exobj").checked == 1) // extra mission objectives
		document.getElementById("objectivex").innerHTML = 
			"<div id='obj-image' class='" + result.objectives.split('|')[0].replace(/\s|,|'|“|”|-|\?|\!|\(|\)|\./g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>"  + result.objectives.split('|')[1] +
			"</p></div><div id='nameplate'><p id='title'>Extra Objective</p><p id='subtitle'>"  + result.objectives.split('|')[0] + "</p></div></div>";
	else
		document.getElementById("objectivex").innerHTML = "";
	
	for(var i = 0; i < MAX_EXTRAS; ++i){ // complications
		if(i < result.extras.length)
			document.getElementById("complication" + (i+1)).innerHTML = 
				"<div id='comp-image' class='" + result.extras[i].split('|')[0].replace(/\s/g, "") +
				"'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>" + result.extras[i].split('|')[1] +
				"</p></div><div id='nameplate'><p id='title'>Complication</p><p id='subtitle'>" + result.extras[i].split('|')[0] + "</p></div></div>";
		else { // no more complications
			document.getElementById("complication" + (i+1)).innerHTML = "";
		}
	}
	var compcheck = document.getElementById("complication1").innerHTML;
	if(compcheck.length == 0 && document.getElementById("compslider").value > 0) // failsafe if no complications generated
		document.getElementById("complicationi").innerHTML =
			"<div id='comp-image' class='NoRecordings'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Do not get recorded by a security camera. If you are recorded, you must destroy the evidence.</p></div><div id='nameplate'><p id='title'>Complications</p><p id='subtitle'>No Recordings</p></div></div>";
	else if(compcheck.length == 0) // prompt to try complications if toggled off
		document.getElementById("complicationi").innerHTML =
			"<div id='comp-image' class='compinfo'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Change up your playstyle with complications. Find the option by selecting Roulette Settings in the top menu, followed by Extra Requirements.</p></div><div id='nameplate'><p id='title'>Complications</p><p id='subtitle'>None Enabled</p></div></div>";
	else
		document.getElementById("complicationi").innerHTML = "";
	
	if(document.getElementById("mechanics").checked == 1) // restricted mechanics
		document.getElementById("restriction").innerHTML = 
			"<div id='res-image' class='" + result.mechanics.split('|')[0].replace(/\s|\&/g, "") +
			"'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>" + result.mechanics.split('|')[1] +
			"</p></div><div id='nameplate'><p id='title'>Restriction</p><p id='subtitle'>" + result.mechanics.split('|')[0] + "</p></div></div>";
	else
		document.getElementById("restriction").innerHTML = "";
	
	if(document.getElementById("time").checked == 1) // time limit
		document.getElementById("timelimit").innerHTML = 
			"<div id='time-image' class=''><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Complete the roulette in under " + result.time +
			" minutes. For accuracy, enable the Mission Timer through the game's Options menu under Gameplay.</p></div><div id='nameplate'><p id='title'>Time Limit</p><p id='subtitle'>" + result.time + " Minutes</p></div></div>";
	else
		document.getElementById("timelimit").innerHTML = "";
	
	if(document.getElementById("rating").checked == 1) // rating requirement
		document.getElementById("ratingget").innerHTML = 
			"<div id='rating-image' class='" + result.rating.split('|')[0].replace(/\s/g, "") + "'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>" + result.rating.split('|')[1] +
			"</p></div><div id='nameplate'><p id='title'>Rating</p><p id='subtitle'>" + result.rating.split('|')[0] + "</p></div></div>";
	else
		document.getElementById("ratingget").innerHTML = "";
	
	if(document.getElementById("difficulty").checked == 1 && !proOnly.includes(result.missionCode) && mode == "MAIN") // force difficulty for campaign missions
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-" + result.difficulty + "' class=''><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Complete the roulette with the mission's difficulty set to " + result.difficulty +
			".</p></div><div id='nameplate'><p id='title'>Difficulty</p><p id='subtitle'>" + result.difficulty + "</p></div></div>";
	else if(document.getElementById("difficulty").checked == 1 && proOnly.includes(result.missionCode) && mode == "MAIN") // difficulty is pro for tutorial, bonus, and pz
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-Professional' class=''><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>The difficulty in outside of campaign missions is always set to Professional.</p></div><div id='nameplate'><p id='title'>Difficulty</p><p id='subtitle'>Professional</p></div></div>";
	else if(document.getElementById("difficulty").checked == 1 && mode != "MAIN") // difficulty is pro only in contracts mode and for elusive targets
		document.getElementById("diffget").innerHTML = 
			"<div id='diff-image-Professional' class=''><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>The difficulty outside of campaign missions is always set to Professional.</p></div><div id='nameplate'><p id='title'>Difficulty</p><p id='subtitle'>Professional</p></div></div>";
	else
		document.getElementById("diffget").innerHTML = "";
	
	var mechcheck = document.getElementById("restriction").innerHTML;
	var timecheck = document.getElementById("timelimit").innerHTML;
	var ratingcheck = document.getElementById("ratingget").innerHTML;
	var diffcheck = document.getElementById("diffget").innerHTML;
	if(mechcheck.length == 0 && timecheck.length == 0 && ratingcheck.length == 0 && diffcheck.length == 0) // prompt to try challenges
		document.getElementById("challengesi").innerHTML =
			"<div id='chall-image' class='challinfo'><div id='instruction'><img id='list' src='./img/general/list.png'><p id='wording'>Test your skills by enabling Gameplay Challenges through the Roulette Settings top menu.</p></div><div id='nameplate'><p id='title'>Challenges</p><p id='subtitle'>None Enabled</p></div></div>";
	else
		document.getElementById("challengesi").innerHTML = "";
	
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
	
	
	//history exists, enable undo_nappi
	if(history_past.length > 1)
		document.getElementById("undo_nappi").disabled = false;
	// disable redo_nappi
	if(redo_stack.length < 1)
		document.getElementById("redo_nappi").disabled = true;
	
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
