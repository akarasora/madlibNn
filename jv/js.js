console.log("hi")
//test

//var + logic
var twin="relative";


//Then we will print out content to the page depending on which weapon they have
//This is LOGIC
//we will use an 'IF STATEMENT' to change the message they receive based on the variable holding the weapon
if(twin=="separated"){
    console.log("Riliane became the Her Highness");
}else if(twin=="not seaparated"){
    console.log("They will not meet their consequence");
}else{
    console.log("Len will not be behead");
}
var evilness = 100;

//Send a message to column3 with what the opponent's health is
/* = replace.........> += add more*/
document.getElementById('logic').innerHTML += "<p>Sinfulness: "+evilness+"</p>";

//then we will define damage points for each type of weaapon
var Riliane;

//if the weapon is squid then the dmg pt is 50
//but if thne weapon is dog then da dmg is 25
//ohers wise the dmg will be 0
if(twin=="goodness"){
    Riliane=100;
} else if(twin=="sinfulness"){
    Riliane=25
}else{
    Riliane=0;
}



//use the console to test is the damage variable is working correctly
console.log(Riliane);





//Let's take it a step further and say the opponent has a health of 100 points
var health = 100;

//Send a message to column3 with what the opponent's health is
/* = replace.........> += add more*/
document.getElementById('logic').innerHTML += "<p>Riliane`s servant: "+health+"</p>";

//then we will define damage points for each type of weaapon
var Len;

//if the weapon is squid then the dmg pt is 50
//but if thne weapon is dog then da dmg is 25
//ohers wise the dmg will be 0
if(twin=="evil"){
    Len=0;
} else if(twin=="pure"){
    Len=100
}else{
    Len=0;
}



//---------------------------------------------------s1
//respon btn/ Event Listener s1
document.getElementById("btn").addEventListener("click", buildMadLib);

//Event Function
function buildMadLib(){

//input story 1
let pluralNoun = document.getElementById("plural-noun").value;
let adjective = document.getElementById("adjective").value;
let verb = document.getElementById("verb").value;
let noun = document.getElementById("noun").value;

//process story 1
let result = 'Once upon a time, in the Kingdom of Lucifenia, there was a ' + pluralNoun + 'named Riliane Lucifen dAutriche. She ruled with an iron fist, and her subjects suffered under her ' +adjective+ ' reig.This is where our tale begins, with the "Daughter of Evil."'

//output s1
document.getElementById("result").innerHTML=result;

}
//-----------------------------------------s2
//respon btn/ Event Listener s2
document.getElementById("btn2").addEventListener("click", buildMadLib2);

//Event Function
function buildMadLib2(){

//input story 2
let pluralNoun2 = document.getElementById("plural-noun2").value;
let adjective2 = document.getElementById("adjective2").value;
let verb2 = document.getElementById("verb2").value;
let noun2 = document.getElementById("noun2").value;

//process story 2
let result2 =  +pluralNoun2+ ' Riliane, in her pursuit of power, caused' +noun2+ ' to fester among her people. But it was not just about a ruler ' +verb2+ 'her authority; it was about the consequence that would unfold and a ' +adjective2+ ' cloud looms over the kingdom, threatening its peace.'


//output
document.getElementById("result2").innerHTML=result2;

}

//-------------------------------------------------------------------------------s3
//respon btn/ Event Listener s3
document.getElementById("btn3").addEventListener("click", buildMadLib3);

//Event Function
function buildMadLib3(){

//input story 3
let pluralNoun3 = document.getElementById("plural-noun3").value;
let adjective3 = document.getElementById("adjective3").value;
let verb3 = document.getElementById("verb3").value;
let noun3 = document.getElementById("noun3").value;

//process story 3
let result3 = 'Now, in the heart of this kingdom, we' +verb3+ 'a devoted servant named Len. He was not just any servant – he was Rin`s twin brother, and his' +noun3+ 'knew no bounds. When a dire situation befalls ' +pluralNoun3+ 'Riliane, the servant makes a ' +adjective3+ 'decision. In a courageous act of love and sacrifice, he dons Riliane`s identity to shield her from the impending doom. '

//output
document.getElementById("result3").innerHTML=result3;

}


