import React, { Component } from 'react';
import Navbar from './Navbar';
import ListItem from './ListItem';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: ['reef', 'mike', 'sam'],
            currentUser: 'reef',
            cartItems: [
                {item: 'kale', quantity: 2, description:'', recipe: false}, 
                {item: 'eggs', quantity: 1, description: '', recipe: false},
                {item: 'yogurt', quantity: 4, description: '', recipe: false},
            ],
            listItems: [
                { item: 'coffee', quantity: 1, description: '', recipe: false },
                { item: 'chicken breast', quantity: 2, description: 'get the one on sale!', recipe: 'mike' }, 
                { item: 'ice cream', quantity: 1, description: '', recipe: 'sundae' }, 
                { item: 'banana', quantity: 1, description: '', recipe: 'sundae' }, 
                { item: 'cereal', quantity: 2, description: '', recipe: false }
            ] 
        };
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }
    handleListItemClick(id){
        
    }

    render(){
        const { listItems, cartItems}  = this.state;
        const list = listItems.map((item, id) => {
            return (
                <li key={id} >
                    <ListItem id={id} {...item} handleListItemClick={this.handleListItemClick} buttonMsg='Add to Cart' />
                </li>
            );
        });

        const cart = cartItems.map((item, id) => {
            return (
                <li key={id} >
                    <ListItem id={id} {...item} handleListItemClick={this.handleListItemClick} buttonMsg='Undo Selection' />
                </li>
            );
        });
        return(
            <div>
                <Navbar />
                <div className='content-container'>
                    <div>
                        <h1>Shopping Cart</h1>
                        <ul>
                            {cart}
                        </ul>
                    </div>
                    
                    <div>
                        <h1 className='shop-list-label'>Shopping List</h1> 
                        <ul>
                            {list}
                        </ul>
                    </div>   
                    
                </div>
                
                
            </div>
        ); 
    }
}

export default App;