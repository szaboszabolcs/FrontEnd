// 1) Automatikus renderelés
// 2) UI felosztása
// 3) Mellékhatások kezelése
// 4) Adatáramlás kezelése komponensek között
// 5) Kliensoldal útvonalválasztó

// const { func } = require("prop-types");

//Közvetlen DOM manipuláció -> Procedurális lépések

const btn = document.createElement("button");

btn.onclick = function () {
  alert("click");
}

btn.innerHTML = "Gomb1";
document.querySelector("#native-component").appendChild(btn);


//Végállapot leírás, virtuális DOM manipuláció -> deklarativ megoldás, React
//ReactDOM, React

//React.createElement(mit?, {milyen?/attribútomok, jellemzők objektumként}, mivel?)
//ReactDOM.render(element, hova?)

const btn2 = React.createElement("button", {onClick: function() {alert("Click React!");}}, "Gomb2");
ReactDOM.render(btn2, document.querySelector("#react-component"));

//JSX
/*ReactDOM.render(
  <button onClick={function () {alert("Click!")}}>Gomb2</button>,
  document.querySelector("#react-component")
)
*/

// Komponensek

function peldaKomponens(props) { //props -> Szülőtől érkező objektum
  return React.createElement("div", {}, "Hello");

}

ReactDOM.render(React.createElement(peldaKomponens), document.querySelector("#peldaKomponens"));


// Példa App


function App() {
    const [getState, setState] = React.useState(0)  //Két elemű tömb jelenlegi állapot,
    console.log(getState);
    return React.createElement("div", {}, 
    "App",
    React.createElement(BoxComponent, {szin: "firebrick", getState: getState, setState: setState}),
    React.createElement(BoxComponent, {szin: "blue", getState: getState, setState: setState}),
    React.createElement(BoxComponent, {szin: "green",getState: getState, setState: setState})
    )
}

function BoxComponent(props) {
    //const [getState, setState] = React.useState(0)
    console.log(props);
    return React.createElement("div", {
        style: {
            width: "200px",
            height: "200px",
            backgroundColor: props.szin,
            margin: "20px",
            padding: "20px"
        },
        onClick: () => {
            props.setState(elozo => elozo+1)
        }
    }, props.getState)
}

ReactDOM.render(React.createElement(App), document.querySelector("#app-componens"));