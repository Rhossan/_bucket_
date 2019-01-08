import React, { Component } from 'react';
import Navbar from './Navbar';
import ListItem from './ListItem';
import Modal from './Modal';

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
            ],
            showModal: false,
            newItem: '',
            description: '',
            quantity: '1'
        };
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleCartItemClick = this.handleCartItemClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.resetFormState = this.resetFormState.bind(this);
    }


    toggleModal(){
        this.setState({ showModal: !this.state.showModal });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleListItemClick(id){
        //add to cart

        //1 - remove from listItem - by doing listItems[id]
        const {listItems, cartItems} = this.state;
        //avoid mutating state, instead return a new state
        const newListItems = listItems.slice(0);
        let cartItem = newListItems.splice(id,1);

        const newCartItems = cartItem.concat(cartItems);

        this.setState({listItems: newListItems, cartItems: newCartItems});
    }


    handleCartItemClick(id){
        // add to list 
        const { listItems, cartItems } = this.state;
        //avoid mutating state, instead return a new state
        const newCartItems = cartItems.slice(0);
        let listItem = newCartItems.splice(id, 1);

        const newListItems = listItem.concat(listItems);

        this.setState({ listItems: newListItems, cartItems: newCartItems });
    }

    handleAdd(){
        const {newItem, quantity, description} = this.state;
        //first add new item to cart
        // and then a callback to resetformState
    }

    resetFormState(){
        this.setState({
            showModal: false,
            newItem: '',
            description: '',
            quantity: '1'
            }
        );
    }


    render(){
        const { listItems, cartItems, showModal}  = this.state;
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
                    <ListItem id={id} {...item} handleListItemClick={this.handleCartItemClick} buttonMsg='Undo Selection' />
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
                    <div>Welcome</div>
                    <div>
                        <h1 className='shop-list-label'>Shopping List</h1> 
                        <ul>
                            {list}
                        </ul>
                        <button onClick={this.toggleModal}>click me</button>
                        { 
                            showModal ? (
                                <Modal>
                                    <div className='modal-content'>
                                        <form onClick={this.handleAdd}>
                                            <label>
                                                Add New Item
                                                <input
                                                    onChange={this.update('newItem')}
                                                    value={this.state.newItem}
                                                    placeholder="Add New Item"
                                                    required
                                                />
                                            </label>
                                            <label>
                                                Description
                                                <textarea 
                                                    rows='2'
                                                    onChange={this.update('description')}
                                                    value={this.state.description}
                                                    placeholder="Description"
                                                />
                                            </label>
                                            <label>
                                                Quantity
                                                <input
                                                    type='number'
                                                    step='1' min='1' max='99'
                                                    onChange={this.update('quantity')}
                                                    value={this.state.quantity}
                                                />
                                            </label>
                                            <div>
                                                <button type='submit'>
                                                    OK
                                                </button>
                                                <button onClick={this.resetFormState}>
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                        

                                    </div>
                                </Modal>
                            ) : null
                        }
                    </div>   
                    
                </div>
                
                
            </div>
        ); 
    }
}

export default App;