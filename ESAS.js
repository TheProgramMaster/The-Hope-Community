function checkPain(){
	var painLevel = null;
	if(document.getElementById('pain').checked){
		painLevel = document.getElementById('pain').value;
	}
	return painLevel;
}
function checkTired{
	var tiredLevel = null;
	if(document.getElementById('tired').checked){
		tiredLevel = document.getElementById('tired').value;
	}
	return tiredLevel;
}
function checkDrowsy(){
	var drowsyLevel = null;
	if(document.getElementById('drowsy').checked){
		drowsyLevel = document.getElementById('drowsy').value;
	}
	return drowsyLevel;
}
function checkAppetite(){
	var appetiteLevel = null;
	if(document.getElementById('appetite').checked){
		appetiteLevel = document.getElementById('appetite').value;
	}
	return appetiteLevel;
}
function checkBreath(){
	var breathLevel = null;
	if(document.getElementById('breath').checked){
		breathLevel = document.getElementById('breath').value;
	}
	return breathLevel;
}
function checkDepression(){
	var depressionLevel = null;
	if(document.getElementById('depression').checked){
		depressionLevel = document.getElementById('depression').value;
	}
	return depressionLevel;
}
function checkAnxiety(){
	var anxietyLevel =  null
	if(document.getElementById('anxiety').checked){
		anxietyLevel = document.getElementById('anxiety').value;
	}
	return anxietyLevel;
}
function checkWellbeing(){
	var wellbeingLevel = null;
	if(document.getElementById('wellbeing').checked){
		wellbeingLevel = document.getElementById('wellbeing').value;
	}
	return wellbeingLevel;
}
function checkOther(){
	var otherLevel = null;
	if(document.getElementById('other').checked){
		otherLevel = document.getElementById('other').value;
	}
	return otherLevel;
}
function checkAll(){
	var pain = checkPain();
	var tired = checkTired();
	var drowsy = checkDrowsy();
	var appetite = checkAppetite();
	var breath = checkBreath();
	var depression = checkDepression();
	var anxiety = checkAnxiety();
	var wellbeing = checkWellbeing();
	var other = checkOther();
	var painText = document.getElementById('painNumber');
	var tiredText = document.getElementById('tiredNumber');
	var drowsyText = document.getElementById('drowsyNumber');
	var appetiteText = document.getElementById('appetiteNumber');
	var breathText = document.getElementById('breathNumber');
	var depressionText = document.getElementById('depressionNumber');
	var anxietyText = document.getElementById('anxietyNumber');
	var wellbeingText = document.getElementById('wellbeingNumber');
	var otherText = document.getElementById('otherNumber');
	painText.innerHTML = pain;
	tiredText.innerHTML = tired;
	drowsyText.innerHTML = drowsy;
	appetiteText.innerHTML = appetite;
	breathText.innerHTML = breath;
	depressionText.innerHTML = depression;
	anxietyText.innerHTML = anxiety;
	wellbeingText.innerHTML = wellbeing;
	otherText.innerHTML = other;
}
var btn = document.getElementById('takeData');
btn.addEventListener("click",checkAll);
