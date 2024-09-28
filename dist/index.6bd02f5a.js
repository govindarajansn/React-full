// const heading = document.createElement("h1");
// heading.innerHTML = "Calling from JS"
// const temp = document.getElementById("root");
// temp.appendChild(heading)
const parent = React.createElement("h1", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, ""),
    React.createElement("h1", {
        id: "child2"
    }, "Hello from React module")
]);
const rootEle = ReactDOM.createRoot(document.getElementById("root"));
rootEle.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
