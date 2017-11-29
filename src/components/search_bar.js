
// Do this for JSX to translate to javascript call: React.createElement
import React, { Component } from "react";
// import { Component } from "react";
//      is as the same as 
// const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        /* can call method defined on parent class by calling 'super' */
        // this.state = { term: '' };
        /* the property named "term" on state with empty value */

        this.state = { term: '' };
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
        // return (
        //     <div className="search-bar">
        //         <input 
        //             value={this.state.term}
        //             onChange={event => this.setState({ term: event.target.value })} 
        //         />
                
        //     </div>
        // );
        // it's nasty to use onChange and also onSearchTermChange in the component directly, 
        //      so refactor it to separate methods to the below one.
        // a class-based component can be contained in a functional component, it's totally fine.
        // the 'value' property in tag will make the element into a controlled component
        // a controlled element has its 'value' set by 'state', so its value only ever changes when the state changes
        // we update the 'state' with that 'event', and re-render them with 'value' to the layout

        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                />
                
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
        /* two purposes of this function: 
            1. set state of this component 
            2. fire off the callback function on search term change
        */
    }
}

// const SearchBar = () => {
//     return <input />
// }

export default SearchBar;
