import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyDfhiV7sDt5xpP9sjxmJN6ZWNyEE7oW4hI";

// Create a new component. 
// This component will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        /* A list of videos, so use an array is very reasonable */

        this.videoSearch("surfboards");

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // add the concept of selected video.
            //
            // this.setState({ videos });
            // in ES6, the above code is equal to 
            // this.setState({ videos: videos });
        });
        /* Youtube Search: pass an JSON object with a search term and the API key */
        /* Will get 5 youtube search results, including thumbnails, title, description, on console log */
        /* The 2nd argument is the callback function */
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // _.debounce will add latency to fire off this function

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
        /* onVideoSelected is a custom function to props (pass a function to next level component), which has an argument selectedVideo */
        /* can't pass <VideoDetail video={this.state.videos[0]} /> directly, since index 0 is undefined when it first loaded. */
        /* passing 'state' is just like passing 'props' */
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
