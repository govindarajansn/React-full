// function FirstComponent(){
//     return(
//         <div>

//         </div>
//     )
// }

import React from 'react';
import ReactDOM from 'react-dom/client';


//React element = jsx is react element
const jsxheading = (<h1 id="heading">
    namaste react using JSX
</h1>)

//React Component - classs based components(old way) and functional components(new way)
//React functional component = a fn that returns a piece of react element/jsx code
const HeaderComponent = () => {
    return (
        <div id="container">

            <h1>Namaste JS from React functional component</h1>
            <HeaderComponent2 />
        </div>
    )
}

const HeaderComponent2 = () => (
    <div id="container">
        <h1>Hello From HeaderComponent2</h1>
    </div>
)







const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading); Render the react element directly

root.render(<HeaderComponent />)


// we can't render the React component directly - we have to use <HeaderComponent2 />
// component composition - combining two compoennet into single component