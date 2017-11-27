
// Do this for JSX to translate to javascript call: React.createElement
import React, { Component } from "react";
// import { Component } from "react";
//      is the same as 
// const Component = React.Component;

class SearchBar extends Component {

    render() {
        // return (
        //     <input onChange={this.onInputChange} />
        // );
        // same result as the above codes 1
        // return (
        //     <input onChange={(event) => console.log(event.target.value)} />
        // );
        // same result as the above codes 2
        return (
            <input onChange={event => console.log(event.target.value)} />
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

// const SearchBar = () => {
//     return <input />
// }

export default SearchBar;
