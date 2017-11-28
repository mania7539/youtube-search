import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyDfhiV7sDt5xpP9sjxmJN6ZWNyEE7oW4hI";

// Create a new component. 
// This component will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
        }
        /* A list of videos, so use an array is very reasonable */

        YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
            console.log(videos);
            this.setState({ videos });
            // in ES6, the above code is equal to 
            // this.setState({ videos: videos });
        });
        /* Youtube Search: pass an JSON object with a search term and the API key */
        /* Will get 5 youtube search results, including thumbnails, title, description, on console log */
        /* The 2nd argument is the callback function */
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
        /* passing 'state' is just like passing 'props' */
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
