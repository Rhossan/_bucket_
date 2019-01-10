import React, {Component} from 'react';

class ListItem extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const { id, handleListItemClick } = this.props;

        handleListItemClick(id);
    }
    render(){
        const { item, quantity, description, buttonMsg, recipe } = this.props;
        return(
            <div>
                <div className='item-container'>
                    <div className='item-header'>
                        <div id='create-space'>{`${quantity} x ${item}`}</div>
                        <div>{recipe}</div>
                    </div>
                    <div className='item-description'>
                        {description ? <p>{description}</p> : ''}
                    </div>
                    <div className='item-footer'> 
                        <button onClick={this.handleClick}>{buttonMsg}</button>
                    </div>
                </div> 
            </div>
        );
    }


}

export default ListItem;