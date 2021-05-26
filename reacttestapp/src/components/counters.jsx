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
     
     originalState = this.state;
     handleDelete = counterID =>{ 
        console.log("Delete called!", counterID)
        const counters = this.state.countersElement.filter(c => c.id !== counterID);
        this.setState({countersElement : counters})
    };

    handleReset = () =>{ 
        /*
         const counterElements = this.state.countersElement.map(c =>{
            c.value = this.state.value;
            return c;})*/
            const c = [...this.state.countersElement];
        this.setState({counterElement: c});
             
    }

    render() { 
        
        return (
        <div>
            <button onClick = {this.handleReset}>Reset</button>
            {this.state.countersElement.map(count =>
                (<Counter 
                    key={count.id} 
                    onDelete = {this.handleDelete} 
                    value={count.value} 
                    id = {count.id}
                    selected = {true}
                />)
                )}
          
        </div> );
       
    }
}
 
export default Counters;
