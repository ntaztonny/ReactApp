import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends Component {
    state = { 
        countersElement: [
            {id: 1, vaalue: 0},
            {id: 1, vaalue: 0},
            {id: 1, vaalue: 0},
            {id: 1, vaalue: 0},
            {id: 1, vaalue: 0},
            {id: 1, vaalue: 0}
        ]
     };
    render() { 
        return ( 
        <div>
            {this.state.countersElement.map(counter =><Counter key ={counter.id} />)};
        </div> );
    }
}
 
export default Counters;