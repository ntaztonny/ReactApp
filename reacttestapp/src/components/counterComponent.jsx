import React, { Component, createContext } from 'react';


class Counter extends Component {
    //change this to a controlled state from the counterComponents class
    state = {
        Count: this.props.value,
        ImageUrl: 'https://picsum.photos/200',
        Name: 'Ntambaazi Tonny',
        Gender: 'Male',
        Age: '29',
        };
    address= {
            Street: '11 rue Germaine Tillion',
            Street2: 'studio 616',
            Statecode: '94200',
            State: 'Ivry Sur Seine',
            Country: 'France'
        };

    styles = {
            fontWeight: 'bold',
            fontSize: 20,
            color: "Red",
            
        };

    /*constructor(){
            super();
           this.handleIncrement =  this.handleIncrement.bind(this);
        }*/

    handleIncrement = () =>{
        if(this.state.Count > 0)
         this.setState({Count: this.state.Count+1});
    };

    handleDecrement = () =>{
        if(this.state.Count > 0 )
        this.setState({Count: this.state.Count-1});
   };

    
    render() { 
        
        return (<React.Fragment> <br/>
                    <span>{this.formatCount()}</span><br/>
                    <img src='https://picsum.photos/200' alt =""/><br/>
                    <span className="badge badge-primary"> {this.state.Name}</span><br/>
                    <span> {this.address.Street}</span><br/>
                    <span> {this.address.Street2}</span><br/>
                    <span> {this.address.Statecode}</span><br/>
                    <span> {this.address.State}</span><br/>
                    <span> {this.address.Country}</span><br/>
                    <h3 style = {this.styles}> This is a heading 3</h3>
                    <h4 style = {{color:this.changeColor()}}> This is a heading 4</h4>
                    <p> This is a component rendered to the html DOM; no big deal!</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                    </ul>
                    <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increase</button>  
                    <span> <button onClick = {this.handleDecrement} className="btn btn-danger btn-sm m-2">Decrease</button>  </span>  
                    <span> <button onClick = {() =>this.props.onDelete(this.props.id)} className="btn btn-primary btn-sm m-2">Delete</button>  </span>  
                </React.Fragment>
                )
                 
    }

    changeColor() {
        let headColor =  this.state.Count === 0 ? 'red' : 'blue';
        return headColor;
    }

    formatCount(){
      
        const Count = this.state.Count;
        return (Count === 0 ? 'select a non zero value': Count);
        //return (this.state.Count === 0 ? 'please select a non zero value': this.state.Count);
    }

}

 
export default Counter;

