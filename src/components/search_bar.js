
// Do this for JSX to translate to javascript call: React.createElement
import React, { Component } from "react";
// import { Component } from "react";
//      is the same as 
// const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        /* can call method defined on parent class by calling 'super' */
        this.state = { term: '' };
        /* the property named "term" on state*/
    }


    render() {
        // return (
        //     <input onChange={this.onInputChange} />
        // );
        // same result as the above codes 1
        // return (
        //     <input onChange={(event) => console.log(event.target.value)} />
        // );
        // same result as the above codes 2
        // return (
        //     <input onChange={event => console.log(event.target.value)} />
        // );

        // this.state.term = event.target.value; is a "BAD" practice.
        // only refer to this.state.term for a get manner, 
        // while this.setState will inform the change of the state
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
            </div>
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
