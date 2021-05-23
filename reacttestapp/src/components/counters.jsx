import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends Component {
    state = { 
        countersElement: [
            {id: 1, value: 4},
            {id: 2, value: 2},
            {id: 3, value: 0},
            {id: 4, value: 8},
            {id: 5, value: 4},
            {id: 6, value: 7}
        ]
     };
    render() { 
        
        return ( 
        <div>
            {this.state.countersElement.map(count =><Counter key ={count.id} value={count.value} selected = {true}/>)};
          
        </div> );
       
    }
}
 
export default Counters;
