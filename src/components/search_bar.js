
// Do this for JSX to translate to javascript call: React.createElement
import React, { Component } from "react";
// import { Component } from "react";
//      is the same as 
// const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        /* can call method defined on parent class by calling 'super' */
        // this.state = { term: '' };
        /* the property named "term" on state with empty value */

        this.state = { term: 'Starting Value' };
        /* we can set an initial value for the state */
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
                <input value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
                
            </div>
        );
        // a class-based component can be contained in a functional component, it's totally fine.
        // the 'value' property in tag will make the element into a controlled component
        // a controlled element has its 'value' set by 'state', so its value only ever changes when the state changes
        // we update the 'state' with that 'event', and re-render them with 'value' to the layout
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

// const SearchBar = () => {
//     return <input />
// }

export default SearchBar;
