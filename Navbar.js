import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
       const {currentUser, users} = this.props;
        return (
            <div>
                <nav>
                    <ul className="nav-container">
                        <li>_basket_</li>
                        <div className="side-container">
                            <li>photo</li>
                            <li>{currentUser}</li>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }

}










export default Navbar;