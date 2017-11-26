
// Do this for JSX to translate to javascript call: React.createElement
import React, { Component } from "react";
// import { Component } from "react";
//      is the same as 
// const Component = React.Component;

class SearchBar extends Component {

    render() {
        return (
            <input />
        );
    }
}

// const SearchBar = () => {
//     return <input />
// }

export default SearchBar;
