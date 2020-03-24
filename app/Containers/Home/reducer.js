const initialstate = {
  "ExpenseList": [
    {
      "id": 1,
      "category": "Grocery",
      "itemName": "Bread",
      "amount": "40",
      "expenseDate": "25/02/2020"
    },
    {
      "id": 2,
      "category": "Medical",
      "itemName": "Tablets",
      "amount": "150",
      "expenseDate": "22/02/2020"
    },
    {
      "id": 3,
      "category": "Vegetables",
      "itemName": "General",
      "amount": "250",
      "expenseDate": "27/02/2020"
    },
    {
      "id": 4,
      "category": "Miscellaneous",
      "itemName": "Misc.",
      "amount": "500",
      "expenseDate": null
    },
    {
      "id": 5,
      "category": "Grocery",
      "itemName": "Eggs",
      "amount": "50",
      "expenseDate": "20/02/2020"
    }
  ],
  "CategoryList": [
    {
      "id": 1,
      "category": "Grocery"
    },
    {
      "id": 2,
      "category": "Medical"
    },
    {
      "id": 3,
      "category": "Miscellaneous"
    },
    {
      "id": 4,
      "category": "Vegetables"
    }
  ]
}

function homereducer(state=initialstate, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      const { CategoryList } = state;
      CategoryList.push({ id: CategoryList.length + 1,  ...action.data });
      return { ...state, CategoryList };
    case "ADD_EXPENSE":
      const { ExpenseList } = state;
      ExpenseList.push({ id: ExpenseList.length + 1, ...action.data });
      return { ...state, ExpenseList };
    case "REMOVE_CATEGORY":
      const { CategoryList } = state;
      const newList = CategoryList.filter(expense => expense.id === action.data);
      return { ...state, CategoryList};
    default:
      return state;
  }
}

export default homereducer;
