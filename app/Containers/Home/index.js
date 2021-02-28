import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyles, Modal, ModalForm } from './style';
import ListItem from './listItem';
import closeIcon from 'assets/close.svg';
import { ReactSVG } from 'react-svg';
import { AddExpense } from './actions';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        amount: '',
        category: '',
      }
      this.setName = this.setName.bind(this);
      this.setAmount = this.setAmount.bind(this);
      this.setCategory = this.setCategory.bind(this);
      this.addExpense = this.addExpense.bind(this);
    }

    addExpense(e) {
      e.preventDefault();
      console.log(this.state);
      this.props.addExpense({
        itemName: this.state.name,
        amount: this.state.amount,
        category: this.state.category,
      });
    }

    setName(e) {
      this.setState({name: e.target.value});
    }

    setAmount(e) {
      this.setState({amount: e.target.value});
    }

    setCategory(e) {
      console.log(e.target.value);
      this.setState({category: e.target.value});
    }

    render() {
        return (
            <HomeStyles>
              <div className="container">
                <div className="interior">
                  <a className="btn" href="#open-modal">Add Expense</a>
                </div>
              </div>
              <div id="open-modal" className="modal-window">
                <div>
                  <a href="#" title="Close" className="modal-close">
                    <ReactSVG className="icon" src={closeIcon} />
                  </a>
                  <h1>Add Expense</h1>
                  <ModalForm onSubmit={this.addExpense}>
                    <label for="itemName">Item Name</label>
                    <input type="text" id="itemName" name="itemName" placeholder="Item name" value={this.state.name} onChange={this.setName} />
                    <label for="amount">Amount</label>
                    <input type="text" id="amount" name="lastname" placeholder="amount" value={this.state.amount} onChange={this.setAmount} />
                    <label for="category">Category</label>
                    <select value={this.state.category} id="category" name="category" onChange={this.setCategory}>
                      {this.props.homeReducer.ExpenseList.map((item) =>
                        <option value={item.category}>{item.category}</option>
                      )}
                    </select>
                    <input type="submit" value="Submit" />
                  </ModalForm>
                </div>
              </div>
              <ul>
                {this.props.homeReducer.ExpenseList.map((item) =>
                  <ListItem key={item.id} data={item} />
                )}
              </ul>
            </HomeStyles>
        )
    }
}

export const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer,
});

export const mapDispatchToProps = dispatch => ({
  addExpense: (data) => dispatch(AddExpense(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
