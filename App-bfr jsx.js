// const heading = document.createElement("h1");
// heading.innerHTML = "Calling from JS"

// const temp = document.getElementById("root");
// temp.appendChild(heading)

import React from 'react';
import ReactDOM from 'react-dom/client';



//React Element with react core. not dev friendly and not easy.
//React.createElement => ReactElement - JS object => HTMLElements(render)
const heading = React.createElement("h1", { id: "heading" }, "Hello Sneha!!! From React");
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, ""), React.createElement("h1", { id: "child2" }, "Hello from React module")]);

//jsx - not html written in JS. (HTML like or XML like syntax)
// jsx and react are different. JS engine understands only ecma script and is wont understand jsx because jsx is not a proper js 
//jsxheading give the object
//jsx - transpiled(converted to browser understanding) before it reached JS engine. - PARCEL(manager) | Babel(package inside parcel)
//JSX ==> babe; transpiles React.createElement => ReactElement - JS object => HTMLElements(render)
// in jsx - multiple lines them enclose with ()
const jsxheading = <h1 id="heading">namaste react using JSX</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);