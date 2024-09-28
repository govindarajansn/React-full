// const heading = document.createElement("h1");
// heading.innerHTML = "Calling from JS"

// const temp = document.getElementById("root");
// temp.appendChild(heading)

const parent = React.createElement("h1", {}, "Hello from React module");

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(parent);