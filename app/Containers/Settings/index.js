import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SettingsStyle, CategoryAddSection } from './style';
import { ReactSVG } from 'react-svg';

import {AddCategory} from '../Home/actions.js';
import closeIcon from 'assets/close.svg';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      this.addCategory = this.addCategory.bind(this);
      this.myInput = null;
  }
  addCategory(e) {
    e.preventDefault();
    const name = this.myInput.value;
    // console.log('name', name);
    // if (this.state.value.length>0) {
      this.props.addCategory({
        category: name,
      })
      this.myInput.value = '';
      // this.setState({value: ''});
    // }
  }
  render() {
      return (
          <SettingsStyle>
            <h4 className="heading">Add Category</h4>
            <CategoryAddSection>
              <input
                id="myInput"
                ref={(ref) => {this.myInput = ref}}
                className="textBox"
                type="text"
              />
              <button onClick={this.addCategory} className="button">ADD</button>
            </CategoryAddSection>
            <h4 className="heading">Category List</h4>
            <ul>
              {this.props.home.ExpenseList.map(item =>
                <li>
                  <div>{item.category} close</div>
                  <ReactSVG className="icon" src={closeIcon} />
                </li>
              )}
            </ul>
          </SettingsStyle>
      )
  }
}

const mapStateToProps = (state) => ({
  home: state.homeReducer,
});

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (data) => dispatch(AddCategory(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
