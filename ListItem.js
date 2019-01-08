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
        const { item, quantity, description, buttonMsg } = this.props;
        return(
            <div>
                <div className='item-container'>
                    <div className='item-header'>
                        {`${quantity} x ${item}`}
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
// make it a functional component? might be the right idea, so instead of List, we have listItem, it is stateless after all
// also think about undo option later
