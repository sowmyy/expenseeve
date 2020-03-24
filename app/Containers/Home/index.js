import React, { Component } from 'react';
const jsonData = require('../data.json');
import { HomeStyles } from './style';
import ListItem from './listItem';

class Home extends Component {
    render() {
        return (
            <HomeStyles>
              <ul>
                {jsonData.ExpenseList.map((item) =>
                  <ListItem key={item.id} data={item} />
                )}
              </ul>
            </HomeStyles>
        )
    }
}

export default Home;
