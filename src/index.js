import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyDfhiV7sDt5xpP9sjxmJN6ZWNyEE7oW4hI";

/* Youtube Search: pass an JSON object with a search term and the API key */
/* Will get 5 youtube search results, including thumbnails, title, description, on console log */
YTSearch({key: API_KEY, term: "surfboards"}, function(data) {
    console.log(data);

});


// Create a new component. 
// This component will produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
