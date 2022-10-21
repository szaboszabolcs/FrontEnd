/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/

let isBlured = false;

console.log("1")
document.getElementById("element-one").onclick = function() {
  
  isBlured = !isBlured;
  console.log("2")

  
  if (isBlured) {
    document.getElementById("element-one").classList.add("blur");
    console.log("3")
  } else {
    document.getElementById("element-one").classList.remove("blur");
    console.log("4")
  }
}
console.log("5")


/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne sárgára, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

let isOver = false;

document.getElementById("element-two").onmouseover = function() {
  isOver = true;
  renderSecondBox();
}

document.getElementById("element-two").onmouseout = function() {
  isOver = false;
  renderSecondBox();
}

function renderSecondBox() {
  if (isOver) {
    document.getElementById("element-two").style.backgroundColor = "yellow"
  }
  else {
    document.getElementById("element-two").style.backgroundColor = "firebrick"
  }
}

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

function getRandom (min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}

document.getElementById("element-three").ondblclick = function() {
  document.getElementById("element-three").firstElementChild.innerHTML = getRandom(1,20)
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById("element-four").onclick = function() {
  document.getElementById("element-four").classList.add("hidden");
  setTimeout(function() {
    document.getElementById("element-four").classList.remove("hidden");
  }, 1000)
};

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/

document.getElementById("element-five").onclick = function() {
  var boxes = document.querySelectorAll(".shape");

  for (box of boxes) {
    box.style.borderRadius = "50%";
  }
};


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/
document.getElementById("box-6").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    if (event.target.boxNumber.value == "")
    {
      document.getElementById("element-six").firstElementChild.innerHTML = "-";
    } else {
      document.getElementById("element-six").firstElementChild.innerHTML = event.target.boxNumber.value;
    }
});



/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
document.getElementById("element-seven").addEventListener("keypress", function(event) {
  document.getElementById("element-seven").firstElementChild.innerHTML = document.getElementById("box7-input").value;
});




/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
function event_one(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  console.log(event);
  var coor = "X : " + x + ", Y : " + y;
  document.getElementById("element-eight").innerHTML = coor;
}

function event_two() {
  document.getElementById("element-eight").innerHTML = "";
}



/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.
Az előállt végeredményt tároljuk el új state-ként!
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9
  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

let state = 9;

document.getElementById("element-nine").addEventListener("submit", function (event) {
  event.preventDefault();
  let operator = event.target.elements.operator.value; //mult, div, add
  let operand = event.target.elements.operand.value; //input értéke

 /*switch(operator) {
    case "mult":
      state = state * operand;
      break;
    
    case "div":
      state = state / operand;
      break;
        
    case "add":
      state = state + operand;
      break;

    case "sub":
      state = state - operand;
      break;
  }*/

  state = eval(`${state}${operator}${operand}`); // "3*6"  ->  3*6



  document.getElementById("element-nine").firstElementChild.innerHTML = state;

})


function rantottaSutes() {
  console.log("Olaj a serpenyőbe");
  console.log("Tojás a serpenyőbe");
  fuszerezes();
}

function fuszerezes() {
  console.log("Adj hozzá sót");
  console.log("Borsot is");
}

rantottaSutes();