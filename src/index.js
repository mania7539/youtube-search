import React from "react";
import ReactDOM from "react-dom";

const API_KEY = "AIzaSyDfhiV7sDt5xpP9sjxmJN6ZWNyEE7oW4hI";


// Create a new component. 
// This component will produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
