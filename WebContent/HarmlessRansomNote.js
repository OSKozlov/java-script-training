/**
 * 
 */
function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};
	
	magazineArr.forEach(word => {
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});
	
	var noteIsPossible = true;
	noteArr.forEach(word => {
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossible = false;
		}
		else noteIsPossible = false;
	});
	
	console.log(magazineObj);
	console.log(noteIsPossible);
	return noteIsPossible;
}

harmlessRansomNote("this is test", "Maybe this is a simple test ?");
