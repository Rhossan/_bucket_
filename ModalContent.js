import React, {Component} from 'react';
import Modal from './Modal'; 

class ModelContent extends Component{
    constructor(props){
        super(props); //handleAdd and update
    }

    render(){

        const {newItem, description, quantity, recipe} = this.props;
        return(
           
        <Modal>
            <div className='modal-content'>
                <form>
                    <label>
                        Add New Item
                            <input
                            onChange={this.props.update('newItem')}
                            value={newItem}
                            placeholder="Add New Item"
                            required
                        />
                    </label>
                    <label>
                        Description
                            <textarea
                            rows='2'
                            onChange={this.props.update('description')}
                            value={description}
                            placeholder="Description"
                        />
                    </label>
                    <label>
                        Recipe?
                            <input
                            onChange={this.props.update('recipe')}
                            value={recipe}
                            placeholder="optional if recipe"
                        />
                    </label>
                    <label>
                        Quantity
                            <input
                            type='number'
                            step='1' min='1' max='99'
                            onChange={this.props.update('quantity')}
                            value={quantity}
                        />
                    </label>
                    <div>
                        <button type='submit' onClick={this.props.handleAdd}>
                            OK
                        </button>
                        <button onClick={this.props.resetFormState}>
                            Cancel
                        </button>
                    </div>
                </form>


            </div>
        </Modal >
        );               
    }
}

export default ModelContent;