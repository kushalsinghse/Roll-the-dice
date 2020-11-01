
function roll() {
	// body...
	var one = document.getElementById('1');
	var two = document.getElementById('2');
	var three = document.getElementById('3');
	var four = document.getElementById('4');
	var five = document.getElementById('5');
	var six = document.getElementById('6');

	var lis = shuffle([1,2,3,4,5,6])
  gif();
  document.getElementById('1').src="dies"+lis[0]+".png"
  document.getElementById('2').src="dies"+lis[1]+".png"
  document.getElementById('3').src="dies"+lis[2]+".png"
  document.getElementById('4').src="dies"+lis[3]+".png"
  document.getElementById('5').src="dies"+lis[4]+".png"
  document.getElementById('6').src="dies"+lis[5]+".png"

  for (i = 0; i < lis.length; i++) {
    if(lis[i] == 6)
     var winn = (i+1);
}

document.getElementById('winner').innerHTML = "Player "+ winn + " won the game";


}




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}








