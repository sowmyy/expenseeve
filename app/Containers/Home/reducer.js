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
    'Grocery',
    'Miscellanoeus',
    'Vegetables',
    'Medical',
  ]
}

function homereducer(state=initialstate, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
    const { CategoryList } = state;
    CategoryList.push({ id: CategoryList.length+1,  ...action.data });
      return { ...state , CategoryList };
    default:
      return state;
  }
}

export default homereducer;
