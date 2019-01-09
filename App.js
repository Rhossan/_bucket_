import React, { Component } from 'react';
import Navbar from './Navbar';
import ListItem from './ListItem';
// import ModelContent from './ModalContent';
import Loadable from 'react-loadable';

const LoadableModal = Loadable({
    loader: () => import('./ModalContent'),
    loading: () => <div>loading..</div>
});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: ['reef', 'mike', 'sam'],
            currentUser: 'reef',
            cartItems: [
                {item: 'kale', quantity: 2, description:'', recipe: ''}, 
                {item: 'eggs', quantity: 1, description: '', recipe: ''},
                {item: 'yogurt', quantity: 4, description: '', recipe: ''},
            ],
            listItems: [
                { item: 'coffee', quantity: 1, description: '', recipe: '' },
                { item: 'chicken breast', quantity: 2, description: 'get the one on sale!', recipe: 'mike:chicken' }, 
                { item: 'ice cream', quantity: 1, description: '', recipe: 'reef:sundae' }, 
                { item: 'banana', quantity: 1, description: '', recipe: 'reef:sundae' }, 
                { item: 'cereal', quantity: 2, description: '', recipe: '' }
            ],
            showModal: false,
            newItem: '',
            description: '',
            quantity: '1',
            recipe: ''
        };
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleCartItemClick = this.handleCartItemClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.resetFormState = this.resetFormState.bind(this);
        this.update = this.update.bind(this);
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
        const { newItem, quantity, description, listItems, currentUser, recipe} = this.state;
        //first add new item to cart
        let newRecipe = recipe !== '' ? currentUser + ":" + recipe : '';
        let item = [{item: newItem, quantity, description, recipe: newRecipe}];
        const newListItems = item.concat(listItems);
        // and then a callback to resetformState
        this.setState({listItems: newListItems}, this.resetFormState);
    }

    resetFormState(){
        this.setState({
            showModal: false,
            newItem: '',
            description: '',
            quantity: '1',
            recipe: ''
            }
        );
    }


    render(){
        const { listItems, cartItems, showModal, currentUser, users, newItem, description, quantity, recipe}  = this.state;
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
                <Navbar currentUser={currentUser} users={users}/>
                <div className='content-container'>
                    <div>
                        <h1>Shopping Cart</h1>
                        <ul>
                            {cart}
                        </ul>
                    </div>
                    <div className='center-content'>
                        <div className='button-content'>
                            <button onClick={this.toggleModal}>click me</button>
                        </div>
                    </div>
                    <div>
                        <h1 className='shop-list-label'>Shopping List</h1> 
                        <ul>
                            {list}
                        </ul>
                       {
                           showModal ? 
                                <LoadableModal newItem={newItem} description={description} quantity={quantity} recipe={recipe} handleAdd={this.handleAdd} update={this.update} resetFormState={this.resetFormState}/> 
                                :
                                null
                       }
                    </div>   
                    
                </div>
                
                
            </div>
        ); 
    }
}

export default App;