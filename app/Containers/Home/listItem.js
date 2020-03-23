import React, { Component } from 'react';
import { ListItemStyles } from './style';

class ListItem extends Component {
    render() {
        return (
            <ListItemStyles>
              <p>{this.props.data.category}</p>
              <p>{this.props.data.itemName}</p>
              <p>{this.props.data.amount}</p>
              <p>{this.props.data.expenseDate}</p>
            </ListItemStyles>
        )
    }
}

export default ListItem;
