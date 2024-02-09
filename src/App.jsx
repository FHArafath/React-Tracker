import { useState } from "react";
import "./App.css";
import Expense from "./componants/Expense";
import Navbar from "./componants/Navbar";
import ExpenseFilter from "./componants/ExpenseFilter";
import Expenseform from "./componants/Expenseform";

function App() {
  const [expenses, setExpenses] = useState([
    // {
    //   id: 1,
    //   category: "Utility",
    //   description: "house hold expense",
    //   amount: 100,
    // },
    // {
    //   id: 2,
    //   category: "Utility",
    //   description: "test",
    //   amount: 200,
    // },
    // {
    //   id: 3,
    //   category: "Groceries",
    //   description: "meat",
    //   amount: 500,
    // },
    // {
    //   id: 4,
    //   category: "Groceries",
    //   description: "frute",
    //   amount: 300,
    // },
    // {
    //   id: 5,
    //   category: "Groceries",
    //   description: "house hold expense",
    //   amount: 50,
    // },
  ]);

  const removeItem = (id) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto p-4 rounded-xl mt-10">
        <Expenseform addExpense={addExpense} />
        <div className="max-w-[800px] mx-auto border-gray-700 border-2 p-4 rounded-xl mt-10">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <Expense expenses={filterCategory} onDelete={removeItem} />
        </div>
      </div>
    </>
  );
}

export default App;
