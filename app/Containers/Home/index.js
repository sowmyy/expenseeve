import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyles, Modal, ModalForm } from './style';
import ListItem from './listItem';
import closeIcon from 'assets/close.svg';
import { ReactSVG } from 'react-svg';

class Home extends Component {
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
                    <input type="text" id="itemName" name="itemName" placeholder="Item name" />
                    <label for="amount">Amount</label>
                    <input type="text" id="amount" name="lastname" placeholder="amount" />
                    <label for="category">Category</label>
                    <select id="category" name="category">
                      {this.props.ExpenseList.map((item) =>
                        <option value={item.category}>{item.category}</option>
                      )}
                    </select>
                    <input type="submit" value="Submit" />
                  </ModalForm>
                </div>
              </div>
              <ul>
                {this.props.ExpenseList.map((item) =>
                  <ListItem key={item.id} data={item} />
                )}
              </ul>
            </HomeStyles>
        )
    }
}

export const mapStateToProps = (state) => ({
  ExpenseList: state.homeReducer.ExpenseList,
});

export const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
