import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div>
                <Navbar />
                <h1>hi there</h1>
            </div>
        ); 
    }
}

export default App;