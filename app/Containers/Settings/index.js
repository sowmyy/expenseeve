import React, { Component } from 'react';
import jsonData from '../data.json';
import { SettingsStyle, CategoryAddSection } from './style';
import { ReactSVG } from 'react-svg';
// import closeIcon from 'assets/close.svg';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      this.addCategory = this.addCategory.bind(this);
  }
  addCategory(e) {
    e.preventDefault();
    const name = this.input.current.value;
    console.log('name', name);
  }
  render() {
      return (
          <SettingsStyle>
            <h4 className="heading">Add Category</h4>
            <CategoryAddSection>
              <input
                id="myInput"
                ref={(ref) => (this.myInput = ref)}
                className="textBox"
                type="text"
              />
              <button onClick={this.addCategory} className="button">ADD</button>
            </CategoryAddSection>
            <h4 className="heading">Category List</h4>
            <ul>
              {jsonData.ExpenseList.map(item =>
                <li>
                  <div>{item.category} close</div>
                  {/* <ReactSVG className="icon" src={closeIcon} /> */}
                </li>
              )}
            </ul>
          </SettingsStyle>
      )
  }
}

export default Settings;
