import React, { Component } from 'react';
import { ListItemStyles } from './style';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/close.svg';

class ListItem extends Component {
    render() {
        return (
            <ListItemStyles heading={this.props.data.isHeading}>
              <p>{this.props.data.category}</p>
              <p>{this.props.data.itemName}</p>
              <p>{this.props.data.amount}</p>
              <p>{this.props.data.expenseDate}</p>
            </ListItemStyles>
        )
    }
}

export default ListItem;
