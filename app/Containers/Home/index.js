import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyles, Modal, ModalForm, ExpenseCard } from './style';
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
        expenseDate: '',
        isModalOpen: false,
        expenditure: 0,
        amountTotal: 0,
      }
      this.setName = this.setName.bind(this);
      this.setAmount = this.setAmount.bind(this);
      this.setCategory = this.setCategory.bind(this);
      this.addExpense = this.addExpense.bind(this);
      this.setExpenseDate = this.setExpenseDate.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
      let amountSpent = 0;
      this.props.homeReducer.ExpenseList.forEach((item, i) => {
        amountSpent = amountSpent + item.amount;
      });
      const expenditurePercentage = (amountSpent / this.props.homeReducer.Budget) * 100;
      this.setState({ expenditure: expenditurePercentage });
    }
    addExpense(e) {
      e.preventDefault();
      this.props.addExpense({
        itemName: this.state.name,
        amount: this.state.amount,
        category: this.state.category,
        expenseDate: this.state.expenseDate,
      });
    }
    openModal() {
      this.setState({ isModalOpen: true });
    }
    closeModal() {
      this.setState({ isModalOpen: false });
    }
    setName(e) {
      this.setState({ name: e.target.value });
    }

    setAmount(e) {
      this.setState({ amount: e.target.value });
    }

    setCategory(e) {
      this.setState({ category: e.target.value });
    }
    setExpenseDate(e) {
      this.setState({ expenseDate: e.target.value });
    }

    render() {
        const headingData = {
          "category": "CATEGORY",
          "itemName": "ITEM",
          "amount": "AMOUNT",
          "expenseDate": "DATE",
          "isHeading": true,
        };
        const percentageSpent = (this.state.expenditure / 100) * 180;
        return (
            <HomeStyles>
              <ExpenseCard circleProgress={percentageSpent}>
                <div class="circle-wrap">
                  <div class="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle"> {this.state.expenditure} </div>
                  </div>
                </div>
              </ExpenseCard>
              <div className="container">
                <div className="interior">
                  <a className="btn" onClick={this.openModal}>Add Expense</a>
                </div>
              </div>
              {this.state.isModalOpen && <div className="modal-window">
                <div>
                  <a onClick={this.closeModal} className="modal-close">
                    <ReactSVG className="icon" src={closeIcon} />
                  </a>
                  <h1>ADD EXPENSE</h1>
                  <ModalForm onSubmit={this.addExpense}>
                    <label for="itemName">Item Name</label>
                    <input type="text" id="itemName" name="itemName" placeholder="Item name" value={this.state.name} onChange={this.setName} />
                    <label for="amount">Amount</label>
                    <input type="text" id="amount" name="lastname" placeholder="amount" value={this.state.amount} onChange={this.setAmount} />
                    <label for="expenseDate">Expense Date</label>
                    <input type="date" id="expenseDate" value={this.state.expenseDate} name="expenseDate" onChange={this.setExpenseDate} />
                    <label for="category">Category</label>
                    <select value={this.state.category} id="category" name="category" onChange={this.setCategory}>
                      {this.props.homeReducer.ExpenseList.map((item) =>
                        <option value={item.category}>{item.category}</option>
                      )}
                    </select>
                    <input type="submit" value="Submit" />
                  </ModalForm>
                </div>
              </div>}
              <ul>
                <ListItem data={headingData} />
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
