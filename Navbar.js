import React, {Component} from 'react';
import Basket from './assets/basket.jpg';
import Bullbasaur from './assets/bullbasaur.png';
import Snorlax from './assets/snorlax.png';
import Pikachu from './assets/pikachu.png';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.switchUser(e.target.value);
    }

    render(){
       const {currentUser, users} = this.props;
        return (
            <div>
                <nav>
                    <ul className="nav-container">
                        <li>_Basket_</li>
                        <div className="side-container">
                            <label>
                                <select value={currentUser} onChange={this.handleChange}>
                                    {users.map(user => (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    ))}
                                </select>
                                {/* <li className='style-img'><img src={Bullbasaur} alt="bullbasaur" /></li>
                                <li>{currentUser}</li> */}
                            </label> 
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }

}










export default Navbar;