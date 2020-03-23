import React, { Component } from 'react';
const jsonData = require('../data.json');

class Home extends Component {
    render() {
        return (
            <div>
              <ul>
                {jsonData.ExpenseList.map((item) => {
                  <li>{item.category}</li>
                })}
              </ul>
              <div>testttttttttttt</div>
            </div>
        )
    }
}

export default Home;
