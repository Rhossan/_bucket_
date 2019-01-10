import React, {Component} from 'react';
import Bullbasaur from './assets/bullbasaur.png';
import Snorlax from './assets/snorlax.png';
import Pikachu from './assets/pikachu.png';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.switchUser(e.target.value);
    }

    render(){
       const {currentUser, users} = this.props;
        const STRING_TO_COMPONENTS = {
            'Bullbasaur': Bullbasaur,  
            'Snorlax': Snorlax,
            'Pikachu': Pikachu
        };
        let profilePic = STRING_TO_COMPONENTS[users.find(u => u.user === currentUser).img];
        return (
            <div>
                <nav>
                    <ul className="nav-container">
                        <li>_Basket_</li>
                        <div>
                            <li className='style-img'>
                                <img src={profilePic} alt="profile_pic" />
                            </li>
                            <label>
                                <select value={currentUser} onChange={this.handleChange}>
                                    {users.map(user => (
                                        <option key={user.user} value={user.user}>
                                            {user.user}
                                        </option>
                                    ))}
                                </select>
                            </label> 
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }

}










export default Navbar;