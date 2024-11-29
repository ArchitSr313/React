/*
ReactElement(object)=>HTML(browser understands)
-- the object is converted in html code using render method
*/
// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React");
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i'm an h1"),React.createElement("h2",{},"i'm an h2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i'm an h1"),React.createElement("h2",{},"i'm an h2")
    ])
]);
console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);