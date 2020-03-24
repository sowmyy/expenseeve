import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SettingsStyle, CategoryAddSection } from './style';
import { ReactSVG } from 'react-svg';

import { AddCategory, RemoveCategory } from '../Home/actions.js';
import closeIcon from 'assets/close.svg';

class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      this.addCategory = this.addCategory.bind(this);
      this.removeCategory = this.removeCategory.bind(this);
      this.myInput = null;
  }
  addCategory(e) {
    e.preventDefault();
    const name = this.myInput.value;
      this.props.addCategory({
        category: name,
      })
      this.myInput.value = '';
  }
  removeCategory(id) {
    this.props.removeCategory(id);
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
              {this.props.home.CategoryList.map(item =>
                <li>
                  <div className="categoryName">{item.category}</div>
                  <a onClick={() => this.removeCategory(item.id)}><ReactSVG className="icon" src={closeIcon} /></a>
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
    removeCategory: (data) => dispatch(RemoveCategory(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
