

/*


Mad Lib Story


*/


function doMadLib() {
	alert("Here is you MadLib. Ill ask you some questions");

	var character= prompt("anything that is male")
	var verb1= prompt("Give me a verb, please");
	var say1= prompt("What would say right after you wake up?");
	var do1 = prompt("What would you do 5min after waking up?");
	var weather = prompt("Give me a weather, pls.");
	var weather2 = prompt("Another Weather pls")
	var verb2= prompt("another verb?");
	var verb3= prompt("last verb pls");
	var noun1 = prompt("A noun that you can see");
	var adv1 = prompt("An adv");
	var place = prompt("a special place")
	var verb4 = verb3+"ed"

	alert("madlib starting!");

	var story = "Once upon ago, there was a <span class='c'>"+character+"</span>. He was a special <span class='c'>"+character+"</span>, because he could <span class='c'>"
	 + verb1 + "</span>. He was also very proud of the fact that he could <span class='c'>" + verb2 + 
	 "</span>. One day, he woke up and said <span class='c'>" + say1 + "</span>. He then felt the need to <span class='c'>" + do1 + 
	 "</span>. Then, he <span class='c'>" + verb4 + "</span> and went out of his house into <span class='c'>" + weather + "</span>. He then decided to <span class='c'>"
	 +verb1+"</span>. Feeling good about himself, he went back inside to <span class='c'>"+verb3+"</span>. But then he saw a "
	 +noun1+"</span> standing on the dining table. Surprised, he ran out <span class='c'>"+adv1+"</span>. "+
	 "However, even when he went out, the <span class='c'>" +weather2+ "</span>surprised him. " 
	 +"It was then that he realized that he was in <span class='c'>"+place+"</span>. ";



	document.getElementById("finalMadLib").innerHTML = story;

}
