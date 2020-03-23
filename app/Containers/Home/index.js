import React, { Component } from 'react';
const json = require('../data.json');

class Home extends Component {
    render() {
      console.log('data', json);
        return (
            <div>
              {/* {data.ExpenseList.map((item) => {
                item.name
              })} */}
            </div>
        )
    }
}

export default Home;
