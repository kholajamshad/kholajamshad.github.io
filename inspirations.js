//initializes the default introduction tiles
let card1=document.getElementById("intro1");
let card2=document.getElementById("intro2");

//code for each of the 10 tiles
//TILE 1
let fbimg=document.getElementById("fruitsbasketimg"); //holds image

	var fbcounter = 0; //tracks number of clicks on tile

fbimg.onclick = function(){
    //subject icon appears on clicked tile
    //changes intro tiles to tiles of chosen subject
    if(fbcounter == 0){
        fbimg.src = "fruitsbasket.png";
        card1.src = "fbintro1.png";
        card2.src = "fbintro2.png";
        fbcounter++;
    }
    
    //hides icon again on clicked tile
    //changes tiles back to default intro
    //repeats on alternate clicks
    else if(fbcounter == 1){
        fbimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        fbcounter=0;
    }
};


//TILE 2
let bthimg=document.getElementById("bthimg");

	var bthcounter = 0;

bthimg.onclick = function(){
    if(bthcounter == 0){
        bthimg.src = "bth.png";
        card1.src = "bthintro1.png";
        card2.src = "bthintro2.png";
        bthcounter++;
    }
    else if(bthcounter == 1){
        bthimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        bthcounter=0;
    }

};


//TILE 3
let rwbyimg=document.getElementById("rwbyimg");

	var rwbycounter = 0;

rwbyimg.onclick = function(){
    if(rwbycounter == 0){
        rwbyimg.src = "rwby.png";
        card1.src = "rwbyintro1.png";
        card2.src = "rwbyintro2.png";
        rwbycounter++;
    }
    else if(rwbycounter == 1){
        rwbyimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        rwbycounter=0;
    }

};


//TILE 4
let natimg=document.getElementById("natsumeimg");

	var natcounter = 0;

natimg.onclick = function(){
    if(natcounter == 0){
        natimg.src = "natsume.png";
        card1.src = "natintro1.png";
        card2.src = "natintro2.png";
        natcounter++;
    }
    else if(natcounter == 1){
        natimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        natcounter=0;
    }

};


//TILE 5
let aosimg=document.getElementById("aosimg");

	var aoscounter = 0;

aosimg.onclick = function(){
    if(aoscounter == 0){
        aosimg.src = "aos.png";
        card1.src = "aosintro1.png";
        card2.src = "aosintro2.png";
        aoscounter++;
    }
    else if(aoscounter == 1){
        aosimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        aoscounter=0;
    }

};


//TILE 6
let covidimg=document.getElementById("covidimg");

	var covidcounter = 0;

covidimg.onclick = function(){
    if(covidcounter == 0){
        covidimg.src = "covid.png";
        card1.src = "covidintro1.png";
        card2.src = "covidintro2.png";
        covidcounter++;
    }
    else if(covidcounter == 1){
        covidimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        covidcounter=0;
    }

};



//TILE 7
let hxhimg=document.getElementById("hxhimg");

	var hxhcounter = 0;

hxhimg.onclick = function(){
    if(hxhcounter == 0){
        hxhimg.src = "hxh.png";
        card1.src = "hxhintro1.png";
        card2.src = "hxhintro2.png";
        hxhcounter++;
    }
    else if(hxhcounter == 1){
        hxhimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        hxhcounter=0;
    }

};


//TILE 8
let berimg=document.getElementById("berserkimg");

	var bercounter = 0;

berimg.onclick = function(){
    if(bercounter == 0){
        berimg.src = "berserk.png";
        card1.src = "berserkintro1.png";
        card2.src = "berserkintro2.png";
        bercounter++;
    }
    else if(bercounter == 1){
        berimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        bercounter=0;
    }

};


//TILE 9
let graphimg=document.getElementById("graphimg");

	var graphcounter = 0;

graphimg.onclick = function(){
    if(graphcounter == 0){
        graphimg.src = "graph.png";
        card1.src = "graphintro1.png";
        card2.src = "graphintro2.png";
        graphcounter++;
    }
    else if(graphcounter == 1){
        graphimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        graphcounter=0;
    }

};


//TILE 10
let spiimg=document.getElementById("spiralimg");

	var spicounter = 0;

spiimg.onclick = function(){
    if(spicounter == 0){
        spiimg.src = "spiral.png";
        card1.src = "spiralintro1.png";
        card2.src = "spiralintro2.png";
        spicounter++;
    }
    else if(spicounter == 1){
        spiimg.src = "blackbox.png";
        card2.src = "intro2.png";
        card1.src = "intro1.png";
        spicounter=0;
    }

};

