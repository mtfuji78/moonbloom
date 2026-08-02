/* ==========================================
   MOON BLOOM
   JavaScript Part 1
========================================== */

const stars = document.getElementById("stars");
const flowerField = document.getElementById("flower-field");
const flowerTemplate = document.getElementById("flowerTemplate");
const flowerCount = document.getElementById("flowerCount");

const bloomBtn = document.getElementById("bloomBtn");
const wishBtn = document.getElementById("wishBtn");
const butterflyBtn = document.getElementById("butterflyBtn");
const petalBtn = document.getElementById("petalBtn");
const dreamBtn = document.getElementById("dreamBtn");
const gardenBtn = document.getElementById("gardenBtn");
const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("music");
const bloomSound = document.getElementById("bloomSound");

let totalFlowers = 0;
let bloomClicks = 0;

/* ==========================================
   STARS
========================================== */

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    const r=Math.random();

    if(r<0.6){
        star.classList.add("small");
    }else if(r<0.9){
        star.classList.add("medium");
    }else{
        star.classList.add("large");
    }

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*70+"vh";

    star.style.animationDuration=
    (1+Math.random()*4)+"s";

    stars.appendChild(star);

}

/* ==========================================
   CLOUDS
========================================== */

const cloudContainer=document.getElementById("clouds");

function makeCloud(){

    const cloud=
    document.getElementById("cloudTemplate")
    .content
    .firstElementChild
    .cloneNode(true);

    cloud.style.top=
    Math.random()*180+"px";

    cloud.style.left="-250px";

    cloud.style.animationDuration=
    (45+Math.random()*40)+"s";

    cloud.style.transform=
    "scale("+(0.6+Math.random()*1.2)+")";

    cloudContainer.appendChild(cloud);

}

for(let i=0;i<6;i++){
    makeCloud();
}

/* ==========================================
   FIREFLIES
========================================== */

const fireflies=document.getElementById("fireflies");

for(let i=0;i<30;i++){

    const f=
    document.getElementById("fireflyTemplate")
    .content
    .firstElementChild
    .cloneNode(true);

    f.style.left=Math.random()*100+"vw";
    f.style.top=(55+Math.random()*40)+"vh";

    f.style.animationDelay=
    Math.random()*8+"s";

    fireflies.appendChild(f);

}

/* ==========================================
   FLOWERS
========================================== */

function bloom(x,y){

    const flower=
    flowerTemplate.content
    .firstElementChild
    .cloneNode(true);

    flower.style.left=x+"px";
    flower.style.top=y+"px";

    flower.style.transform=
    "scale("+
    (0.7+Math.random()*1.2)
    +")";

    flowerField.appendChild(flower);

    const stem=document.createElement("div");
    stem.className="stem";

    flower.appendChild(stem);

    totalFlowers++;
    flowerCount.textContent=totalFlowers;

}

/* ==========================================
   FLOWER EXPLOSION
========================================== */

function bloomExplosion(){

    bloomClicks++;

    for(let i=0;i<80;i++){

        bloom(

            Math.random()*window.innerWidth,

            window.innerHeight-
            (60+Math.random()*320)

        );

    }

    if(bloomSound){
        bloomSound.currentTime=0;
        bloomSound.play().catch(()=>{});
    }

}

/* ==========================================
   BUTTON
========================================== */

bloomBtn.onclick=()=>{

    bloomExplosion();

};

/* ==========================================
   CLICK ANYWHERE
========================================== */

document.addEventListener("click",e=>{

    if(
        e.target.tagName==="BUTTON"
    ) return;

    bloom(
        e.clientX-30,
        e.clientY-30
    );

});

/* ==========================================
   CURSOR SPARKLES
========================================== */

const cursorTrail=
document.getElementById("cursorTrail");

document.addEventListener(
"mousemove",
e=>{

    const s=
    document.createElement("div");

    s.className="cursor-star";

    const icons=[
        "✨",
        "⭐",
        "🌸",
        "💖"
    ];

    s.textContent=
    icons[
        Math.floor(
            Math.random()*icons.length
        )
    ];

    s.style.left=e.clientX+"px";
    s.style.top=e.clientY+"px";

    cursorTrail.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },800);

});

/* ==========================================
   SHOOTING STARS
========================================== */

const shootingContainer=
document.getElementById(
"shooting-stars"
);

function shootingStar(){

    const s=
    document.createElement("div");

    s.className="shooting";

    s.style.left=
    Math.random()*80+"vw";

    s.style.top=
    Math.random()*35+"vh";

    shootingContainer.appendChild(s);

    s.animate([

        {
            transform:
            "translate(0,0)",
            opacity:1
        },

        {
            transform:
            "translate(400px,220px)",
            opacity:0
        }

    ],{

        duration:1800

    });

    setTimeout(()=>{
        s.remove();
    },1800);

}

setInterval(

shootingStar,

7000

);

/* ==========================================
   PARALLAX
========================================== */

document.addEventListener(
"mousemove",
e=>{

const x=
(e.clientX/window.innerWidth-.5)*15;

const y=
(e.clientY/window.innerHeight-.5)*15;

document.getElementById("moon")
.style.transform=
`translate(${x}px,${y}px)`;

});

/* ==========================================
   BUTTERFLIES
========================================== */

const butterflyContainer =
document.getElementById("butterflies");

const butterflyTemplate =
document.getElementById("butterflyTemplate");


function createButterfly(){

    const butterfly =
    butterflyTemplate.content
    .firstElementChild
    .cloneNode(true);

    butterfly.style.left =
    Math.random()*window.innerWidth+"px";

    butterfly.style.top =
    (100+Math.random()*400)+"px";

    butterfly.style.animationDuration =
    (8+Math.random()*8)+"s";

    butterfly.style.animationDelay =
    Math.random()*3+"s";

    butterflyContainer.appendChild(butterfly);


    setTimeout(()=>{

        butterfly.remove();

    },18000);

}



butterflyBtn.onclick=()=>{

    for(let i=0;i<20;i++){

        createButterfly();

    }

};



/* ==========================================
   PETAL RAIN
========================================== */

const petals =
document.getElementById("petals");


function createPetal(){

    const p =
    document.createElement("div");

    p.className =
    "falling-petal";

    const choices=[
        "🌸",
        "🌺",
        "❀",
        "🌷"
    ];

    p.textContent =
    choices[
        Math.floor(
            Math.random()*choices.length
        )
    ];


    p.style.left =
    Math.random()*100+"vw";


    p.style.fontSize =
    (15+Math.random()*25)+"px";


    p.style.animationDuration =
    (5+Math.random()*8)+"s";


    petals.appendChild(p);


    setTimeout(()=>{

        p.remove();

    },13000);

}



function petalRain(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            createPetal();

        },i*80);

    }

}



petalBtn.onclick=petalRain;



/* ==========================================
   FLOATING HEARTS
========================================== */

const hearts =
document.getElementById(
"floating-hearts"
);



function createHeart(){

    const h =
    document.createElement("div");

    h.className="heart";

    h.textContent="💖";

    h.style.left =
    Math.random()*100+"vw";

    h.style.top =
    "80vh";


    h.style.animationDuration =
    (2+Math.random()*3)+"s";


    hearts.appendChild(h);


    setTimeout(()=>{

        h.remove();

    },4000);

}


setInterval(()=>{

    if(Math.random()>.5){

        createHeart();

    }

},2000);



/* ==========================================
   MAKE A WISH
========================================== */

wishBtn.onclick=()=>{


    const moon =
    document.getElementById(
    "moon"
    );


    for(let i=0;i<40;i++){


        const star =
        document.createElement(
        "div"
        );


        star.textContent="✨";

        star.style.position=
        "absolute";


        star.style.left =
        window.innerWidth/2+"px";


        star.style.top =
        window.innerHeight/2+"px";


        star.style.fontSize =
        "25px";


        star.style.zIndex=20;


        document.body.appendChild(star);



        star.animate([

            {
                transform:
                "translate(0,0)"
            },

            {
                transform:
                `
                translate(
                ${moon.offsetLeft-window.innerWidth/2}px,
                ${moon.offsetTop-window.innerHeight/2}px
                )
                `
            }

        ],{

            duration:2000,
            easing:"ease-out"

        });


        setTimeout(()=>{

            star.remove();

        },2000);


    }

};



/* ==========================================
   DREAM MODE
========================================== */


dreamBtn.onclick=()=>{

    document.body
    .classList
    .toggle("dream");

};



/* ==========================================
   FAIRY GARDEN MODE
========================================== */


const secret =
document.getElementById(
"secretMessage"
);



gardenBtn.onclick=()=>{


    document.body
    .classList
    .toggle("fairy");


    secret.style.display="block";


    for(let i=0;i<150;i++){

        bloom(

            Math.random()*innerWidth,

            innerHeight-
            Math.random()*300

        );

    }


    setTimeout(()=>{

        secret.style.display="none";

    },5000);


};



/* ==========================================
   MUSIC
========================================== */


let playing=false;


musicBtn.onclick=()=>{


    if(!playing){

        music.play()
        .catch(()=>{});

        musicBtn.textContent=
        "🔇 Stop Music";

    }

    else{

        music.pause();

        musicBtn.textContent=
        "🎵 Music";

    }


    playing=!playing;


};




/* ==========================================
   HOLD TO BLOOM
========================================== */


let holding=false;


document.addEventListener(
"mousedown",
e=>{


    if(e.target.tagName==="BUTTON")
    return;


    holding=true;


    let timer=setInterval(()=>{

        if(!holding)
        return clearInterval(timer);


        bloom(

            e.clientX+
            (Math.random()*100-50),

            e.clientY+
            (Math.random()*100-50)

        );


    },120);


});


document.addEventListener(
"mouseup",
()=>{

    holding=false;

});



/* ==========================================
   MOON SECRET
========================================== */


let moonClicks=0;


document.getElementById(
"moon"
)
.onclick=()=>{


    moonClicks++;


    if(moonClicks>=10){


        document.getElementById(
        "moon"
        )
        .style.background=
        "#ffd1ec";


        alert(
        "🌙 The moon smiled at you ✨"
        );


        moonClicks=0;


    }


};




/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */


document.addEventListener(
"keydown",
e=>{


    switch(e.key.toLowerCase()){


        case "b":

            bloomExplosion();

        break;


        case "p":

            petalRain();

        break;


        case "f":

            gardenBtn.click();

        break;


        case "d":

            dreamBtn.click();

        break;


        case "m":

            musicBtn.click();

        break;


        case "w":

            wishBtn.click();

        break;


    }


});



/* ==========================================
   RANDOM MAGIC EVENTS
========================================== */


setInterval(()=>{


    const chance=Math.random();


    if(chance>.7){

        createHeart();

    }


    if(chance>.85){

        createButterfly();

    }


},4000);